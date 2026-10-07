(function(){
const G=window.GHAZNI,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const page=document.body.dataset.page||'';
const orderHref=k=>G.orderUrl[k]||('tel:'+G.locations[k].tel.replace(/\D/g,''));
const orderLabel=k=>G.orderUrl[k]?'Order '+G.locations[k].name.replace(' Avenue',''):'Call to order';
window.orderHref=orderHref;window.orderLabel=orderLabel;
window.photo=(k,w,h)=>{if(k==='halal')return G.previewCDN?G.photos.halal:'img/halal-certified.png';
 return G.previewCDN?G.photos[k]+'/v1/fill/w_'+w+',h_'+h+',al_c,q_80/x.jpg':'img/'+k+'.jpg'};
window.imgTag=(k,w,h,alt)=>'<img src="'+photo(k,w,h)+'" width="'+w+'" height="'+h+'" loading="lazy" alt="'+(alt||'')+'">';
window.TAGS={V:'Vegetarian',VG:'Vegan',O:'Organic'};
document.querySelectorAll('[data-photo]').forEach(el=>{const [k,w,h]=el.dataset.photo.split(',');if(el.tagName==='IMG')el.src=photo(k,+w,+h);else el.style.backgroundImage='url('+photo(k,+w,+h)+')'});
/* header / footer */
const links=[['menu.html','Menu'],['catering.html','Catering'],['private-events.html','Private events'],['index.html#story','Our story'],['index.html#visit','Visit']];
const flinks=[['menu.html','Menu'],['catering.html','Catering'],['private-events.html','Private events'],[G.links.giftCard,'Gift cards'],[G.links.loyalty,'Loyalty'],['index.html#visit','Contact']];
document.body.insertAdjacentHTML('afterbegin',`<a class="skip" href="#main">Skip to content</a>
<header class="hdr"><div class="wrap"><a class="logo" href="index.html" aria-label="Ghazni Afghan Kabobs home"><b>GHAZNI</b><small>AFGHAN KABOBS</small></a>
<button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
<nav class="nav" aria-label="Main">${links.map(([h,t])=>`<a href="${h}"${h===page+'.html'?' aria-current="page"':''}>${t}</a>`).join('')}${page==='catering'?'<a class="btn btn-gold" href="#plan">Plan your event</a>':'<a class="btn btn-gold" href="menu.html#order">Order online</a>'}</nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="ftr"><div class="wrap"><div><a class="logo" href="index.html" aria-label="Ghazni Afghan Kabobs home"><b>GHAZNI</b><small>AFGHAN KABOBS</small></a><br><em>Afghan hospitality, close to home.</em></div><nav>${flinks.map(([h,t])=>`<a href="${h}"${h.startsWith('http')?' target="_blank" rel="noopener"':''}>${t}</a>`).join('')}</nav>
<div class="fsocial"><a href="${G.social.facebook}" target="_blank" rel="noopener">Facebook</a><a href="${G.social.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${G.social.yelp}" target="_blank" rel="noopener">Yelp</a><a href="mailto:${G.email}">${G.email}</a></div>
<small><img class="seal-sm" src="${photo('halal')}" alt="100% Halal Certified" width="46" height="46"><span class="halal-badge sm" role="img" aria-label="Halal"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 27V17h22v10M8 17c0-5 3.5-7 8-7s8 2 8 7M16 10V6M15 6h2M4 27h24M13 27v-5a3 3 0 0 1 6 0v5M3 27V13l1.5-3L6 13v14"/></svg>Halal</span> © ${new Date().getFullYear()} Ghazni Afghan Kabobs · Hayward, CA · Menus and prices vary by location.</small></div></footer>
<div class="mbar"><span>A Street · <span data-open="astreet">…</span></span><a class="btn btn-gold" href="menu.html#order">Order online</a></div>`);
const hdr=$('.hdr'),b=$('.burger'),nav=$('.nav');
const sc=()=>hdr.classList.toggle('solid',scrollY>30);sc();addEventListener('scroll',sc,{passive:true});
b.onclick=()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)};
$$('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
/* open-now (restaurant local time) */
function nowPT(){const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date()),g=t=>p.find(x=>x.type===t).value;
 return{d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),h:(+g('hour')%24)+ +g('minute')/60}}
