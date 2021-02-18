const {Cluster} = require('puppeteer-cluster');
const {extractProducts} = require('./productsScraper');
const {websiteData} = require('./data');
const {compareAndSaveResults,filterData} = require('./resultAnalysis');
const {constructUrls} = require('./utils');
const sendEmail = require('./send-email')
const getData  = async(counter)=>{
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 3,
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
                console.log("crawled "+filteredData.length+" product from "+ webData.domain);
                await compareAndSaveResults(filteredData);
        });
    });
    cluster.on('taskerror', (err, data, willRetry) => {
        if (willRetry) {
          console.warn(`Encountered an error while crawling ${data.domain}. ${err.message}\nThis job will be retried`);
        } else {
          console.error(`Failed to crawl ${data.domain}: ${err.message}`);
        }
    });
    for(index in websiteData){
        try{
            cluster.queue(websiteData[index]);
        }catch(e){
            console.log(e)
        }
        
    }
    console.log(counter)
    counter = counter+1;
    await cluster.idle();
    await cluster.close();
    await sendEmail();
    getData(counter);
};
module.exports = getData;
