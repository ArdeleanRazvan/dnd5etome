import{Aa as B,Ba as L,Ca as U,Da as o,Ea as a,Fa as p,G as T,H as q,Ha as G,Ia as u,Ja as H,K as h,Ka as v,P as r,R as M,S as b,Ta as y,Z as N,a as m,b as f,cb as P,da as R,e as E,ea as O,j,k as C,l as D,oa as c,p as I,q as F,r as $,ua as k,v as x}from"./chunk-CWIRZM7G.js";var Y=(n,e)=>e.name;function J(n,e){if(n&1&&(o(0,"div",1),p(1,"input",2),o(2,"div",3)(3,"div",4),p(4,"img",5),o(5,"p",6),u(6),a()()(),o(7,"div",7)(8,"p"),u(9,"Collapse Content"),a()()()),n&2){let l=e.$implicit;c(),G("name",l.name),c(5),H(l.name)}}var A=(()=>{let e=class e{constructor(){this.spells=O.required(),this.schools=[{initial:"A",name:"Abjuration"},{initial:"C",name:"Conjuration"},{initial:"D",name:"Divination"},{initial:"E",name:"Enchantment"},{initial:"V",name:"Evocation"},{initial:"I",name:"Illusion"},{initial:"N",name:"Necromancy"},{initial:"T",name:"Transmutation"}]}getImageSourceForSpell(t,s){let i="./assets/spells/Spell",S=this.schools.find(d=>d.initial===t)?.name,z=s.split(" ").map(d=>`${d[0].toUpperCase()}${d.substring(1)}`).join("");return`${i}_${S}_${z}.webp`}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=b({type:e,selectors:[["dnd-spells-list"]],inputs:{spells:[M.SignalBased,"spells"]},standalone:!0,features:[v],decls:3,vars:0,consts:[[1,"join","join-vertical","m-1","w-full","text-white"],[1,"collapse","join-item","collapse-arrow","border-2","border-brown-500"],["type","checkbox",3,"name"],[1,"collapse-title"],[1,"flex","justify-start"],["src","./assets/spells/Spell_Evocation_EldritchBlast.webp","alt","",1,"w-8"],[1,"sm:text:xl","text-md","font-medium"],[1,"collapse-content"]],template:function(s,i){s&1&&(o(0,"div",0),L(1,J,10,2,"div",1,Y),a()),s&2&&(c(),U(i.spells()))},encapsulation:2});let n=e;return n})();function g(n){n||(N(g),n=r(R));let e=new E(l=>n.onDestroy(l.next.bind(l)));return l=>l.pipe(q(e))}var V=(()=>{let e=class e{constructor(){this.httpClient=r(P)}requestSpellbooks(){return D([{name:"Player's Handbook",id:"PHB",jsonFileName:"spells-phb.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Xenethar's Guide to Everything",id:"XGE",jsonFileName:"spells-xge.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Tasha's Cauldron of Everything",id:"TCE",jsonFileName:"spells-tce.json",spells:[],isSelected:!1,isLoaded:!1},{name:"Fizban's Treasury of Dragons",id:"FTD",jsonFileName:"spells-ftd.json",spells:[],isSelected:!1,isLoaded:!1}])}requestGeneralBooksData(){return this.httpClient.get("https://5e.tools/data/generated/gendata-nav-adventure-book-index.json").pipe(x(t=>(this.handleError(t),j)),I(t=>t.adventure.concat(t.book)))}requestSpellsInBook(t){return this.httpClient.get(`https://5e.tools/data/spells/${t}`).pipe(x(s=>(this.handleError(s),j)))}handleError(t){console.log(t)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var X=(()=>{let e=class e{constructor(){this.fiveEtoolsService=r(V),this.state=k({spellbooks:[],spells:[]}),this.spellbooks=y(()=>this.state().spellbooks),this.spells=y(()=>this.state().spellbooks.map(t=>t.spells).flat()),this.spellbooks$=F([this.fiveEtoolsService.requestSpellbooks(),this.fiveEtoolsService.requestGeneralBooksData()]).pipe(T(([t,s])=>(t.forEach(i=>i.name=s.find(S=>S.id==i.id)?.name),C(t)))),this.spells$=this.spellbooks$.pipe($(t=>this.fiveEtoolsService.requestSpellsInBook(t.jsonFileName))),this.spellbooks$.pipe(g()).subscribe(t=>this.state.update(s=>f(m({},s),{spellbooks:[...s.spellbooks,t]}))),this.spells$.pipe(g()).subscribe(t=>this.state.update(s=>f(m({},s),{spellbooks:s.spellbooks.map(i=>i.id===t.spell[0].source?f(m({},i),{spells:t.spell}):i)})))}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ce=(()=>{let e=class e{constructor(){this.spellsService=r(X)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=b({type:e,selectors:[["dnd-spells"]],standalone:!0,features:[v],decls:4,vars:1,consts:[[1,"text-center","text-lg","font-bold","text-brown-500"],[1,"flex","w-full","justify-center"],[1,"container","flex","justify-center",3,"spells"]],template:function(s,i){s&1&&(o(0,"p",0),u(1," Player's Handbook "),a(),o(2,"div",1),p(3,"dnd-spells-list",2),a()),s&2&&(c(3),B("spells",i.spellsService.spells()))},dependencies:[A],encapsulation:2});let n=e;return n})();export{Ce as default};
