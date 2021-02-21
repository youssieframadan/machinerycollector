const {mongoUri,blacklistedWords} = require('./data');
const product = require('./models/product');



const filterData =async data=>{
    let filterdData = []
    //remove unwanted machines
    filterdData = data.filter((product)=>{
        product.title = product.title.replace(/[^0-9a-z-\s]/gi, '')
        if(product.title.toLowerCase().match(new RegExp('\\b'+product.machineName+'\\b')))
            if(product.title.toLowerCase().includes('cat'))
                console.log(true)
        return
    })
    //remove blacklisted words
    filterdData = filterdData.filter((product)=>{
        let remove = false;
        for(index in blacklistedWords){
            if(product.title.toLowerCase().includes(blacklistedWords[index])){
                remove = true;
            }
        }
        if(!remove){
            return true
        }else{
            return false
        }
    })
    filterdData.forEach(element =>{
        element.price = element.price.replace(/\D/g,'');
    });
    return filterdData;
}

const compareAndSaveResults =async data=>{
    try{
        data.forEach(async element => {
            await product.updateOne({link:element.link},element,{upsert: true});
        });
        return 
    }catch(err){
        console.log(err);
    }
}
module.exports = {compareAndSaveResults,filterData}