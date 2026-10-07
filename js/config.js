/* Single place to edit business data. Everything on the site reads from here. */
window.GHAZNI = {
  // Online-ordering URLs. Leave '' until confirmed: buttons then fall back to calling the location.
  orderUrl: { astreet: '', winton: 'https://www.toasttab.com/local/order/ghazni-catering-217-west-winton-avenue' },
  locations: {
    astreet: { name:'A Street', area:'Downtown Hayward', addr:'1235 A St, Hayward, CA 94541', tel:'(510) 398-8940', tag:'Traditional Afghan cuisine',
      cap:30, capLine:'For a smaller gathering in downtown Hayward.',
      // 0=Sun..6=Sat ; [open,close] in 24h, null = closed, 'call' = call to confirm
      hours:{0:[12,19.5],1:[11,21],2:[11,21],3:[11,21],4:[11,21],5:[11,21.5],6:'call'} },
    winton: { name:'Winton Avenue', area:'Hayward', addr:'217 W Winton Ave, Hayward, CA 94544', tel:'(510) 940-8100', tag:'Wraps, halal pizzas & Mediterranean plates',
      cap:130, capLine:'For a larger celebration with room to gather.',
      hours:{0:null,1:[11,21],2:[11,21],3:[11,21],4:[11,21],5:[11,21],6:[11,21]} }
  },
  // Prices shown are A Street prices (Winton prices vary).
  menu: [
    {cat:'Appetizers', items:[
      {n:'Bolani Potatoes', d:'Potato-filled flatbread.', p:13.95, t:['Vegan']},
      {n:'Mantu', d:'Beef dumplings with lentils & yogurt.', p:9.95},
      {n:'Borani Banjan Appetizer', d:'Roasted eggplant, tomato & yogurt.', p:9.95, t:['Vegan on request']},
      {n:'Samosa', d:'Potato, onion & pea pastries.', p:9.95, t:['Vegan']}]},
    {cat:'Kabob plates', items:[
      {n:'Murgh Kabob', d:'Charbroiled chicken breast.', p:17.95}]},
    {cat:'Entrees', items:[
      {n:'Quabili Pallaw', d:'Lamb shank, basmati, carrots & raisins.', p:22.95}]},
    {cat:'Side orders', items:[]},{cat:'Dessert', items:[]},{cat:'Drinks', items:[]}
  ],
  catering: [
    ['Chicken Kabob',110,220],['Teka Kabob',125,225],['Lamb Kabob',125,225],['Chapli Kabob',115,215],['White Rice',30,60]
  ]
};
