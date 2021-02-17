const blacklistedWords = ['hire','manual','parts','book','part','book','bucket','attachments']

const machineData = [
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'910'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'920'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'930'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'936'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'936E'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'936F'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'950'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'950E'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'950B'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'950H'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'966E'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'966F'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'966D'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'966H'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'970F'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'972G'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'972H'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'980H'
    },
    {
        brand:'Caterpillar',
        category:'wheel loader',
        machineName:'980G'
    },
]

const websiteData = [
    
        {
            
        searchUrl:'https://avcar.today/heavy/?mark=caterpillar&model=&country=',
        insertPos:50,
        productSelector:'div.row div.col-md-6',
        nameSelector:'div.card-header',
        priceSelector:'div.convert-currency',
        linkSelector:'div.card-body a',
        imgSelector:'a.ml-3 img.lazy',
        country:'USA',
        domain:'https://avcar.today/'
    },
        {
            
        searchUrl:'https://www.auta.com/search/?s=&zip=',
        insertPos:31,
        productSelector:'div.vehicle-wrapper ',
        nameSelector:'h3 a.notranslate',
        priceSelector:'div.convert-currency',
        linkSelector:'h3 a.notranslate',
        imgSelector:'div div.m-block a img',
        country:'USA',
        domain:'https://www.auta.com/search/?s=Caterpillar&distance=100'
    },
    {
            
        searchUrl:'https://www.agriads.com/us/search?c=613&q=&location=&l=&r=',
        insertPos:42,
        productSelector:'div.item-list div.row',
        nameSelector:'div.items-details h2 a',
        priceSelector:'p.item-price',
        linkSelector:'div.items-details h2 a',
        imgSelector:'img.img-thumbnail',
        country:'USA',
        domain:'https://www.agriads.com/search?c=613&_token=XNm0dpKvevFjSHm6fvWZVp0KqZ1DZV7j3IiEQp4t&orderBy=priceAsc'
    },
        {
            
        searchUrl:'https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/?searchfor=&industry=construction%20&%20forestry&category=loaders&subcategories=wheel%20loader&pageno=1&sortorder=2,ASC&pagesize=24',
        insertPos:89,
        productSelector:'div.supergrid-bucket a div.supergrid-listing',
        nameSelector:'a.car-summary-title div.search-header',
        priceSelector:'span.price',
        linkSelector:'button.email-consultant-search-trigger a.green',
        imgSelector:'span.productblock-lazy-images',
        country:'New Zealand',
        domain:'https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/?sortorder=2,ASC&pagesize=24&pageno=1&industry=construction'
    },
    {
        searchUrl:'https://www.trademe.co.nz/Browse/SearchResults.aspx?searchString=&type=Search&searchType=3797&user_region=100&user_district=0&generalSearch_keypresses=0&generalSearch_suggested=0&generalSearch_suggestedCategory=&rsqid=ad46bfc0482c4c85abc6909a98ea868d-005&condition=used',
        insertPos:65,
        productSelector:'tm-search-card-switcher',
        nameSelector:'div.info div.title',
        priceSelector:'div.tm-motors-search-card__price',
        linkSelector:'a.tm-motors-search-card__link',
        imgSelector:'div.supergrid-listing div.image',
        country:'New Zealand',
        domain:'https://www.trademe.co.nz/'
    },
    {
        searchUrl:'https://www.farmtrader.co.nz/search/type-loaders/subtype-wheel/keywords-',
        insertPos:72,
        productSelector:'div.rescontent div.reswrap',
        nameSelector:'div.reswrap-title a span.left',
        priceSelector:'span.currency-change',
        linkSelector:'div.reswrap-title a',
        imgSelector:'div.img-large a img.lazyload',
        country:'New Zealand',
        domain:'https://www.farmtrader.co.nz/'
    },
    {
        searchUrl:'https://www.dealsonwheels.co.nz/search/type-loaders/subtype-wheel/keywords-',
        insertPos:75,
        productSelector:'div.rescontent div.reswrap',
        nameSelector:'div.reswrap-title a span.left',
        priceSelector:'span.currency-change',
        linkSelector:'div.reswrap-title a',
        imgSelector:'div.img-large a img.lazyload',
        country:'New Zealand',
        domain:'https://www.dealsonwheels.co.nz/search/type-loaders'
    },
    {
        searchUrl:'https://www.agdealer.com/listings?q=',
        insertPos:36,
        productSelector:'div.listing-result__row',
        nameSelector:'h2.listing-result__title a',
        priceSelector:'span.price--main',
        linkSelector:'h2.listing-result__title a',
        imgSelector:'div.listing-result__photo img',
        country:'canda',
        domain:'https://www.agdealer.com'
    },
    {
        searchUrl:'https://www.autotrader.ca/heavy-equipment/wheel%20loader/keyword//?rcp=100&rcs=0&srt=9&prx=-1&loc=m5H2n2&hprc=False&wcp=False&sts=New-Used&showcpo=1&inMarket=advancedSearch',
        insertPos:54,
        productSelector:'div.result-item-inner ',
        nameSelector:'a.result-title.click span',
        priceSelector:'span.price-amount',
        linkSelector:'a.result-title.click',
        imgSelector:'img.photo-image',
        country:'canda',
        domain:'https://www.autotrader.ca/'
    },
    {
        searchUrl:'https://www.farms.com/used-farm-equipment/used-search-result.aspx?q=&category=tractors&sub-category=loader%20tractors',
        insertPos:68,
        productSelector:'div.search-result-item',
        nameSelector:'div.search-result-details h2 a',
        priceSelector:'div.search-result-dealer h3 span',
        linkSelector:'div.search-result-details h2 a',
        imgSelector:'img.lazy',
        country:'canda',
        domain:'https://www.farms.com/'
    },
    {
        searchUrl:'https://www.supplypost.com/listings?q=',
        insertPos:38,
        productSelector:'li.media',
        nameSelector:'a.js-track-event',
        priceSelector:'span.pull-right',
        linkSelector:'a.js-track-event',
        imgSelector:'img.media-object',
        country:'canda',
        domain:'https://www.supplypost.com//'
    },
    {
        searchUrl:'https://nlbuysell.com/search-results.php?keywords=&cat1=33&cat2=&region=&sortby=datedesc',
        insertPos:50,
        productSelector:'article.list-item',
        nameSelector:'h1.title',
        priceSelector:'span.price',
        linkSelector:'div.img a',
        imgSelector:'div.img a img',
        country:'canda',
        domain:'https://nlbuysell.com/'
    },
    {
        searchUrl:'https://www.justheavyequipment.com.au/equipment-for-sale/search?keyword=',
        insertPos:72,
        productSelector:'div.product-listing-item--normal',
        nameSelector:'h2.product-listing-item__title',
        priceSelector:'div.product-listing-item__cost',
        linkSelector:'a.product-listing-item__enquire',
        imgSelector:'img.c-lazy',
        country:'Australia',
        domain:'justheavyequipment.com.au'
    },
     {
        
        searchUrl:'https://www.gumtree.com.au/s-automotive//k0c9299',
        insertPos:40,
        productSelector:'div.user-ad-collection-new-design__wrapper--row a.user-ad-row-new-design',
        nameSelector:'span.user-ad-row-new-design__title-span',
        priceSelector:'span.user-ad-price-new-design__price',
        linkSelector:'a.user-ad-row-new-design',
        imgSelector:'img.user-ad-image__thumbnail',
        country:'Australia',
        domain:'gumtree.com.au'
    },
    {
        searchUrl:'https://www.machines4u.com.au/search//',
        insertPos:37,
        productSelector:'div.tiled_results ',
        nameSelector:'a.equip_link',
        priceSelector:'span.price_container',
        linkSelector:'a.equip_link',
        imgSelector:'div.photo_container > img',
        country:'Australia',
        domain:'machines4u.com.au'
    },
    {
        searchUrl:'https://www.ezymachinesales.com.au/search/?search_word=',
        insertPos:55,
        productSelector:'div.product-list-summary ',
        nameSelector:'div.center-cont h5.sec-title',
        priceSelector:'span.amount',
        linkSelector:'div.right-cont a.btn',
        imgSelector:'div.img-pad img',
        country:'Australia',
        domain:'ezymachinesales.com.au'
    },
    {
        searchUrl:'https://www.tradeearthmovers.com.au/search/keywords-',
        insertPos:52,
        productSelector:'div.reswrap',
        nameSelector:'div.reswrap-title span.left',
        priceSelector:'div.reswrap-title span.right',
        linkSelector:'a.view-button',
        imgSelector:'div.img-large img',
        country:'Australia',
        domain:'tradeearthmovers.com.au'
    },
    {
        searchUrl:'https://truckdealers.com.au/buy/results/?keyword=',
        insertPos:49,
        productSelector:'div.truck-result',
        nameSelector:'h2.details-title a',
        priceSelector:'span.price',
        linkSelector:'a.view-item',
        imgSelector:'span.truck-thumb img',
        country:'Australia',
        domain:'truckdealers.com.au'
    },
    {
        searchUrl:'https://www.truckworld.com.au/search/?query=k~-v~1-z~15-',
        insertPos:46,
        productSelector:'div.search-result',
        nameSelector:'p.item-desc',
        priceSelector:'p.list-price',
        linkSelector:'a.list-title',
        imgSelector:'div.listing-slider img',
        country:'Australia',
        domain:'truckworld.com.au'
    },
    {
        searchUrl:'https://www.plantandequipment.com/en-au/machinery?search_string=',
        insertPos:64,
        productSelector:'div.ad-item-js:not(.sold-label-on)',
        nameSelector:'h5.equipment_title a',
        priceSelector:'a.make-offer-js',
        linkSelector:'h5.equipment_title a',
        imgSelector:'img.seach-result-list__item__image',
        country:'Australia',
        domain:'plantandequipment.com'
    },
    {
        searchUrl:'https://www.kitmondo.com/listing/search/?query=&countries=AU',
        insertPos:47,
        productSelector:'div.category-product-inner',
        nameSelector:'h3.name a',
        priceSelector:'a.price',
        linkSelector:'h3.name a',
        imgSelector:'div.product-image img',
        country:'Australia',
        domain:'kitmondo.com'
    },
    {
        searchUrl:'https://www.rockanddirt.com/search?method=search&db=equipdb&aucflg=exclude&country=AUS&model=',
        insertPos:93,
        productSelector:'div#result',
        nameSelector:'ul#result_header li.main a',
        priceSelector:'li.price h3',
        linkSelector:'ul#result_header li.main a',
        imgSelector:'div#img_area img.listpic',
        country:'Australia',
        domain:'rockanddirt.com'
    },
    {
        searchUrl:'https://avcar.today/heavy/?country=au&model=',
        insertPos:44,
        productSelector:'div.card',
        nameSelector:'div.card-header',
        priceSelector:'div.card-header span.price',
        linkSelector:'div.card-body a',
        imgSelector:'div.card a img.lazy',
        country:'Australia',
        domain:'avcar.today'
    },
    {
        searchUrl:'https://themachinemarket.com/listings/?advert_country=Australia&query=',
        insertPos:70,
        productSelector:'div.classibox-advert-item',
        nameSelector:'div.feature-content h4',
        priceSelector:'div.xt-advert-price',
        linkSelector:'div.feature-content h4 a',
        imgSelector:'figure img.lazyloaded',
        country:'Australia',
        domain:'themachinemarket.com'
    },
    {
        searchUrl:'https://www.machinio.com/listings?location=Australia&search=',
        insertPos:60,
        productSelector:'li.offer-listing',
        nameSelector:'h4.offer-listing__title',
        priceSelector:'div.price',
        linkSelector:'a.ellipsis',
        imgSelector:'div.offer-listing__image-wrapper img',
        country:'Australia',
        domain:'machinio.com'
    },
    // {
    //     searchUrl:'https://www.machinerytrader.com/listings/construction-equipment/for-sale/list?Mdltxt=&mdlx=Contains&qss=1&FullText=',
    //     insertPos:85,
    //     productSelector:'div.cf',
    //     nameSelector:'listing-name cf',
    //     priceSelector:'div.price span.nobr',
    //     linkSelector:'widget-details listings-button',
    //     imgSelector:'div.cf img',
    //     country:'Australia',
    //     domain:'machinerytrader.com'
    // },
    // {
    //     searchUrl:'https://www.constructionsales.com.au/items/?q=IndustryAll.keyword()',
    //     insertPos:66,
    //     productSelector:'div.cf',
    //     nameSelector:'listing-name cf',
    //     priceSelector:'div.price span.nobr',
    //     linkSelector:'widget-details listings-button',
    //     imgSelector:'div.cf img',
    //     country:'Australia',
    //     domain:'constructionsales.com'
    // },
    {
        searchUrl:'https://www.agritrader.eu/?search=',
        insertPos:34,
        productSelector:'div.item-box',
        nameSelector:'div.item-box h4',
        priceSelector:'div.item-box p.h5',
        linkSelector:'div.item-box a',
        imgSelector:'div.item-box a.lazy',
        country:'Europe',
        domain:'agritrader.eu'
    },
    {
        searchUrl:'https://allegro.pl/kategoria/maszyny-maszyny-budowlane-252943?string=&stan=u%C5%BCywane&marka=Cat&marka=Caterpillar&bmatch=cl-cx210105ap-enfmswp-diap-aut-1-5-0129',
        insertPos:69,
        productSelector:'div._9c44d_1I1gg',
        nameSelector:'div._9c44d_1I1gg a._9c44d_2vTdY',
        priceSelector:'div._9c44d_1I1gg span._1svub',
        linkSelector:'div._9c44d_1I1gg a._9c44d_2vTdY',
        imgSelector:'div._9c44d_1I1gg img',
        country:'Europe',
        domain:'allegro.pl'
    },
    // USES CAPTCH//
    // {
    //     searchUrl:'https://www.baupool.co.uk/used/?q=&machine_world_id=0',
    //     insertPos:34,
    //     productSelector:'a.block',
    //     nameSelector:'a.block h4.text-lg',
    //     priceSelector:'a.block div.text-lg',
    //     linkSelector:'a.block',
    //     imgSelector:'a.block div.relative img',
    //     country:'Europe',
    //     domain:'baupool.pl'
    // },
    {
        searchUrl:'https://www.blocket.se/annonser/hela_sverige/fordon/lastbil_truck_entreprenad/entreprenadmaskiner?cg=1223&q=',
        insertPos:108,
        productSelector:'div.styled__Wrapper-sc-1kpvi4z-0',
        nameSelector:'a.styled__StyledTitleLink-sc-1kpvi4z-10',
        priceSelector:'div.Price__StyledPrice-sc-1v2maoc-1',
        linkSelector:'a.styled__StyledTitleLink-sc-1kpvi4z-10',
        imgSelector:'div.ListImage__Wrapper-sc-1rp77jc-0 img',
        country:'Europe',
        domain:'blocket.se'
    },
    // USES CAPTCH
    // {
    //     searchUrl:'https://www.camionsupermarket.it/en/used-ad.html?text=',
    //     insertPos:54,
    //     productSelector:'div.list-item-row',
    //     nameSelector:'h2 a',
    //     priceSelector:'strong.price',
    //     linkSelector:'h2 a',
    //     imgSelector:'img.image-responsive',
    //     country:'Europe',
    //     domain:'camionsupermarket.it'
    // },
    {
        searchUrl:'https://classified.fwi.co.uk/used/?q=',
        insertPos:37,
        productSelector:'div.contents a.block',
        nameSelector:'div.contents a.block h4',
        priceSelector:'div[itemprop="price"]',
        linkSelector:'div.contents a.block',
        imgSelector:'img.h-full',
        country:'Europe',
        domain:'classified.fwi.co.uk'
    },
    //USES CAPTCH
    // {
    //     searchUrl:'https://classified.fwi.co.uk/used/?q=',
    //     insertPos:37,
    //     productSelector:'div.contents a.block',
    //     nameSelector:'div.contents a.block h4',
    //     priceSelector:'div[itemprop="price"]',
    //     linkSelector:'div.contents a.block',
    //     imgSelector:'img.h-full',
    //     country:'Europe',
    //     domain:'classified.fwi.co.uk'
    // },  
    {
        searchUrl:'https://equipdom.com/search?keyword=',
        insertPos:36,
        productSelector:'div.latest_post',
        nameSelector:'a.latest_item_name',
        priceSelector:'span.value',
        linkSelector:'a.latest_item_name',
        imgSelector:'div.postimg img',
        country:'Europe',
        domain:'equipdom.com'
    },
    {
        searchUrl:'https://www.europe-construction-equipment.com/used-construction-equipment/f2/construction-equipment-ads.html?q=',
        insertPos:111,
        productSelector:'div.row-listing',
        nameSelector:'div.title h2',
        priceSelector:'span.element-price',
        linkSelector:'a.latest_item_name',
        imgSelector:'div.picture img.img-responsive',
        country:'Europe',
        domain:'https://www.europe-construction-equipment.com/'
    },
    
];
exports.websiteData = websiteData;
exports.blacklistedWords = blacklistedWords;
exports.machineData = machineData;