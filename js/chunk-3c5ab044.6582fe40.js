(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c5ab044"],{"159d":function(t,e,c){"use strict";c.r(e);var i=c("7a23"),a=function(t){return Object(i["C"])("data-v-7f0c11a5"),t=t(),Object(i["A"])(),t},n=a((function(){return Object(i["i"])("div",{class:"loadingio-spinner-double-ring-4kp4uv8lym2"},[Object(i["i"])("div",{class:"ldio-ei11i0en32"},[Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div",null,[Object(i["i"])("div")]),Object(i["i"])("div",null,[Object(i["i"])("div")])])],-1)})),l={class:"table mt-4"},r=a((function(){return Object(i["i"])("thead",null,[Object(i["i"])("tr",null,[Object(i["i"])("th",null,"購買時間"),Object(i["i"])("th",null,"Email"),Object(i["i"])("th",null,"購買款項"),Object(i["i"])("th",null,"應付金額"),Object(i["i"])("th",null,"是否付款"),Object(i["i"])("th",null,"編輯")])],-1)})),d=["textContent"],o={class:"list-unstyled"},s={class:"text-right"},b={class:"form-check form-switch"},O=["id","onUpdate:modelValue","onChange"],u=["for"],j={key:0},p={key:1},h={class:"btn-group"},m=["onClick"],g=["onClick"];function f(t,e,c,a,f,v){var y=Object(i["I"])("Loading"),k=Object(i["I"])("OrderModal"),L=Object(i["I"])("DelModal"),x=Object(i["I"])("Pagination");return Object(i["z"])(),Object(i["h"])(i["a"],null,[Object(i["l"])(y,{active:f.isLoading},{default:Object(i["U"])((function(){return[n]})),_:1},8,["active"]),Object(i["i"])("table",l,[r,Object(i["i"])("tbody",null,[(Object(i["z"])(!0),Object(i["h"])(i["a"],null,Object(i["G"])(f.orders,(function(e,c){return Object(i["z"])(),Object(i["h"])(i["a"],{key:c},[f.orders.length?(Object(i["z"])(),Object(i["h"])("tr",{key:0,class:Object(i["t"])({"text-secondary":!e.is_paid})},[Object(i["i"])("td",null,Object(i["L"])(t.$filters.date(e.create_at)),1),Object(i["i"])("td",null,[e.user?(Object(i["z"])(),Object(i["h"])("span",{key:0,textContent:Object(i["L"])(e.user.email)},null,8,d)):Object(i["g"])("",!0)]),Object(i["i"])("td",null,[Object(i["i"])("ul",o,[(Object(i["z"])(!0),Object(i["h"])(i["a"],null,Object(i["G"])(e.products,(function(t,e){return Object(i["z"])(),Object(i["h"])("li",{key:e},Object(i["L"])(t.product.title)+" 數量："+Object(i["L"])(t.qty)+" "+Object(i["L"])(t.product.unit),1)})),128))])]),Object(i["i"])("td",s,Object(i["L"])(e.total),1),Object(i["i"])("td",null,[Object(i["i"])("div",b,[Object(i["V"])(Object(i["i"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return v.updatePaid(e)}},null,40,O),[[i["P"],e.is_paid]]),Object(i["i"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(i["z"])(),Object(i["h"])("span",j,"已付款")):(Object(i["z"])(),Object(i["h"])("span",p,"未付款"))],8,u)])]),Object(i["i"])("td",null,[Object(i["i"])("div",h,[Object(i["i"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return v.openModal(!1,e)}}," 檢視 ",8,m),Object(i["i"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return v.openDelOrderModal(e)}}," 刪除 ",8,g)])])],2)):Object(i["g"])("",!0)],64)})),128))])]),Object(i["l"])(k,{order:f.tempOrder,ref:"orderModal",onUpdatePaid:v.updatePaid},null,8,["order","onUpdatePaid"]),Object(i["l"])(L,{item:f.tempOrder,ref:"delModal",onDelItem:v.delOrder},null,8,["item","onDelItem"]),Object(i["l"])(x,{pages:f.pagination,onEmitPages:v.getOrders},null,8,["pages","onEmitPages"])],64)}var v=c("5530"),y=(c("99af"),c("1799")),k=c("6ff1"),L=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),x={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},_=Object(i["i"])("div",{class:"modal-header bg-dark text-white"},[Object(i["i"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(i["i"])("span",null,"訂單細節")]),Object(i["i"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},z={class:"row"},w={class:"col-md-4"},$=Object(i["i"])("h3",null,"用戶資料",-1),C={class:"table"},I={key:0},S=Object(i["i"])("th",{style:{width:"100px"}},"姓名",-1),D=Object(i["i"])("th",null,"Email",-1),E=Object(i["i"])("th",null,"電話",-1),U=Object(i["i"])("th",null,"地址",-1),G={class:"col-md-8"},V=Object(i["i"])("h3",null,"訂單細節",-1),W={class:"table"},q=Object(i["i"])("th",{style:{width:"100px"}},"訂單編號",-1),J=Object(i["i"])("th",null,"下單時間",-1),N=Object(i["i"])("th",null,"付款時間",-1),A={key:0},F={key:1},T=Object(i["i"])("th",null,"付款狀態",-1),X={key:0,class:"text-success"},B={key:1,class:"text-muted"},H=Object(i["i"])("th",null,"總金額",-1),K=Object(i["i"])("h3",null,"選購商品",-1),Q={class:"table"},R=Object(i["i"])("thead",null,[Object(i["i"])("tr")],-1),Y={class:"text-end"},Z={class:"modal-footer"},tt=Object(i["i"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function et(t,e,c,a,n,l){return Object(i["z"])(),Object(i["h"])("div",L,[Object(i["i"])("div",x,[Object(i["i"])("div",P,[_,Object(i["i"])("div",M,[Object(i["i"])("div",z,[Object(i["i"])("div",w,[$,Object(i["i"])("table",C,[n.tempOrder.user?(Object(i["z"])(),Object(i["h"])("tbody",I,[Object(i["i"])("tr",null,[S,Object(i["i"])("td",null,Object(i["L"])(n.tempOrder.user.name),1)]),Object(i["i"])("tr",null,[D,Object(i["i"])("td",null,Object(i["L"])(n.tempOrder.user.email),1)]),Object(i["i"])("tr",null,[E,Object(i["i"])("td",null,Object(i["L"])(n.tempOrder.user.tel),1)]),Object(i["i"])("tr",null,[U,Object(i["i"])("td",null,Object(i["L"])(n.tempOrder.user.address),1)])])):Object(i["g"])("",!0)])]),Object(i["i"])("div",G,[V,Object(i["i"])("table",W,[Object(i["i"])("tbody",null,[Object(i["i"])("tr",null,[q,Object(i["i"])("td",null,Object(i["L"])(n.tempOrder.id),1)]),Object(i["i"])("tr",null,[J,Object(i["i"])("td",null,Object(i["L"])(t.$filters.date(n.tempOrder.create_at)),1)]),Object(i["i"])("tr",null,[N,Object(i["i"])("td",null,[n.tempOrder.paid_date?(Object(i["z"])(),Object(i["h"])("span",A,Object(i["L"])(t.$filters.date(n.tempOrder.paid_date)),1)):(Object(i["z"])(),Object(i["h"])("span",F,"時間不正確"))])]),Object(i["i"])("tr",null,[T,Object(i["i"])("td",null,[n.tempOrder.is_paid?(Object(i["z"])(),Object(i["h"])("strong",X,"已付款")):(Object(i["z"])(),Object(i["h"])("span",B,"尚未付款"))])]),Object(i["i"])("tr",null,[H,Object(i["i"])("td",null,Object(i["L"])(t.$filters.currency(n.tempOrder.total)),1)])])]),K,Object(i["i"])("table",Q,[R,Object(i["i"])("tbody",null,[(Object(i["z"])(!0),Object(i["h"])(i["a"],null,Object(i["G"])(n.tempOrder.products,(function(e){return Object(i["z"])(),Object(i["h"])("tr",{key:e.id},[Object(i["i"])("th",null,Object(i["L"])(e.product.title),1),Object(i["i"])("td",null,Object(i["L"])(e.qty)+" / "+Object(i["L"])(e.product.unit),1),Object(i["i"])("td",Y,Object(i["L"])(t.$filters.currency(e.final_total)),1)])})),128))])])])])]),Object(i["i"])("div",Z,[tt,Object(i["i"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(e){return t.$emit("update-order",n.tempOrder)})}," 確認 ")])])])],512)}var ct=c("e0ae"),it={name:"orderModal",props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[ct["a"]],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},at=c("6b0d"),nt=c.n(at);const lt=nt()(it,[["render",et]]);var rt=lt,dt={data:function(){return{orders:[],pagination:{},tempOrder:{},isLoading:!1,currentPage:1}},components:{Pagination:y["a"],DelModal:k["a"],OrderModal:rt},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/admin/orders?page=:").concat(e);this.isLoading=!0,this.$http.get(c,this.tempProduct).then((function(e){e.data.success&&(e.data.orders=t.orders,e.data.pagination=t.pagination,t.isLoading=!1,console.log(e))}))},openModal:function(t,e){this.tempOrder=Object(v["a"])({},e),this.isNew=t;var c=this.$refs.orderModal;c.showModal},openDelOrderModal:function(t){this.tempOrder=Object(v["a"])({},t);var e=this.$refs.delModal;e.showModal},updatePaid:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/admin/order/").concat(t.id),i={is_paid:t.is_paid};this.isLoading=!0,this.$http.put(c,{data:i}).then((function(t){e.isLoading=!1,e.getOrders(e.currentPage),e.$httpMessageState(t,"更新付款狀態")}))},delOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("ryan-api","/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(e).then((function(e){console.log(e);var c=t.$refs.delModal;c.hideModal(),t.getOrders(t.currentPage)}))}},created:function(){this.getOrders(),console.log("https://vue3-course-api.hexschool.io/")}};c("f9d8");const ot=nt()(dt,[["render",f],["__scopeId","data-v-7f0c11a5"]]);e["default"]=ot},1799:function(t,e,c){"use strict";var i=c("7a23"),a={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},l={class:"page-item"},r=Object(i["i"])("span",{"aria-hidden":"true"},"«",-1),d=[r],o=["onClick"],s={class:"page-item"},b=Object(i["i"])("span",{"aria-hidden":"true"},"»",-1),O=[b];function u(t,e,c,r,b,u){return Object(i["z"])(),Object(i["h"])("nav",a,[Object(i["i"])("ul",n,[Object(i["i"])("li",l,[Object(i["i"])("a",{class:"page-link",onClick:e[0]||(e[0]=Object(i["W"])((function(t){return u.prePage(c.pages)}),["prevent"])),"aria-label":"Previous"},d)]),(Object(i["z"])(!0),Object(i["h"])(i["a"],null,Object(i["G"])(c.pages.total_pages,(function(t){return Object(i["z"])(),Object(i["h"])("li",{class:Object(i["t"])(["page-item",{active:t===c.pages.current_page}]),key:t},[Object(i["i"])("a",{class:"page-link",onClick:Object(i["W"])((function(e){return u.updatePage(t)}),["prevent"])},Object(i["L"])(t),9,o)],2)})),128)),Object(i["i"])("li",s,[Object(i["i"])("a",{class:"page-link",onClick:e[1]||(e[1]=Object(i["W"])((function(t){return u.nextPage(c.pages)}),["prevent"])),"aria-label":"Next"},O)])])])}var j={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-page",t)},prePage:function(t){var e=t.current_page-1,c=t.has_pre;c&&this.$emit("emit-page",e)},nextPage:function(t){var e=t.current_page+1,c=t.has_next;c&&this.$emit("emit-page",e)}}},p=c("6b0d"),h=c.n(p);const m=h()(j,[["render",u]]);e["a"]=m},a654:function(t,e,c){},b0c0:function(t,e,c){var i=c("83ab"),a=c("5e77").EXISTS,n=c("e330"),l=c("9bf2").f,r=Function.prototype,d=n(r.toString),o=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=n(o.exec),b="name";i&&!a&&l(r,b,{configurable:!0,get:function(){try{return s(o,d(this))[1]}catch(t){return""}}})},f9d8:function(t,e,c){"use strict";c("a654")}}]);
//# sourceMappingURL=chunk-3c5ab044.6582fe40.js.map