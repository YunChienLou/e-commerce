(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1fcde96"],{3679:function(t,e,c){"use strict";var n=c("7a23"),r={class:"steps"},s=Object(n["j"])('<progress id="progress" value="0" max="100"></progress><div class="step-item"><button class="step-button text-center done" type="button">1</button><div class="step-title">填寫資訊</div></div><div class="step-item"><button class="step-button text-center collapsed" type="button">2</button><div class="step-title">確認訂單</div></div><div class="step-item"><button class="step-button text-center collapsed" type="button">3</button><div class="step-title">完成購車</div></div>',4),i=[s];function o(t,e,c,s,o,l){return Object(n["z"])(),Object(n["h"])("div",r,i)}c("a9e3"),c("d3b7"),c("159b");var l={props:{page:Number},methods:{button:function(){var t=document.querySelectorAll(".step-button"),e=document.querySelector("#progress"),c=this.$props.page-1;e.setAttribute("value",100*c/(t.length-1)),t.forEach((function(t,e){c>=e&&t.classList.add("done"),c<e&&t.classList.remove("done")}))}},mounted:function(){this.button()}},a=c("6b0d"),d=c.n(a);const u=d()(l,[["render",o]]);e["a"]=u},a3d3:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r={class:"my-5 row justify-content-center"},s={class:"table align-middle"},i=Object(n["i"])("thead",null,[Object(n["i"])("th",null,"品名"),Object(n["i"])("th",null,"數量"),Object(n["i"])("th",null,"單價")],-1),o={class:"text-end"},l=Object(n["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),a={class:"text-end"},d={class:"table"},u=Object(n["i"])("th",{width:"100"},"Email",-1),b=Object(n["i"])("th",null,"姓名",-1),O=Object(n["i"])("th",null,"收件人電話",-1),j=Object(n["i"])("th",null,"收件人地址",-1),p=Object(n["i"])("th",null,"付款狀態",-1),h={key:0},f={key:1,class:"text-success"},v={key:0,class:"text-end"},g=Object(n["i"])("button",{class:"btn btn-teslaRed"},"確認付款去",-1),m=[g];function y(t,e,c,g,y,L){var x=Object(n["I"])("Loading"),I=Object(n["I"])("Process");return Object(n["z"])(),Object(n["h"])(n["a"],null,[Object(n["l"])(x,{active:y.isLoading},null,8,["active"]),Object(n["i"])("div",r,[Object(n["i"])("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=Object(n["W"])((function(){return L.payOrder&&L.payOrder.apply(L,arguments)}),["prevent"]))},[Object(n["l"])(I,{page:y.processPage},null,8,["page"]),Object(n["i"])("table",s,[i,Object(n["i"])("tbody",null,[(Object(n["z"])(!0),Object(n["h"])(n["a"],null,Object(n["G"])(y.order.products,(function(e){return Object(n["z"])(),Object(n["h"])("tr",{key:e.id},[Object(n["i"])("td",null,Object(n["L"])(e.product.title),1),Object(n["i"])("td",null,Object(n["L"])(e.qty)+"/"+Object(n["L"])(e.product.unit),1),Object(n["i"])("td",o," $NT "+Object(n["L"])(t.$filters.currency(e.final_total)),1)])})),128))]),Object(n["i"])("tfoot",null,[Object(n["i"])("tr",null,[l,Object(n["i"])("td",a,"$NT "+Object(n["L"])(t.$filters.currency(y.order.total)),1)])])]),Object(n["i"])("table",d,[Object(n["i"])("tbody",null,[Object(n["i"])("tr",null,[u,Object(n["i"])("td",null,Object(n["L"])(y.order.user.email),1)]),Object(n["i"])("tr",null,[b,Object(n["i"])("td",null,Object(n["L"])(y.order.user.name),1)]),Object(n["i"])("tr",null,[O,Object(n["i"])("td",null,Object(n["L"])(y.order.user.tel),1)]),Object(n["i"])("tr",null,[j,Object(n["i"])("td",null,Object(n["L"])(y.order.user.address),1)]),Object(n["i"])("tr",null,[p,Object(n["i"])("td",null,[y.order.is_paid?(Object(n["z"])(),Object(n["h"])("span",f,"付款完成")):(Object(n["z"])(),Object(n["h"])("span",h,"尚未付款"))])])])]),!1===y.order.is_paid?(Object(n["z"])(),Object(n["h"])("div",v,m)):Object(n["g"])("",!0)],32)])],64)}c("99af");var L=c("3679"),x={data:function(){return{order:{user:{}},orderId:"",isLoading:!1,processPage:2}},components:{Process:L["a"]},inject:["emitter"],methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,console.log(t.order))}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){console.log(e),e.data.success&&(t.getOrder(),t.$router.push("/user/finish"),t.emitter.emit("finish-order",t.orderId))}))}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},I=c("6b0d"),$=c.n(I);const w=$()(x,[["render",y]]);e["default"]=w},b0c0:function(t,e,c){var n=c("83ab"),r=c("5e77").EXISTS,s=c("e330"),i=c("9bf2").f,o=Function.prototype,l=s(o.toString),a=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=s(a.exec),u="name";n&&!r&&i(o,u,{configurable:!0,get:function(){try{return d(a,l(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f1fcde96.917318f0.js.map