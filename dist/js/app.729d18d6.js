(function(){"use strict";var e={8270:function(e,r,t){var c=t(9242),a=t(3396);const n={class:"container mx-auto"},o={class:"flex"},i={class:"w-1/4 pt-[6rem] pr-[4rem]"},s={class:"w-3/4"},l={class:"flex column-2 pt-[2.35rem]"};function d(e,r,t,c,d,u){const f=(0,a.up)("listItems"),p=(0,a.up)("currencyButtonList"),m=(0,a.up)("cardItem");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",o,[(0,a._)("div",i,[(0,a.Wm)(f,{listItems:d.task2.data,onAddItem:u.addItem},null,8,["listItems","onAddItem"])]),(0,a._)("div",s,[(0,a.Wm)(p,{listCurrency:u.createListCurrency(),activeCurrency:d.activeCurrency,onClickCurrency:u.changeActiveCurrency},null,8,["listCurrency","activeCurrency","onClickCurrency"]),(0,a._)("div",l,[(0,a.Wm)(m,{addClass:["sm:mr-2"],cardTitle:"Last Checked Item",tableDescription:u.htmlDescription(d.activeListItem[d.activeListItem.length-1]),totalAmount:u.convertCurrencyFull(d.activeListItem[d.activeListItem.length-1])?u.convertCurrencyFull(d.activeListItem[d.activeListItem.length-1])+" "+d.activeCurrency:null},null,8,["tableDescription","totalAmount"]),(0,a.Wm)(m,{addClass:["sm:ml-2"],cardTitle:"Total",tableDescription:u.htmlDescription(d.activeListItem),totalAmount:u.convertCurrencyFull(d.activeListItem)?u.convertCurrencyFull(d.activeListItem)+" "+d.activeCurrency:null},null,8,["tableDescription","totalAmount"])])])])])}t(7658);var u=JSON.parse('{"data":[{"id":1,"price":500,"currency":"USDT"},{"id":2,"price":700,"currency":"BTC"},{"id":3,"price":900,"currency":"ETH"},{"id":4,"price":1000,"currency":"BTC"},{"id":5,"price":1200,"currency":"USDT"}],"currencies-pairs":{"USDT-BTC":0.000035,"USDT-ETH":0.00053,"BTC-USDT":28894.19,"BTC-ETH":15.31,"ETH-USDT":1884.68,"ETH-BTC":0.065}}'),f=t(7139);const p=e=>((0,a.dD)("data-v-0ebe93a6"),e=e(),(0,a.Cn)(),e),m={key:0,class:"flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 border rounded-lg border-slate-500","data-te-navbar-ref":""},b={class:"flex w-full flex-wrap items-center justify-between px-3"},h=p((()=>(0,a._)("button",{class:"block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden",type:"button","data-te-collapse-init":"","data-te-target":"#navbarSupportedContent1","aria-controls":"navbarSupportedContent1","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"[&>svg]:w-7"},[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-7 w-7"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})])])],-1))),v={class:"!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto",id:"navbarSupportedContent1","data-te-collapse-item":""},y={class:"list-style-none mr-auto flex flex-col pl-0 lg:flex-row","data-te-navbar-nav-ref":""},k=["onClick"];function x(e,r,t,n,o,i){return t.listCurrency?((0,a.wg)(),(0,a.iD)("nav",m,[(0,a._)("div",b,[h,(0,a._)("div",v,[(0,a._)("ul",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.listCurrency,(r=>((0,a.wg)(),(0,a.iD)("li",{key:"item-"+r,class:"mb-4 lg:mb-0 lg:px-4","data-te-nav-item-ref":""},[(0,a._)("a",{class:(0,f.C_)(["text-black border-none py-1",{active:r===t.activeCurrency}]),onClick:(0,c.iM)((t=>e.$emit("clickCurrency",r)),["prevent","stop"]),href:"#","data-te-nav-link-ref":""},(0,f.zw)(r),11,k)])))),128))])])])])):(0,a.kq)("",!0)}var w={props:{listCurrency:{type:Array,default:null},activeCurrency:String}},g=t(89);const _=(0,g.Z)(w,[["render",x],["__scopeId","data-v-0ebe93a6"]]);var C=_;const I={key:0,class:"border rounded-lg border-slate-500"},D=["onChange","id"],T=["for"];function A(e,r,t,n,o,i){return t.listItems?((0,a.wg)(),(0,a.iD)("ul",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.listItems,(r=>((0,a.wg)(),(0,a.iD)("li",{key:"itemId-"+r.id,class:"flex items-center border-neutral-100 rounded-lg border-opacity-100 dark:border-opacity-50"},[(0,a._)("input",{class:"relative float-left ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",type:"checkbox",onChange:(0,c.iM)((t=>e.$emit("addItem",r)),["prevent","stop"]),value:"",id:"itemId-"+r.id},null,40,D),(0,a._)("label",{class:"inline-block text-left w-10/12 pl-[0.5rem] py-[1rem] hover:cursor-pointer",for:"itemId-"+r.id}," Id: "+(0,f.zw)(r.id),9,T)])))),128))])):(0,a.kq)("",!0)}var L={name:"listItems",props:{listItems:{type:Array||Object,default:null}}};const S=(0,g.Z)(L,[["render",A],["__scopeId","data-v-78ba62b9"]]);var O=S;const H={class:"mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"},j=["innerHTML"],B={key:1,class:"mb-auto pt-2 pb-4"},E={class:"flex justify-between columns-2"},z=(0,a._)("div",{class:"md:w-1/2"},null,-1),M={class:"md:w-1/2 flex items-center columns-2"},U=(0,a._)("div",{class:"text-2xl text-cyan-600"},"Summary:",-1),F={class:"px-[2rem]"};function Z(e,r,t,c,n,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,f.C_)(["flex flex-col w-1/2 border rounded-lg border-slate-500 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700",e.addClass])},[(0,a._)("h5",H,(0,f.zw)(e.cardTitle),1),e.tableDescription?((0,a.wg)(),(0,a.iD)("p",{key:0,class:"mb-4 text-base text-neutral-600 dark:text-neutral-200 mb-auto pt-2 pb-4",innerHTML:e.tableDescription},null,8,j)):((0,a.wg)(),(0,a.iD)("p",B,"No checked item")),(0,a._)("div",E,[z,(0,a._)("div",M,[U,(0,a._)("div",F,(0,f.zw)(e.totalAmount||"-"),1)])])],2)}var W=(0,a.aZ)({name:"cardItem",props:{cardTitle:String,addClass:Array,totalAmount:String,tableDescription:null}});const N=(0,g.Z)(W,[["render",Z]]);var q=N,K={name:"App",data(){return{task2:u,activeCurrency:"USDT",activeListItem:[]}},components:{currencyButtonList:C,listItems:O,cardItem:q},methods:{createListCurrency(){let e=[];return this.task2.data.forEach((r=>{e.includes(r.currency)||e.push(r.currency)})),e},changeActiveCurrency(e){this.activeCurrency=e},addItem(e){this.activeListItem.some((r=>r.id===e.id))?this.activeListItem=this.activeListItem.filter((r=>r.id!==e.id)):this.activeListItem.push(e)},_checkArray(e){let r=[];return e&&(e instanceof Array?r=e:r.push(e)),r},htmlDescription(e){let r=this._checkArray(e),t="";return r&&r.length>=1&&(t+='<div class="flex py-2 border-y">\n                                <div class=\'w-1/3\'>Name</div>\n                                <div class="w-1/3">Item currency</div>\n                                <div class="w-1/3">Computed currency</div>\n                              </div>',r.forEach((e=>{t+='<div class="flex py-2 border-b">\n                                    <div class="w-1/3">Id: '+e.id+'</div>\n                                    <div class="w-1/3">'+e.price+" "+e.currency+'</div>\n                                    <div class="w-1/3">'+this.convertCurrency(e,!0)+"</div>\n                                 </div>"}))),t},convertCurrency(e,r=!1){return e.currency===this.activeCurrency?e.price+(r?" "+e.currency:""):e.price*this.task2["currencies-pairs"][e.currency+"-"+this.activeCurrency]+(r?" "+this.activeCurrency:"")},convertCurrencyFull(e){let r=this._checkArray(e),t=0;return r&&r.length>=1&&r.forEach((e=>{t+=+this.convertCurrency(e)})),t}}};const P=(0,g.Z)(K,[["render",d]]);var Y=P;(0,c.ri)(Y).mount("#app")}},r={};function t(c){var a=r[c];if(void 0!==a)return a.exports;var n=r[c]={exports:{}};return e[c](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(r,c,a,n){if(!c){var o=1/0;for(d=0;d<e.length;d++){c=e[d][0],a=e[d][1],n=e[d][2];for(var i=!0,s=0;s<c.length;s++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](c[s])}))?c.splice(s--,1):(i=!1,n<o&&(o=n));if(i){e.splice(d--,1);var l=a();void 0!==l&&(r=l)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[c,a,n]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var c in r)t.o(r,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:r[c]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,c){var a,n,o=c[0],i=c[1],s=c[2],l=0;if(o.some((function(r){return 0!==e[r]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var d=s(t)}for(r&&r(c);l<o.length;l++)n=o[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},c=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];c.forEach(r.bind(null,0)),c.push=r.bind(null,c.push.bind(c))}();var c=t.O(void 0,[998],(function(){return t(8270)}));c=t.O(c)})();
//# sourceMappingURL=app.729d18d6.js.map