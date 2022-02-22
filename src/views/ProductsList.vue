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
  <div class="container mt-3" style="z-index: -3">
    <div class="row">
      <div id="sideNav" class="col-xl-2 mt-5">
        <div class="productSideNav">
          <div class="sideHeading">
            <h3>全部商品</h3>
          </div>
          <ul class="sideList">
            <li class="sideItem" @click="filter = ''">全部車款</li>
          </ul>
        </div>
        <div class="productSideNav nav2">
          <div class="sideHeading">
            <h3>車型分類</h3>
          </div>
          <ul class="sideList">
            <li class="sideItem" @click="filter = 'SUV'">SUV</li>
            <li class="sideItem" @click="filter = 'Sedan'">Sedan</li>
            <li class="sideItem" @click="filter = 'Sport'">Sport</li>
          </ul>
        </div>
        <!-- <div class="productSideNav">
          <div class="sideHeading">
            <h3>車輛大小</h3>
          </div>
          <ul class="sideList">
            <li class="sideItem">4門</li>
            <li class="sideItem">5門</li>
          </ul>
        </div> -->
      </div>
      <div class="col-xl-10">
        <div class="">
          <div class="title stack h1" style="--stacks: 3">
            <span style="--index: 0"
              >所有商品
              <div class="slash"></div>
              <h4>{{ filter }}</h4></span
            >
            <span style="--index: 1"
              >所有商品
              <div class="slash"></div>
              <h4>{{ filter }}</h4></span
            >
            <span style="--index: 2"
              >所有商品
              <div class="slash"></div>
              <h4>{{ filter }}</h4></span
            >
          </div>
        </div>
        <div class="mt-5">
          <transition-group
            @before-enter="listBeforeEnter"
            @enter="listEnter"
            :css="false"
          >
            <div
              class="card mb-3"
              style="max-width: 900px"
              v-for="(item, index) in filterData"
              :key="item.id"
              :data-index="index"
            >
              <div>
                <img
                  :src="item.images[0]"
                  class="img-fluid rounded-start"
                  alt="..."
                  @click="getProduct(item.id)"
                />
                <div class="card-body">
                  <div class="row d-flex mb-3">
                    <h1 class="align-center">
                      {{ item.title }}
                      <span class="badge bg-teslaRed mx-3">{{
                        item.category
                      }}</span>
                    </h1>
                  </div>
                  <div class="row mb-3 mx-2">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">性能指標</th>
                          <th scope="col">參數</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(object, index) in $para.table(
                            item.description
                          )"
                          :key="index"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ object.title }}</td>
                          <td>{{ object.content }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="btn-group btn-group-xl d-flex">
                        <button
                          type="button"
                          class="btn btn-outline-teslaGray"
                          @click.prevent="addFavItem(item.id)"
                        >
                          <font-awesome-icon :icon="[favState(item.id), 'bookmark']"/>

                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-teslaRed"
                          :disabled="this.status.loadingItem === item.id"
                          @click="addCart(item.id)"
                        >
                          <div
                            v-if="this.status.loadingItem === item.id"
                            class="spinner-grow text-danger spinner-grow-sm"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <font-awesome-icon :icon="['fas', 'cart-shopping']"/>

                        </button>
                      </div>
                    </div>
                    <div class="col">
                      <h4 class="text-center">
                        NT${{ $filters.currency(item.price) }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from "@/methods/emitter";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "",
      },
      favItems: JSON.parse(localStorage.getItem("favoriteItem")) || ["",],
      filter: "",
      isLoading: false,
    };
  },
  computed: {
    favState() {
      return function (id) {
        let favs = this.favItems;
        if (favs.indexOf(id) > -1) {
          console.log(id + " yes");
          return "fas";
        } else {
          console.log(id + " nope");
          return "far";
        }
      };
    },
    filterData() {
      let tempData = this.products.filter((el) => {
        if (this.filter === "") {
          return this.products;
        } else if (this.filter === el.category) {
          return el;
        }
      });
      return tempData;
    },
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
        console.log("products:", response);
      });
    },

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.status.loadingItem = id;
      this.$http.post(url, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = "";
        this.$httpMessageState(res, "加入購物車");
        emitter.emit("cartChange","add")
      });
    },
    addFavItem(id) {
      console.log(this.favItems);
      this.status.loadingItem = id;
      let index = this.favItems.findIndex((el) => {
        return el === id;
      });
      if (this.favItems.indexOf(id) < 0) {
        this.favItems.push(id);
        this.status.loadingItem = "";
        emitter.emit("push-message", {
          style: "success",
          title: "車款加入我的最愛",
        });
      } else {
        this.favItems.splice(index, 1);
        this.status.loadingItem = "";
        emitter.emit("push-message", {
          style: "danger",
          title: "車款從我的最愛移除",
        });
      }
      localStorage.setItem("favoriteItem", JSON.stringify(this.favItems));
    },
    listBeforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-300px)";
    },
    listEnter(el, done) {
      ScrollTrigger.matchMedia({
        all: () => {
          gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.matchMedia({
            all: () => {
              gsap.to(el, {
                scrollTrigger: {
                  trigger: el,
                  start: "100px bottom",
                  end: "+=500",
                  invalidateOnResize: true,
                  toggleActions: "play none none reverse",
                },
                opacity: 1,
                y: 0,
                delay: 1,
                duration: 3,
                ease: "power4.out",
                onComplete: done,
              });
            },
          });
        },
      });
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    ScrollTrigger.refresh();
  },
  unmounted() {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      // 把 ScrollTrigger 綁定的動畫消除
      trigger.kill();
    });
    // 消除綁定 MatchMedia();
    ScrollTrigger.clearMatchMedia();
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
  background-color: white;
  z-index: -6;
  border-radius: 50%;
}
.ldio-ei11i0en32 div {
  box-sizing: content-box;
}
</style>
