<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-double-ring-4kp4uv8lym2">
      <div class="ldio-ei11i0en32">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <Nav></Nav>
  <div class="container">
    <h1 class="my-3">服務據點</h1>
    <Map class="my-3" id="Map"></Map>
    <table class="table">
      <thead>
        <tr style="color: #cc0000">
          <th scope="col">#</th>
          <th scope="col">名稱</th>
          <th scope="col">電話</th>
          <th scope="col">地址</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>特斯拉濱江 展售中心</td>
          <td>02-2563-4755</td>
          <td>台北市中山區濱江街151巷28弄8號</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>特斯拉台北車站 展售中心</td>
          <td>02-2547-3214</td>
          <td>台北市中山區市民大道一段106號</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>特斯拉信義 展售中心</td>
          <td>02-2545-6321</td>
          <td>台北市信義區信義路二段44巷3弄5號</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer></Footer>
</template>
<script>
import Nav from "@/components/UserNav.vue";
import Footer from "@/components/Footer.vue";
import Map from "@/components/Map.vue";

export default {
  components: {
    Nav,
    Footer,
    Map,
  },
};
</script>
<style type="text/css" scoped>
@keyframes ldio-ei11i0en32 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-ei11i0en32 div {
  box-sizing: border-box !important;
}
.ldio-ei11i0en32 > div {
  position: absolute;
  width: 156px;
  height: 156px;
  top: 22px;
  left: 22px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: #cc0000 transparent #cc0000 transparent;
  animation: ldio-ei11i0en32 1s linear infinite;
}

.ldio-ei11i0en32 > div:nth-child(2),
.ldio-ei11i0en32 > div:nth-child(4) {
  width: 136px;
  height: 136px;
  top: 32px;
  left: 32px;
  animation: ldio-ei11i0en32 1s linear infinite reverse;
}
.ldio-ei11i0en32 > div:nth-child(2) {
  border-color: transparent #666666 transparent #666666;
}
.ldio-ei11i0en32 > div:nth-child(3) {
  border-color: transparent;
}
.ldio-ei11i0en32 > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-ei11i0en32 > div:nth-child(3) div:before,
.ldio-ei11i0en32 > div:nth-child(3) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 66px;
  background: #cc0000;
  border-radius: 50%;
  box-shadow: 0 148px 0 0 #cc0000;
}
.ldio-ei11i0en32 > div:nth-child(3) div:after {
  left: -8px;
  top: 66px;
  box-shadow: 148px 0 0 0 #cc0000;
}

.ldio-ei11i0en32 > div:nth-child(4) {
  border-color: transparent;
}
.ldio-ei11i0en32 > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-ei11i0en32 > div:nth-child(4) div:before,
.ldio-ei11i0en32 > div:nth-child(4) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 56px;
  background: #666666;
  border-radius: 50%;
  box-shadow: 0 128px 0 0 #666666;
}
.ldio-ei11i0en32 > div:nth-child(4) div:after {
  left: -8px;
  top: 56px;
  box-shadow: 128px 0 0 0 #666666;
}
.loadingio-spinner-double-ring-4kp4uv8lym2 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: url("../assets/tesla/tesla-icon.png") no-repeat;
  background-size: 80px auto;
  background-position: center;
}
.ldio-ei11i0en32 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-ei11i0en32 div {
  box-sizing: content-box;
}
</style>
