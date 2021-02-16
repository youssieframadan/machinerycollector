const {Cluster} = require('puppeteer-cluster');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const {compareAndSaveResults,filterData} = require('./resultAnalysis');
const {constructUrls} = require('./utils');

const getData  = async()=>{
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
                console.log(filteredData);
                await compareAndSaveResults(filteredData);
        });
    });

    for(index in websiteData){
        cluster.execute(websiteData[index]);
    }

    await cluster.idle();
    await cluster.close();
    // await getData();
};
module.exports = getData;
