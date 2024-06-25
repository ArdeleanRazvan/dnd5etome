import{Aa as d,Ba as $,Ca as g,Da as b,Ea as l,Fa as a,G as B,Ga as m,H as L,Ia as H,Ja as A,K as w,Ka as f,La as v,Ma as V,Na as h,Oa as _,P as u,Pa as X,R as y,T as U,Y as z,Ya as D,a as S,b as C,ca as G,da as j,e as M,eb as Y,ib as J,j as I,k as q,l as N,ma as k,p as R,pa as s,q as O,r as P,v as T,va as F}from"./chunk-53METYPP.js";var K=(()=>{let t=class t{transform(e,n){return n.find(o=>o.initial===e)?.name}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=U({name:"school",type:t,pure:!0,standalone:!0});let i=t;return i})();function ne(i,t){if(i&1&&(l(0,"div",8),m(1,"img",12),l(2,"p",13),f(3),a(),m(4,"img",14),l(5,"p",13),f(6),a()()),i&2){let r=t.$implicit,e=H();s(),d("src",e.getDiceRollIcon(r),k),s(),d("ngClass",e.getDamageTypeColor(r)),s(),v(" ",r.value," "),s(),d("src",e.getDamageTypeIcon(r),k),s(),d("ngClass",e.getDamageTypeColor(r)),s(),v(" ",r.type," ")}}function ie(i,t){if(i&1&&(l(0,"p",11),f(1),a()),i&2){let r=t.$implicit;s(),v(" ",r," ")}}var Q=(()=>{let t=class t{constructor(){this.spell=j.required(),this.schools=[{initial:"A",name:"Abjuration"},{initial:"C",name:"Conjuration"},{initial:"D",name:"Divination"},{initial:"E",name:"Enchantment"},{initial:"V",name:"Evocation"},{initial:"I",name:"Illusion"},{initial:"N",name:"Necromancy"},{initial:"T",name:"Transmutation"}]}getSpellImageSrc(e){let n="./assets/spells/Spell",o=this.schools.find(p=>p.initial===e.school)?.name,c=e.name.split(/[ \/'\,\-]/).map(p=>p.length>1?`${p[0].toUpperCase()}${p.substring(1)}`:`${p}`).join("");return`${n}_${o}_${c}.webp`}getDiceRollIcon(e){let n=e.value.indexOf("d")>1?e.value.substring(2):e.value.substring(1),o=e.type==="bludgeoning"||e.type==="slashing"||e.type==="piercing"||e.type==="extra"?"physical":e.type;return`./assets/dice/${n}_${o}.webp`}getDamageTypeIcon(e){return`./assets/damage_types/${e.type}_damage_icon.webp`}getDamageTypeColor(e){let n=e.type==="bludgeoning"||e.type==="slashing"||e.type==="piercing"?"physical":e.type,c=[{type:"acid",color:"text-lime-500"},{type:"cold",color:"text-sky-600"},{type:"fire",color:"text-orange-600"},{type:"force",color:"text-red-700"},{type:"healing",color:"text-teal-400"},{type:"lightning",color:"text-blue-600"},{type:"necrotic",color:"text-green-700"},{type:"physical",color:"text-gray-400"},{type:"poison",color:"text-lime-600"},{type:"psychic",color:"text-pink-400"},{type:"radiant",color:"text-yellow-400"},{type:"thunder",color:"text-violet-600"}].find(p=>p.type===n);return c?.color?c.color:"text-slate-200"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=y({type:t,selectors:[["dnd-spell"]],inputs:{spell:[1,"spell"]},standalone:!0,features:[h],decls:17,vars:9,consts:[[1,"collapse","join-item","my-0.5","bg-brown-900","font-alegreya"],["type","checkbox",3,"name"],[1,"collapse-title","flex","flex-col","py-2","pl-4","pr-2"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col"],[1,"sm:text:xl","text-lg","font-extrabold"],[1,"text-md","font-extrabold","text-brown-200"],[1,"flex","flex-col","gap-0.5"],[1,"flex","items-center","font-semibold"],["alt","",1,"h-12","w-12",3,"src"],[1,"collapse-content"],[1,"text-md","text-wrap","break-all","text-brown-200"],["alt","",1,"mr-1","h-7","w-7",3,"src"],[3,"ngClass"],["alt","",1,"h-6","w-6",3,"src"]],template:function(n,o){n&1&&(l(0,"div",0),m(1,"input",1),l(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),f(6),a(),l(7,"p",6),f(8),_(9,"school"),a(),l(10,"div",7),g(11,ne,7,6,"div",8,$),a()(),m(13,"img",9),a()(),l(14,"div",10),g(15,ie,2,1,"p",11,$),a()()),n&2&&(s(),A("name",o.spell().name),s(5),v(" ",o.spell().name," "),s(2),V(" ",o.spell().level>0?"Level "+o.spell().level:""," ",X(9,6,o.spell().school,o.schools)," ",o.spell().level>0?"Spell":"Cantrip"," "),s(3),b(o.spell().damage),s(2),d("src",o.getSpellImageSrc(o.spell()),k),s(2),b(o.spell().entries))},dependencies:[K,Y],encapsulation:2});let i=t;return i})();var oe=(i,t)=>t.name;function se(i,t){if(i&1&&m(0,"dnd-spell",2),i&2){let r=t.$implicit;d("spell",r)}}var W=(()=>{let t=class t{constructor(){this.spells=j.required()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=y({type:t,selectors:[["dnd-spells-list"]],inputs:{spells:[1,"spells"]},standalone:!0,features:[h],decls:4,vars:0,consts:[[1,"join","join-vertical","m-1","flex","w-96","bg-gradient-to-r","from-amber-800","via-amber-400","to-amber-800","text-white"],[1,"mx-0.5","rounded-lg"],[3,"spell"]],template:function(n,o){n&1&&(l(0,"div",0)(1,"div",1),g(2,se,1,1,"dnd-spell",2,oe),a()()),n&2&&(s(2),b(o.spells()))},dependencies:[Q],encapsulation:2});let i=t;return i})();function E(i){i||(z(E),i=u(G));let t=new M(r=>i.onDestroy(r.next.bind(r)));return r=>r.pipe(L(t))}var Z=(()=>{let t=class t{constructor(){this.httpClient=u(J)}requestSpellbooks(){return N([{name:"Player's Handbook",id:"PHB",jsonFileName:"spells-phb.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Xenethar's Guide to Everything",id:"XGE",jsonFileName:"spells-xge.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Tasha's Cauldron of Everything",id:"TCE",jsonFileName:"spells-tce.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Fizban's Treasury of Dragons",id:"FTD",jsonFileName:"spells-ftd.json",spells:[],isSelected:!1,isLoaded:!1}])}requestGeneralBooksData(){return this.httpClient.get("https://5e.tools/data/generated/gendata-nav-adventure-book-index.json").pipe(T(e=>(this.handleError(e),I)),R(e=>e.adventure.concat(e.book)))}requestSpellsInBook(e){return this.httpClient.get(`https://5e.tools/data/spells/${e}`).pipe(T(n=>(this.handleError(n),I)))}handleError(e){console.log(e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var ee=(()=>{let t=class t{constructor(){this.fiveEtoolsService=u(Z),this.state=F({spellbooks:[],spells:[]}),this.spellbooks=D(()=>this.state().spellbooks),this.spells=D(()=>this.state().spellbooks.map(e=>e.spells).flat()),this.spellbooks$=O([this.fiveEtoolsService.requestSpellbooks(),this.fiveEtoolsService.requestGeneralBooksData()]).pipe(B(([e,n])=>(e.forEach(o=>o.name=n.find(c=>c.id==o.id)?.name),q(e)))),this.spells$=this.spellbooks$.pipe(P(e=>this.fiveEtoolsService.requestSpellsInBook(e.jsonFileName))),this.spellbooks$.pipe(E()).subscribe(e=>this.state.update(n=>C(S({},n),{spellbooks:[...n.spellbooks,e]}))),this.spells$.pipe(E()).subscribe(e=>this.state.update(n=>C(S({},n),{spellbooks:n.spellbooks.map(o=>o.id===e.spell[0].source?C(S({},o),{spells:e.spell.map(c=>this.extractSpellDamage(c))}):o)})))}extractSpellDamage(e){return e.entries&&(e.damage=[],e.entries.forEach(n=>{if(typeof n=="string"){let o=/\{@damage (\d+d\d+)\} (\w+) damage/g,c=n.matchAll(o);for(let p of c)e.damage.some(te=>te.type===p[2])||e.damage.push({value:p[1],type:p[2],conditional:!1})}})),e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Ae=(()=>{let t=class t{constructor(){this.spellsService=u(ee)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=y({type:t,selectors:[["dnd-spells"]],standalone:!0,features:[h],decls:4,vars:1,consts:[[1,"text-center","text-lg","font-bold","text-brown-500"],[1,"flex","w-full","justify-center"],[1,"container","flex","justify-center",3,"spells"]],template:function(n,o){n&1&&(l(0,"p",0),f(1," Player's Handbook "),a(),l(2,"div",1),m(3,"dnd-spells-list",2),a()),n&2&&(s(3),d("spells",o.spellsService.spells()))},dependencies:[W],encapsulation:2});let i=t;return i})();export{Ae as default};
