/* Single place to edit business data. Everything on the site reads from here.
   Source: ghazniafghankabobs.com (menu, catering, banquets, contact pages), copied Oct 2026. */
window.GHAZNI = {
  // Preview mode: photos load from the restaurant's existing CDN (resized) because the direct-upload
  // preview deploy can't carry the /img files. Set to false once the repo is linked to Vercel.
  previewCDN: false,
  photos: {
  "hero": "https://static.wixstatic.com/media/eea314_538b34ea9a60406eb086a7df727648a0~mv2.png",
  "qabili": "https://static.wixstatic.com/media/eea314_c6473d7d23b146ebb53c6bfa09fd5df2~mv2.jpg",
  "murgh": "https://static.wixstatic.com/media/93f14c_00ddce037b2642de8c2124322fdc7623~mv2.jpg",
  "teka": "https://static.wixstatic.com/media/93f14c_e9ef3877f610408cb9e0f2d8c7275cc5~mv2.jpg",
  "chapli": "https://static.wixstatic.com/media/93f14c_20f45ceaa7914054b926a7f1eea1094e~mv2.jpg",
  "shami": "https://static.wixstatic.com/media/93f14c_ea176d82d59b4611a8f1b194c03fd558~mv2.jpg",
  "lamb": "https://static.wixstatic.com/media/93f14c_3729ab0541c6419285ec279d6fdc0008~mv2.jpg",
  "chops": "https://static.wixstatic.com/media/93f14c_6a67927358444f5e98432048663471d1~mv2.jpg",
  "double": "https://static.wixstatic.com/media/93f14c_9425aae8acfb4d86b9bd92e391f7437f~mv2.jpg",
  "triple": "https://static.wixstatic.com/media/eea314_538b34ea9a60406eb086a7df727648a0~mv2.png",
  "bolani": "https://static.wixstatic.com/media/be299b_5eda1385d4de4752907bdbf1794fecdc~mv2.jpg",
  "borani": "https://static.wixstatic.com/media/93f14c_5c51f73205444762b88edfaabac9e208~mv2.jpg",
  "aush": "https://static.wixstatic.com/media/eea314_ad86d05784dd47ad9e33bfe51c0edd5c~mv2.png",
  "lobia": "https://static.wixstatic.com/media/eea314_98828e4c316c41b98fe236741c1314a8~mv2.jpg",
  "sabzi": "https://static.wixstatic.com/media/eea314_1fbd873d575a4617b6f029e4ef64cf65~mv2.png",
  "daal": "https://static.wixstatic.com/media/eea314_d0494b00c0f94f889864bebe1ffe45c3~mv2.png",
  "baklava": "https://static.wixstatic.com/media/eea314_a4c3688d303344d2926b9b48602b5bdb~mv2.jpg",
  "icecream": "https://static.wixstatic.com/media/eea314_10f3c3ee9bc24d6eaf5393d77871e23d~mv2.jpg",
  "lassi": "https://static.wixstatic.com/media/eea314_911bce333e554309afefc2c29f0ba4c2~mv2.jpg",
  "dogh": "https://static.wixstatic.com/media/93f14c_9520506f291e4c9e82ebd4750962bb7c~mv2.jpg",
  "rice": "https://static.wixstatic.com/media/93f14c_69841c3affe64b54af99711bbc2456d0~mv2.jpg",
  "storeA": "https://static.wixstatic.com/media/be299b_0ed60b7582d640f8b71717021d7c2761~mv2_d_5168_3448_s_4_2.jpg",
  "storeW": "https://static.wixstatic.com/media/be299b_d84fb0df909942e4ae0a91259b95a6f3~mv2_d_4980_2867_s_4_2.jpg",
  "dining1": "https://static.wixstatic.com/media/be299b_7b9e1be863aa44a483412c297f994c95~mv2_d_5168_3448_s_4_2.jpg",
  "dining2": "https://static.wixstatic.com/media/eea314_e4a433f040f941d5a0e38da60331fa2c~mv2.png",
  "patio": "https://static.wixstatic.com/media/be299b_89ab54ccbb6540f291d7637020ed2017~mv2_d_5168_3448_s_4_2.jpg",
  "trays": "https://static.wixstatic.com/media/be299b_e4b215693d414d2dac72e45aa0ad998a~mv2_d_4470_3448_s_4_2.jpg",
  "buffet": "https://static.wixstatic.com/media/93f14c_f4fb4a6c2ca3425188c882dd535862b9~mv2.jpeg",
  "korma": "https://static.wixstatic.com/media/93f14c_77601ef2f66c429e8bc7d72dc47d7075~mv2.jpeg",
  "mixveg": "https://static.wixstatic.com/media/eea314_4c75d94068694e9fa322267252db5b1a~mv2.png",
  "grilledveg": "https://static.wixstatic.com/media/93f14c_06cde711dddb4d01b969c3220361d69d~mv2.jpeg",
  "salad": "https://static.wixstatic.com/media/93f14c_1f4eb2e59b874d908109ad46492c7ff0~mv2.jpg",
  "chickensalad": "https://static.wixstatic.com/media/eea314_e21d8bbde0eb4c9baf6cd833d523f301~mv2.png",
  "mantu": "https://static.wixstatic.com/media/93f14c_807c26e9ef96438f8d8a2e0618bf325a~mv2.jpg",
  "fish": "https://static.wixstatic.com/media/eea314_f68a828ec115482a9b0b10d47807ccc9~mv2.png",
  "halal": "https://static.wixstatic.com/media/be299b_6404c895dcf34c61b9f4111eaf68e8e7~mv2.png"
},
  email: 'ghazniafghankabobs@gmail.com',
  line247: '(510) 825-3025',
  social: { facebook:'https://www.facebook.com/GhazniHayward/', instagram:'https://www.instagram.com/ghazniafghankabobswinton/', yelp:'https://www.yelp.com/biz/ghazni-afghan-kabobs-hayward' },
  links: { giftCard:'https://www.ghazniafghankabobs.com/gift-card', loyalty:'https://www.ghazniafghankabobs.com/loyalty' },
  orderUrl: {
    astreet: 'https://www.ghazniafghankabobs.com/online-ordering-ordering-page-2',
    winton: 'https://order.toasttab.com/online/ghazni-catering-217-west-winton-avenue'
  },
  cateringOrderUrl: 'https://order.toasttab.com/online/ghazni-catering-217-west-winton-avenue',
  locations: {
    astreet: { name:'A Street', area:'Downtown Hayward', addr:'1235 A St, Hayward, CA 94541', tel:'(510) 398-8940', tag:'Afghan cuisine. Enjoy authentic flavors that transport you to Afghanistan!',
      cap:30, photo:'storeA',
      // 0=Sun..6=Sat ; [open,close] 24h ; null = closed
      hours:{0:[12,19.5],1:[11,21],2:[11,21],3:[11,21],4:[11,21],5:[11,21.5],6:[11,21.5]} },
    winton: { name:'Winton Avenue', area:'Hayward', addr:'217 W Winton Ave, Hayward, CA 94544', tel:'(510) 940-8100', tag:'Wraps, Halal Pizzas, Mediterranean Plates and Catering',
      cap:130, photo:'storeW',
      hours:{0:null,1:[11,21],2:[11,21],3:[11,21],4:[11,21],5:[11,21],6:[11,21]} }
  },
  // A Street menu. Tags: V = Vegetarian, VG = Vegan, O = Organic. p = price (number) or [[label,price],...]
  menu: [
    {cat:'Appetizers', items:[
      {n:'Bolani Potatoes', d:'A thin dough turnover filled with potatoes.', p:13.95, t:['V','VG'], ph:'bolani'},
      {n:'Borani Banjan Appetizer', d:'Thinly sauteed eggplant topped with tomatoes and yogurt sauce. Vegetarian, can be vegan.', p:9.95, t:['V','VG'], ph:'borani'},
      {n:'Samosa', d:'3 pieces of fried pastry filled with potatoes, onions, peas.', p:9.95, t:['V','VG']},
      {n:'Aush', d:'A hearty noodle soup with vegetables, dill, mint, and parsley.', p:9.95, t:['V'], ph:'aush'},
      {n:'Mantu', d:'Seasoned, ground beef-filled dumplings, topped with lentils and yogurt sauce.', p:9.95, t:['O']},
      {n:'Borani Kaddu', d:'Sauteed butternut squash topped with a garlic yogurt sauce.', p:9.95, t:['V']},
      {n:'Bolani Leeks', d:'A thin turnover filled with organic Afghan leeks and seasonings. Ask for spicy or medium spicy.', p:14.95, t:['V','O','VG']}]},
    {cat:'Kabob plates', note:'All kabobs served with rice, salad, and bread. All meat is halal.', items:[
      {n:'Murgh Kabob', d:'6 tender pieces of chicken breast charbroiled to perfection. Served over rice. Includes salad, chickpea salad and bread.', p:17.95, ph:'murgh', extra:'Add carrots & raisins with rice +$2'},
      {n:'Teka Kabob', d:'6 tender pieces of tri-tip steak charbroiled to perfection. Served over rice. Includes salad, chickpea salad and bread.', p:20.95, ph:'teka'},
      {n:'Chapli Kabob', d:'2 patties of seasoned ground beef. Served over rice. Includes salad, chickpea salad and bread.', p:19.95, ph:'chapli'},
      {n:'Shami Kabob', d:'2 skewers of seasoned ground beef. Served over rice. Includes salad, chickpea salad and bread.', p:19.95, ph:'shami'},
      {n:'Lamb Kabob', d:'6 tender pieces of lamb charbroiled to perfection. Served over rice. Includes salad, chickpea salad and bread.', p:20.95, ph:'lamb'},
      {n:'Lamb Chops', d:'4 juicy pieces of bone-in lamb, charbroiled to perfection. Served over rice. Includes salad, chickpea salad and bread.', p:25.95, ph:'chops'},
      {n:'Double Combo', d:'4 pieces of chicken breast and 3 pieces of tri-tip steak kabobs. Served over rice. Choose any 2 meats (chicken, chapli, shami...).', p:22.95, ph:'double'},
      {n:'Triple Combo', d:'1 piece of chapli, 3 pieces of tri-tip beef and 3 pieces of chicken breast kabobs. Substitute and choose up to 3 meats.', p:25.95, ph:'triple'}]},
    {cat:'Entrees', items:[
      {n:'Quabili Pallaw', d:'Tender slow-cooked lamb shank served with seasoned basmati rice with carrots and raisins.', p:22.95, ph:'qabili'},
      {n:'Grilled Chicken Salad', d:'Chicken breast on a bed of salad with our house creamy dressing.', p:16.95},
      {n:'Mantu Entree', d:'Dumplings filled with seasoned ground beef, topped with lentils and yogurt sauce. 10 dumplings.', p:16.95, t:['O']},
      {n:'Borani Banjan', d:'Thinly sauteed eggplant topped with tomato and yogurt sauce, served with basmati rice.', p:16.95, t:['V','VG']},
      {n:'Sabzi Challaw', d:'Delicious sauteed spinach served with white basmati rice.', p:15.95, t:['V','VG'], ph:'sabzi'},
      {n:'Lobia Challaw', d:'Afghan style cooked red beans with white basmati rice.', p:15.95, t:['V','VG'], ph:'lobia'},
      {n:'Chicken Korma', d:'Afghan style chicken curry cooked in a tomato and onion based sauce, served with basmati rice.', p:16.95, t:['O']},
      {n:'Daal Challow', d:'Slow cooked seasoned lentils with white basmati rice.', p:15.95, t:['V','VG'], ph:'daal'},
      {n:'Mixed Vegetables Korma', d:'Mixed vegetable curry cooked in a tomato and onion based sauce, served with basmati rice.', p:15.95, t:['V']},
      {n:'Borani Kadoo Entree', d:'Can be made vegan upon request. Ask to hold the yogurt.', p:15.95, t:['V']},
      {n:'Chicken Shawarma Plate', d:'Seasoned strips of chicken over basmati rice. Served with a side salad, chickpea salad and bread.', p:16.95}]},
    {cat:'Side orders', items:[
      {n:'White Rice', d:'Afghani challow, white basmati rice.', p:5.95, t:['V','VG'], ph:'rice'},
      {n:'Brown Rice', d:'Afghani pallow, brown basmati rice.', p:5.95, t:['V','VG']},
      {n:'Lobia', d:'Afghan style red beans.', p:7.95, t:['V','VG']},
      {n:'Daal', d:'Yellow split peas flavored Afghan style.', p:7.95, t:['V','VG']},
      {n:'Sabzi', d:'Seasoned spinach cooked Afghan style. Delicious, healthy and a great vegan option.', p:7.95, t:['V','VG']},
      {n:'Grilled Veggies', d:'Tomato, bell pepper, jalapeno, onion.', p:7.95, t:['V','VG']},
      {n:'House Salad', d:'Lettuce, tomato, cucumbers, green sliced olives, house white sauce dressing. Can be vegan: ask to hold the yogurt.', p:5.95, t:['V','VG']},
      {n:'Meat Skewer', d:'1 choice of any meat skewer: chicken, beef, lamb, 2 skewers of shami, or 2 patties of chapli. Lamb chops $2 extra.', p:13.95, extra:'Teka and Chapli +$1'},
      {n:'Shornakhud', d:'Popular Afghani chickpea salad made with potatoes, garbanzo beans, and cilantro.', p:5.95}]},
    {cat:'Dessert', items:[
      {n:'Baklava', d:'1 piece of baklava. Fillo dough, pistachios.', p:3.99, ph:'baklava'},
      {n:'Afghani Ice Cream', d:'Vanilla ice cream with a hint of rose water and ground pistachios on top.', p:8.95, ph:'icecream'},
      {n:'Ferni', d:'', p:6.95}]},
    {cat:'Drinks', items:[
      {n:'Can of Soda', d:'Coke, Diet Coke, Sprite, Coke Zero.', p:2.95},
      {n:'Bottled Dogh', d:'Yogurt drink. Mint or original.', p:4.95, ph:'dogh'},
      {n:'Bottle Mango Lassi', d:'Gopi mango lassi bottle.', p:5.50, ph:'lassi'},
      {n:'Bottled Water', d:'', p:1.99}]}
  ],
  // Catering trays: [name, description, smallPrice (serves 10), largePrice (serves 20)]
  catering: [
    {cat:'Meat dishes', items:[
      ['Chicken Kabob','Grilled chicken breast skewers with garlic and spices.',110,220],
      ['Teka Kabob','Charbroiled beef tri-tip skewers with garlic and spices.',125,225],
      ['Lamb Kabob','Charbroiled lamb skewers with tangy spices.',125,225],
      ['Chapli Kabob','Ground beef patty skewers with spices.',115,215],
      ['Shami Kabob','Grilled ground beef skewers with spices.',115,215],
      ['Chicken Korma','Afghan style chicken curry cooked in tomatoes and onion based sauce.',60,120],
      ['Lamb Korma','',70,130],['Beef Korma','',70,130]]},
    {cat:'Salads & rice', items:[
      ['White Rice','A side of rice for just half your headcount is usually enough.',30,60],
      ['Brown Rice','A side of rice for just half your headcount is usually enough.',30,60],
      ['House Salad','Lettuce with cucumber, tomato, olives, and house dressing.',30,50],
      ['Grilled Chicken Salad','',90,140]]},
    {cat:'Vegetarian & vegan', items:[
      ['Mixed Vegetables','With zucchini, cauliflower, potatoes, green beans, and onions. (Half / full tray)',60,110],
      ['Grilled Vegetables','With grilled onions, bell peppers, tomatoes, zucchini, and jalapenos.',50,70],
      ['Bolani','Grilled flatbread stuffed with your choice of filling (potato or leek).',65,110],
      ['Borani Banjan','Eggplant with yogurt, garlic, mint, and tomato sauce.',65,110],
      ['Sabzi','Seasoned spinach served with white rice.',60,110],
      ['Somosa','Fried pastry filled with potatoes, onion, peas.',50,100],
      ['Shola','Sticky Afghan rice.',50,90],
      ['Afghan Bread','Leavened flatbread.',15,25],
      ['Daal','',50,100],['Lobia','',50,100]]},
    {cat:'Entrees', items:[
      ['Mantu','Dumplings stuffed with spiced ground beef. Served with yogurt and lentils.',90,130],
      ['Quabili Pallow','Brown basmati rice with lamb, raisins, and carrots.',100,200],
      ['Kofta','Afghan style meatballs.',70,120],
      ['Fish Curry','Fillet of fish prepared in a delicious spicy curry sauce.',50,100],
      ['Shola Goshti','Sticky Afghan rice with your choice of chicken, beef, or lamb.',70,130],
      ['Aushak','Leek filled dumplings topped with meat and yogurt sauce.',70,130]]}
  ],
  reviews: [
    {q:'Thank you for dinner last night. It was amazing!! I have to say it is the best meal I have had in quite some time. My husband was very impressed and we cannot wait for our parents to come visit so that we can share our new favorite place with them.', by:'Jessica T.'},
    {q:'They were extremely friendly and the food was amazing! It was one of my first times trying Afghan food and it did not disappoint. The chicken kabobs were amazing as were the samosas.', by:'Bryan M.'},
    {q:'The insides have two dining rooms, tables laid out with white table cloths and a clean, open vibe.', by:'Nandita B.'}
  ]
};
