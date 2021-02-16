const {Cluster} = require('puppeteer-cluster');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const {compareAndSaveResults,filterData} = require('./resultAnalysis');
const {constructUrls} = require('./utils');
const {sendEmail} = require('./send-email');

const getData  = async(counter)=>{
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 10,
        timeout: 5*60*1000,
        puppeteerOptions:{
            args:[
            '--no-sandbox', 
            '--disable-setuid-sandbox'
        ],
        headless:true,
        executablePath:"/usr/bin/chromium-browser"
    }
    });
    
    await cluster.task(async ({page,data:webData})=>{
        webData.machines = constructUrls(webData.searchUrl,webData.insertPos);
        await extractProducts(webData,page,0).then(async (data)=>{
                let filteredData = await filterData(data);
                
                await compareAndSaveResults(filteredData);
        });
    });

    for(index in websiteData){
        try{
            cluster.execute(websiteData[index]);
        }catch(e){
            console.log(e)
        }
        
    }
    console.log(counter)
    await cluster.idle();
    await cluster.close();
    await sendEmail();
    await getData(counter++);
};
module.exports = getData;
