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
        searchUrl:'https://www.fritidsmarkedet.dk/maskiner/wheel-loaders-c2b490293-f18b-4f0d-a549-89b456e19b35?brand_id=917e13a7-a390-444a-a660-4bb10677296b&query=',
        insertPos:144,
        productSelector:'article.machine a.row',
        nameSelector:'h3.text-18px',
        priceSelector:'div.price-group p.price span[property="price"]',
        linkSelector:'article.machine a',
        imgSelector:'div.images figure.image',
        country:'Europe',
        domain:'https://www.fritidsmarkedet.dk/'
    },
    {
        searchUrl:'https://www.industrialmachines.net/search/result.aspx?s=&index=4&cond=0',
        insertPos:56,
        productSelector:'table.featured tbody',
        nameSelector:'div.makeModelTitle',
        priceSelector:'div.price-group ',
        linkSelector:'div.featured table.featured tbody tr td.left a',
        imgSelector:'a img.mob-small-off',
        country:'Europe',
        domain:'https://www.industrialmachines.net/'
    },
    //SELECTION PROBLEM
    // {
    //     searchUrl:'https://www.landwirt.com/search.html?q=&page=1&index=usedmachines%2Cclassifieds&brands=cat',
    //     insertPos:39,
    //     productSelector:'div.gmmtrefferinnen',
    //     nameSelector:'div.gmmtreffertext div.Gebrauchtmaschinen h4',
    //     priceSelector:'div.mobile-price',
    //     linkSelector:'div.gmmtreffer div.gmmtrefferinnen a',
    //     imgSelector:'img.img-responsive',
    //     country:'Europe',
    //     domain:'https://www.landwirt.com/'
    // },
    {
        searchUrl:'https://www.macchineedili.it/it/ricerca-macchine-edili?keys=',
        insertPos:60,
        productSelector:'li.views-fluid-grid-item ',
        nameSelector:'div.views-field-title span.field-content a',
        priceSelector:'div.views-field-field-quotation div.field-content',
        linkSelector:'div.views-field-title span.field-content a',
        imgSelector:'div.field-content a img',
        country:'Europe',
        domain:'https://www.macchineedili.it/it'
    },
    //SELECTION PROBLEM
    // {
    //     searchUrl:'https://www.machineseeker.com/fy/inserat/inseratliste/index?stichwort=&kategorieId=820',
    //     insertPos:70,
    //     productSelector:'div.card-body div.row',
    //     nameSelector:'a.text-decoration-none h5.text-dark span.mr-1',
    //     priceSelector:'div.text-dark span',
    //     linkSelector:'div.card-body div.row div.d-flex a.text-decoration-none',
    //     imgSelector:'img.img-fluid',
    //     country:'Europe',
    //     domain:'https://www.machineseeker.com/'
    // },
    {
        searchUrl:'https://www.machinetrack.nl/nl/zoeken?keyword=&brand=5&page=1',
        insertPos:46,
        productSelector:'table.table div.row',
        nameSelector:'table.table div.row a h3',
        priceSelector:'div.dataPrice span',
        linkSelector:'table.table div.row a',
        imgSelector:'img.img-responsive',
        country:'Europe',
        domain:'https://www.machinetrack.nl/'
    },
    {
        searchUrl:'https://de.machinerypark.com/caterpillar-baumaschinen-lader?condition=0&limit=12&list=sale&q=',
        insertPos:93,
        productSelector:'div.card-body div.mpOfferItem',
        nameSelector:'div.card-body div.mpOfferItem p.mb-3 a',
        priceSelector:'a strong.mpPrice',
        linkSelector:'div.card-body div.mpOfferItem p.mb-3 a',
        imgSelector:'div.mpImgBg',
        country:'Europe',
        domain:'https://de.machinerypark.com/'
    },
    {
        searchUrl:'https://www.usatomacchine.it/usato/ricerca?t=80&m=79&q=',
        insertPos:55,
        productSelector:'div.bloccoAnnunci div.annuncio',
        nameSelector:'div.annuncio-info h2',
        priceSelector:'span.annuncio-price',
        linkSelector:'span.annuncio-price a',
        imgSelector:'div.anteprima img',
        country:'Europe',
        domain:'https://www.usatomacchine.it'
    },
    {
        searchUrl:'https://www.myscrapmachine.com/en/search?category=wheel-loaders&q=',
        insertPos:66,
        productSelector:'div.Search_listing__1tM6u',
        nameSelector:'p.ListingCard_title__22zSe',
        priceSelector:'p.ListingCard_price__23SLy',
        linkSelector:'a.ListingCard_card__1WYV6',
        imgSelector:'div.ListingCard_cover__29jLR',
        country:'Europe',
        domain:'https://www.myscrapmachine.com/en/'
    },
    // Need to look at
    // {
    //     searchUrl:'https://www.nettikone.com/maarakennus/kuormaajat/caterpillar?id_cat_sub_type=1210&q=',
    //     insertPos:84,
    //     productSelector:'div.listingVifUrl ',
    //     nameSelector:'div.make_model_link',
    //     priceSelector:'div.price_block div.main_price',
    //     linkSelector:'div.listingVifUrl a.tricky_link ',
    //     imgSelector:'div.img_box',
    //     country:'Europe',
    //     domain:'https://www.nettikone.com/maarakennus?new=H&page=1&sortCol=enrolldate&ord=DESC'
    // },
    {
        searchUrl:'https://www.otomoto.pl/maszyny-budowlane/caterpillar/q-/?search%5Border%5D=created_at_first%3Adesc&search%5Bcountry%5D=',
        insertPos:55,
        productSelector:'div.offers article',
        nameSelector:'div.offer-item__title h2',
        priceSelector:'span.offer-price__currency',
        linkSelector:'div.offer-item__title h2 a.offer-title__link',
        imgSelector:'div.offer-item__photo img.lazyloaded',
        country:'Europe',
        domain:'https://www.otomoto.pl/'
    },
        {
            
        searchUrl:'https://avcar.today/heavy/?mark=caterpillar&model=&country=us',
        insertPos:50,
        productSelector:'div.row div.col-md-6',
        nameSelector:'div.card-header',
        priceSelector:'div.convert-currency',
        linkSelector:'div.card-body a',
        imgSelector:'a.ml-3 img.lazy',
        country:'USA',
        domain:'avcar.today/usa'
    },
    // { 
    //     searchUrl:'https://www.auta.com/search/?s=&zip=',
    //     insertPos:31,
    //     productSelector:'div.vehicle-wrapper ',
    //     nameSelector:'h3 a.notranslate',
    //     priceSelector:'div.convert-currency',
    //     linkSelector:'h3 a.notranslate',
    //     imgSelector:'div div.m-block a img',
    //     country:'USA',
    //     domain:'https://www.auta.com/search/?s=Caterpillar&distance=100'
    // },
    {
            
        searchUrl:'https://www.agriads.com/us/search?c=613&q=&location=&l=&r=',
        insertPos:42,
        productSelector:'div.item-list div.row',
        nameSelector:'div.items-details h2 a',
        priceSelector:'p.item-price',
        linkSelector:'div.items-details h2 a',
        imgSelector:'img.img-thumbnail',
        country:'USA',
        domain:'agriads.com'
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
        domain:'turners.co.nz'
    },
    // {
    //     searchUrl:'https://www.trademe.co.nz/Browse/SearchResults.aspx?searchString=&type=Search&searchType=3797&user_region=100&user_district=0&generalSearch_keypresses=0&generalSearch_suggested=0&generalSearch_suggestedCategory=&rsqid=ad46bfc0482c4c85abc6909a98ea868d-005&condition=used',
    //     insertPos:65,
    //     productSelector:'tm-search-card-switcher',
    //     nameSelector:'div.info div.title',
    //     priceSelector:'div.tm-motors-search-card__price',
    //     linkSelector:'a.tm-motors-search-card__link',
    //     imgSelector:'div.supergrid-listing div.image',
    //     country:'New Zealand',
    //     domain:'https://www.trademe.co.nz/'
    // },
    {
        searchUrl:'https://www.farmtrader.co.nz/search/type-loaders/subtype-wheel/keywords-',
        insertPos:72,
        productSelector:'div.rescontent div.reswrap',
        nameSelector:'div.reswrap-title a span.left',
        priceSelector:'span.currency-change',
        linkSelector:'div.reswrap-title a',
        imgSelector:'div.img-large a img.lazyload',
        country:'New Zealand',
        domain:'farmtrader.co.nz'
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
        domain:'www.dealsonwheels.co.nz'
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
        domain:'agdealer.com'
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
        domain:'autotrader.ca'
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
        domain:'farms.com'
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
        domain:'supplypost.com'
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
        domain:'nlbuysell.com'
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
        
        searchUrl:'https://www.gumtree.com.au/s-construction-vehicles-equipment//k0c9299',
        insertPos:61,
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
    // {
    //     searchUrl:'https://www.truckworld.com.au/search/?query=k~-v~1-z~15-',
    //     insertPos:46,
    //     productSelector:'div.search-result',
    //     nameSelector:'p.item-desc',
    //     priceSelector:'p.list-price',
    //     linkSelector:'a.list-title',
    //     imgSelector:'div.listing-slider img',
    //     country:'Australia',
    //     domain:'truckworld.com.au'
    // },
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
        domain:'avcar.today/au'
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
    {
        searchUrl:'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=&_sacat=58161&LH_TitleDesc=0&_sop=10&_odkw=caterpillar&_osacat=58161&LH_ItemCondition=4&rt=nc',
        insertPos:75,
        productSelector:'div.s-item__wrapper',
        nameSelector:'h3.s-item__title',
        priceSelector:'span.s-item__price',
        linkSelector:'a.s-item__link',
        imgSelector:'img.s-item__image-img',
        country:'USA',
        domain:'https://www.ebay.com/'
    },
    {
        searchUrl:'https://www.equipmentjournal.com/used/loaders/wheel_loaders/?longitude=0&latitude=0&make=&model=&dealer=&province=&country=&type=50&qSearch=&limit=10&offset=0&order=desc&sort=Year',
        insertPos:140,
        productSelector:'div.card-views div.card-view',
        nameSelector:'h4.eq-name',
        priceSelector:'div.eq-price b',
        linkSelector:'h4.eq-name a',
        imgSelector:'div.eq-image img',
        country:'USA',
        domain:'https://www.equipmentjournal.com'
    },
    {
        searchUrl:'https://www.fastline.com/construction-equipment-for-sale/listings/caterpillar-910-wheeled-loaders/results?category=Wheeled+Loaders&manufacturer=Caterpillar&model=&page=1',
        insertPos:162,
        productSelector:'div.tile--large--content',
        nameSelector:'h4 a.headline--four--lowercase',
        priceSelector:'h3.headline--three',
        linkSelector:'h4 a.headline--four--lowercase',
        imgSelector:'div.eq-image img',
        country:'USA',
        domain:'https://www.fastline.com/'
    },
    {
        searchUrl:'https://geebo.com/construction-farm-equipment/search/type/1-heavy-equipment-/mobile//distance/50/?q=',
        insertPos:100,
        productSelector:'table.element',
        nameSelector:'td h3 a.title',
        priceSelector:'div.price',
        linkSelector:'td h3 a.title',
        imgSelector:'div.eq-image img',
        country:'USA',
        domain:'https://geebo.com/'
    },
    {
        searchUrl:'https://heavyequipmentseller.com/classified-listings/?condition=used-equipment&s=&make=caterpillar&serie%5B%5D=wheel-loader-compact-105-hp&serie%5B%5D=wheel-loader-106-200-hp&serie%5B%5D=wheel-loader-201-350-hp&serie%5B%5D=wheel-loader-350-hp&serie%5B%5D=wheel-loader-other',
        insertPos:81,
        productSelector:'div.listing-list-loop ',
        nameSelector:'div.title a',
        priceSelector:'div.normal-price span span',
        linkSelector:'div.title a',
        imgSelector:'div.image-inner img',
        country:'USA',
        domain:'https://heavyequipmentseller.com/'
    },
    {
        searchUrl:'https://ironsearch.com/equipment/search/results?DistanceKms=8047&EquipmentTypeIsSet=true&Options=0%3D&TypeCode=WL&TypeDescription=Wheel%20Loader',
        insertPos:101,
        productSelector:'ul.search-results__listings li a.org--listing-summary',
        nameSelector:'div.wrapper h2',
        priceSelector:'div.price',
        linkSelector:'li a.org--listing-summary',
        imgSelector:'div.image-inner img',
        country:'USA',
        domain:'https://ironsearch.com/'
    },
    {
        searchUrl:'https://www.kitmondo.com/cat/used-heavy-machinery/?year_from=&year_to=&manufacturers=Caterpillar&query=&sort_by=-date_created&show_results=63',
        insertPos:103,
        productSelector:'div.product-list-row',
        nameSelector:'div.product-info h3 a',
        priceSelector:'div.product-price a.price',
        linkSelector:'div.product-info h3 a',
        imgSelector:'div.image a img.img-fill-background',
        country:'USA',
        domain:'https://www.kitmondo.com/'
    },
    {
        searchUrl:'https://www.lumbermenonline.com/find-for-sale/search-for?keyword=',
        insertPos:65,
        productSelector:'div.itmContainer',
        nameSelector:'h2.itmTitle a',
        priceSelector:'h2.itmPrice',
        linkSelector:'h2.itmTitle a',
        imgSelector:'a img.img-fluid',
        country:'USA',
        domain:'https://www.lumbermenonline.com/'
    },
    {
        searchUrl:'https://www.machinerypete.com/listings/loaders-and-lifts/wheel-loaders/caterpillar?custom_search=&hours%5Bmax%5D=&hours%5Bmin%5D=&limit=12&manual_sort=&old_location_str=&price%5Bmax%5D=&price%5Bmin%5D=&sort_term=most_photos&year%5Bmax%5D=&year%5Bmin%5D=&zip_code=&zip_miles=100000',
        insertPos:97,
        productSelector:'div.listing-wrapper',
        nameSelector:'div.listing-name a',
        priceSelector:'div.listing-price',
        linkSelector:'div.listing-name a',
        imgSelector:'div.listing-image img',
        country:'USA',
        domain:'https://www.machinerypete.com/'
    },
    {
        searchUrl:'https://machinesforall.com/machines/?keys=&field_machines_manufacturer_value=caterpillar&field_machines_model_value=&field_machines_year_value=All&field_machines_category_tid=54&field_machines_serial_number_value=&field_machines_location_country=All',
        insertPos:42,
        productSelector:'div.machine-list-card',
        nameSelector:'div.ma-full-title a h3',
        priceSelector:'span.mc3-price',
        linkSelector:'div.ma-full-title a ',
        imgSelector:'div.machine-list-cover-image',
        country:'USA',
        domain:'https://machinesforall.com/'
    },
    {
        searchUrl:'https://www.mylittlesalesman.com/used-wheel-loaders-for-sale-i1c41f0m0r2?ptid=1&q=&s=1',
        insertPos:82,
        productSelector:'div.content-card div.content-card-inner div.prcont',
        nameSelector:'h2.iln a',
        priceSelector:'span div.custom-h',
        linkSelector:'h2.iln a',
        imgSelector:'a img.img-responsive ',
        country:'USA',
        domain:'https://www.mylittlesalesman.com/'
    },
    
    // {
    //     searchUrl:'https://vehicles.oodle.com/used-vehicles/for-sale/?q=caterpillar+966&oldq=&inbs=1',
    //     insertPos:74,
    //     productSelector:'ol li',
    //     nameSelector:'span.listing-title a.title-link',
    //     priceSelector:'span.price span',
    //     linkSelector:'span.listing-title a.title-link',
    //     imgSelector:'a img.img-responsive ',
    //     country:'USA',
    //     domain:'https://vehicles.oodle.com/'
    // },
    {
        searchUrl:'http://rhinomachinery.com/Search.aspx?action=search&type=20&make=18&model=',
        insertPos:74,
        productSelector:'div.product div.innerpadding5_10 ',
        nameSelector:'div.producttitle a',
        priceSelector:'div.askingprice span',
        linkSelector:'div.producttitle a',
        imgSelector:'div.boxNoBackground img ',
        country:'USA',
        domain:'http://rhinomachinery.com/'
    },
    
    {
        searchUrl:'https://themachinemarket.com/listings/?_form_scheme_id=79021&reveal_hidden=1&query=&advert_category%5B%5D=174&advert_condition%5B%5D=used',
        insertPos:83,
        productSelector:'div.featured-box ',
        nameSelector:'div.feature-content h4 a',
        priceSelector:'div.xt-advert-price ',
        linkSelector:'div.feature-content h4 a',
        imgSelector:'div.featured-box figure a img.img-fluid ',
        country:'USA',
        domain:'https://themachinemarket.com/'
    },
    {
        searchUrl:'https://trademachines.com/loaders?refinementList%5Bmanufacturer.name%5D%5B0%5D=Caterpillar&refinementList%5Bproduct.name%5D%5B0%5D=&page=1',
        insertPos:131,
        productSelector:'li.tm-lot-item',
        nameSelector:'div.tm-lot-list-title h3 a span',
        priceSelector:'div.xt-advert-price ',
        linkSelector:'div.tm-lot-list-title h3 a',
        imgSelector:'div.tm-lot-list-image img',
        country:'USA',
        domain:'https://trademachines.com/'
    },
    {
        searchUrl:'http://www.usediron.com/Xhtml/Equipment/P2/Loader-Wheel/CATERPILLAR/ResultsByType.html?Model=&submit=View+Selected',
        insertPos:93,
        productSelector:'tr.EquipmentBrief',
        nameSelector:'td:nth-child(2) div.DataRow a.Href',
        priceSelector:'td:nth-child(5) div.DataRow a.Href',
        linkSelector:'td:nth-child(1) div.DataRow a.Href',
        imgSelector:'div.tm-lot-list-image img',
        country:'USA',
        domain:'https://usediron.com/'
    },
];
exports.websiteData = websiteData;
exports.blacklistedWords = blacklistedWords;
exports.machineData = machineData;