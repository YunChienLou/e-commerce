(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,a,e){"use strict";e.r(a);var n=e("7a23"),c={class:"container-fluid mt-3 position-relative"};function o(t,a,e,o,s,r){var i=Object(n["I"])("Loading"),l=Object(n["I"])("Navbar"),u=Object(n["I"])("ToastMessages"),b=Object(n["I"])("router-view");return Object(n["z"])(),Object(n["h"])(n["a"],null,[Object(n["l"])(i,{active:s.isLoading},null,8,["active"]),Object(n["l"])(l),Object(n["i"])("div",c,[Object(n["l"])(u),Object(n["l"])(b)])],64)}e("ac1f"),e("5319");var s=e("cfb9"),r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container-fluid"},l=Object(n["i"])("a",{class:"navbar-brand",href:"#"},"Navbar w/ text",-1),u=Object(n["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["i"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},v=Object(n["k"])("產品"),p=Object(n["k"])("訂單"),h=Object(n["k"])("優惠券");function j(t,a,e,c,o,s){var j=Object(n["I"])("router-link");return Object(n["z"])(),Object(n["h"])("nav",r,[Object(n["i"])("div",i,[l,u,Object(n["i"])("div",b,[Object(n["i"])("div",d,[Object(n["l"])(j,{to:"/dashboard/products",class:"nav-link"},{default:Object(n["U"])((function(){return[v]})),_:1}),Object(n["l"])(j,{to:"/dashboard/orders",class:"nav-link"},{default:Object(n["U"])((function(){return[p]})),_:1}),Object(n["l"])(j,{to:"/dashboard/coupons",class:"nav-link"},{default:Object(n["U"])((function(){return[h]})),_:1}),Object(n["i"])("a",{href:"#",onClick:a[0]||(a[0]=Object(n["W"])((function(){return s.logout&&s.logout.apply(s,arguments)}),["prevent"])),class:"nav-link"},"登出")])])])])}var O={methods:{logout:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","logout");console.log("signIn000"+a),this.$http.post(a,this.user).then((function(a){a.data.success&&t.$router.push("/login")}))}}},g=e("6b0d"),f=e.n(g);const k=f()(O,[["render",j]]);var w=k,$=e("f367"),m={data:function(){return{isLoading:!1}},components:{Navbar:w,ToastMessages:$["a"]},provide:function(){return{emitter:s["a"]}},created:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log(a),this.isLoading=!0,this.$http.defaults.headers.common.Authorization=a;var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(e,this.user).then((function(a){t.isLoading=!1,a.data.success||t.$router.push("/login")}))}};const x=f()(m,[["render",o]]);a["default"]=x}}]);
//# sourceMappingURL=chunk-2d0d63f1.9afb7da0.js.map