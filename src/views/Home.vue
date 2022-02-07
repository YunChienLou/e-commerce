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
  <ThreeD></ThreeD>
  <div class="container">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            alt="..."
            src="@/assets/tesla/model-y-2.jpg"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Built for Safety</h5>
            <p>
              5-Star Rating Model 3 achieved NHTSA 5-star safety ratings in
              every category and subcategory.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            alt="..."
            src="@/assets/tesla/model-3-2.jpg"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Quickest Acceleration</h5>
            <p>
              Model 3 comes with the option of dual motor all-wheel drive, 20”
              Überturbine Wheels and Performance Brakes and lowered suspension
              for total control, in all weather conditions.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            alt="..."
            src="@/assets/tesla/model-s-2.jpg"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Dual Motor</h5>
            <p>
              Tesla All-Wheel Drive has two independent motors for improved
              redundancy, each with only one moving part for minimal maintenance
              and maximum durability.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container text-center">
    <div class="header py-3 mb-2 mt-3">
      <h1>On Sale Products</h1>
      <p>Unleash your motor's true potential</p>
    </div>
    <div class="row row-cols-1 row-cols-lg-3">
      <div
        v-for="item in products"
        :key="item.id"
        class="col my-3 position-relative"
      >
        <span class="badge bg-teslaRed position-absolute top-0 start-90"
          >10 % OFF</span
        >
        <img class="mb-3 onSaleImages" :src="item.images[0]" alt="" />
        <h3>{{ item.title }}</h3>
        <span>NT${{ $filters.currency(item.price) }}</span>
      </div>
    </div>
    <button class="btn btn-teslaRed mt-5">View All Products</button>
  </div>
  <div class="container px-4 py-5" id="hanging-icons">
    <h1 class="pb-2 border-bottom">服務中心</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <i class="fas fa-oil-can"></i>
        </div>
        <div>
          <h3>低成本保養</h3>
          <p>
            每部 Tesla
            車輛的設計目標在於降低維修成本。車輛無需定期保養，零件維修頻率低。遠距診斷以及可提升車輛效能的定期空中下載
            (OTA) 軟體更新，可幫您減少維修時間，以盡情享受開車上路的時光。
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <i class="fas fa-layer-group"></i>
        </div>
        <div>
          <h3>管理服務</h3>
          <p>
            您隨時可以使用 Tesla
            應用程式來安排、變更和取消服務預約。無需等待。請加入您欲造訪服務中心的詳細資訊，以獲得快速流暢的體驗。
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <i class="fas fa-tools"></i>
        </div>
        <div>
          <h3>隨時隨地的維修服務</h3>
          <p>
            如果您的車輛需要檢查或維修，Tesla
            行動服務技術人員可以在您的停車地點完成大多數維修。如果當場無法解決問題，他們通常會識別和預先診斷維修問題，以便您到達
            Tesla 服務中心後能夠快速完成維修。
          </p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <i class="fas fa-exclamation-circle"></i>
        </div>
        <div>
          <h3>緊急服務</h3>
          <p>
            如果發生緊急狀況，道路救援團隊能夠在您最需要的時刻提供服務。我們的道路救援團隊全年無休，請隨時聯絡。
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/UserNav.vue";
import Footer from "@/components/Footer.vue";
import ThreeD from "@/components/3dModel.vue";

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  name: "Home",
  components: {
    Nav,
    ThreeD,
    Footer,
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      (this.isLoading = true),
        this.$http.get(url).then((response) => {
          (this.isLoading = false), (this.products = response.data.products);
          console.log("products:", response);
        });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.isLoading = true;
    this.getProducts();
  },
  mounted() {
    this.isLoading = false;
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
