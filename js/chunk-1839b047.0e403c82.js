(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1839b047"],{"7d4c":function(t,e,n){"use strict";n.r(e);var i=n("7a23"),a={class:"container"},c=Object(i["j"])('<div class="my-3"><div class="title stack h1" style="--stacks:3;"><span style="--index:0;">我的最愛</span><span style="--index:1;">我的最愛</span><span style="--index:2;">我的最愛</span></div></div>',1),s={class:"row justify-content-center mx-3"},o={class:"table align-middle",style:{margin:"10vh"}},r=Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",null,"刪除"),Object(i["i"])("th",null,"商品資料"),Object(i["i"])("th",{style:{width:"110px"}},"價格"),Object(i["i"])("th",{class:"text-end"},"購買狀態")])],-1),d=["data-index"],u=["onClick"],l=Object(i["i"])("i",{class:"bi bi-x"},null,-1),f=[l],b={class:""},p={class:"text-end"},h=["disabled","onClick"],O=Object(i["k"])(" 加入購物車 "),j={key:0,class:"spinner-grow text-teslaRed spinner-grow-sm",role:"status"},v=Object(i["i"])("span",{class:"visually-hidden"},"Loading...",-1),g=[v],y=Object(i["i"])("i",{class:"fas fa-shopping-cart"},null,-1),m=Object(i["i"])("tfoot",null,[Object(i["i"])("tr",null,[Object(i["i"])("td",{colspan:"3",class:"text-center"})])],-1);function x(t,e,n,l,v,x){var I=this;return Object(i["z"])(),Object(i["h"])("div",a,[c,Object(i["i"])("div",s,[Object(i["i"])("table",o,[r,Object(i["i"])("tbody",null,[x.favItems?(Object(i["z"])(),Object(i["f"])(i["c"],{key:0,appear:"",onBeforeEnter:x.onBeforeEnter,onEnter:x.onEnter},{default:Object(i["U"])((function(){return[(Object(i["z"])(!0),Object(i["h"])(i["a"],null,Object(i["G"])(x.favItems,(function(e,n){return Object(i["z"])(),Object(i["h"])("tr",{key:e.id,"data-index":n},[Object(i["i"])("td",null,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-teslaRed btn-sm",onClick:function(t){return x.delFavItem(e.id)}},f,8,u)]),Object(i["i"])("td",null,Object(i["L"])(e.title),1),Object(i["i"])("td",b,"NT$"+Object(i["L"])(t.$filters.currency(e.price)),1),Object(i["i"])("td",p,[Object(i["i"])("button",{type:"button",class:"btn btn-outline-teslaRed",disabled:I.status.loadingItem===e.id,onClick:function(t){return x.addCart(e.id)}},[O,I.status.loadingItem===e.id?(Object(i["z"])(),Object(i["h"])("div",j,g)):Object(i["g"])("",!0),y],8,h)])],8,d)})),128))]})),_:1},8,["onBeforeEnter","onEnter"])):Object(i["g"])("",!0)]),m])])])}n("4de4"),n("d3b7"),n("c740"),n("a434"),n("e9c4"),n("99af");var I=n("cffa"),k={data:function(){return{favList:JSON.parse(localStorage.getItem("favoriteItem"))||[],products:[],status:{loadingItem:""}}},computed:{favItems:function(){var t=this;return this.products.filter((function(e){return t.favList.indexOf(e.id)>-1}))}},methods:{delFavItem:function(t){var e=this.favList.findIndex((function(e){return t===e}));this.favList.splice(e,1),localStorage.setItem("favoriteItem",JSON.stringify(this.favList))},getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/products/all");this.$http.get(e).then((function(e){t.products=e.data.products,console.log("products:",e)}))},addCart:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/cart"),i={product_id:t,qty:1};this.status.loadingItem=t,this.$http.post(n,{data:i}).then((function(t){console.log(t),e.status.loadingItem="",e.$httpMessageState(t,"加入購物車")}))},animation:function(){I["a"].timeline().from(".title",{x:-500,opacity:0,duration:3,ease:"expo.out"})},onBeforeEnter:function(t){t.style.opacity=0,t.style.transform="translateX(-500px)"},onEnter:function(t,e){I["a"].to(t,{opacity:1,x:0,delay:1*t.dataset.index,onComplete:e,duration:2})}},mounted:function(){this.getProducts(),this.animation()}},w=n("6b0d"),F=n.n(w);const C=F()(k,[["render",x]]);e["default"]=C},c740:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,c=n("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(s)},e9c4:function(t,e,n){var i=n("23e7"),a=n("da84"),c=n("d066"),s=n("2ba4"),o=n("e330"),r=n("d039"),d=a.Array,u=c("JSON","stringify"),l=o(/./.exec),f=o("".charAt),b=o("".charCodeAt),p=o("".replace),h=o(1..toString),O=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,g=function(t,e,n){var i=f(n,e-1),a=f(n,e+1);return l(j,t)&&!l(v,a)||l(v,t)&&!l(j,i)?"\\u"+h(b(t,0),16):t},y=r((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&i({target:"JSON",stat:!0,forced:y},{stringify:function(t,e,n){for(var i=0,a=arguments.length,c=d(a);i<a;i++)c[i]=arguments[i];var o=s(u,null,c);return"string"==typeof o?p(o,O,g):o}})}}]);
//# sourceMappingURL=chunk-1839b047.0e403c82.js.map