const fmt=h=>{const H=Math.floor(h),m=Math.round((h-H)*60),s=H>=12?'pm':'am';return((H+11)%12+1)+(m?':'+String(m).padStart(2,'0'):'')+s};
function status(k){const t=nowPT(),h=G.locations[k].hours[t.d];
 if(h==='call')return{on:false,txt:'Call to confirm today’s hours'};
 if(!h)return{on:false,txt:'Closed today'};
 if(t.h>=h[0]&&t.h<h[1])return{on:true,txt:'Open now · until '+fmt(h[1])};
 return{on:false,txt:t.h<h[0]?'Opens today at '+fmt(h[0]):'Closed now'}}
const refresh=()=>$$('[data-open]').forEach(el=>{const s=status(el.dataset.open);el.textContent=el.tagName==='SPAN'&&el.closest('.mbar')?s.txt:s.txt;el.classList.toggle('on',s.on)});
refresh();setInterval(refresh,60000);
window.hoursTable=k=>{const H=G.locations[k].hours,t=nowPT().d,n=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 return'<table class="hrs">'+[1,2,3,4,5,6,0].map(d=>`<tr class="${d===t?'today':''}"><td>${n[d]}</td><td>${H[d]==='call'?'Call to confirm':H[d]?fmt(H[d][0])+' – '+fmt(H[d][1]):'Closed'}</td></tr>`).join('')+'</table>'};
/* animated background: embers + neural-grid linking, reacts to pointer */
const c=$('#bg');if(!c)return;
const x=c.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
let W,H,P=[],m={x:-999,y:-999},dpr=Math.min(devicePixelRatio||1,2);
function size(){const r=c.parentElement.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);
 const n=Math.round(Math.min(110,W*H/11000));P=Array.from({length:n},()=>mk(true))}
function mk(init){return{x:Math.random()*W,y:init?Math.random()*H:H+10,r:Math.random()*2+.6,vy:-(Math.random()*.5+.15),vx:(Math.random()-.5)*.25,a:Math.random()*.6+.3,ph:Math.random()*6.28}}
function frame(t){x.clearRect(0,0,W,H);
 for(const p of P){p.ph+=.02;p.x+=p.vx+Math.sin(p.ph)*.25;p.y+=p.vy;
  const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<120){p.x+=dx/d*1.2;p.y+=dy/d*1.2}
  if(p.y<-10||p.x<-10||p.x>W+10)Object.assign(p,mk(false),{x:Math.random()*W});
  const fade=Math.min(1,p.y/(H*.35));
  const g=x.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*6);g.addColorStop(0,`rgba(255,214,140,${p.a*fade})`);g.addColorStop(.3,`rgba(226,150,60,${p.a*fade*.5})`);g.addColorStop(1,'rgba(226,150,60,0)');
  x.fillStyle=g;x.beginPath();x.arc(p.x,p.y,p.r*6,0,6.283);x.fill()}
 x.lineWidth=.6;
 for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);
  if(d<90){x.strokeStyle=`rgba(201,160,90,${(1-d/90)*.22})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
 if(!reduce)raf=requestAnimationFrame(frame)}
let raf,vis=true;size();addEventListener('resize',()=>{cancelAnimationFrame(raf);size();frame()});
c.parentElement.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
c.parentElement.addEventListener('pointerleave',()=>m.x=m.y=-999);
new IntersectionObserver(([e])=>{vis=e.isIntersecting;cancelAnimationFrame(raf);if(vis)frame()}).observe(c.parentElement);
frame();
})();
