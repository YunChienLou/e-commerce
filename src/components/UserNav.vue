<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="z-index:1000;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="logo" width="100" />
      </router-link>

      <div class="d-flex">
        <router-link
          to="/user/cart"
          class="nav-link position-relative"
          :class="{ disabled: numCart === 0 }"
        >
          <font-awesome-icon :icon="['fas', 'cart-shopping']"/>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-teslaRed"
          >
            {{ numCart }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </router-link>
        <router-link
          to="/user/myfavs"
          :class="{ disabled: numFavItems === 0 }"
          class="nav-link position-relative"
        >
          <font-awesome-icon :icon="['fas', 'bookmark']"/>

          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-teslaRed"
          >
            {{ numFavItems }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          id="navbarSideCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas-collapse navbar-collapse d-flex justify-content-center"
          id="navbarNavAltMarkup"
        >
          <button
            class="navbar-toggler exit"
            type="button"
            @click="exitNav()"
          >
            <h1>X</h1>
          </button>
          <div class="navbar-nav text-center top-0">
            <div class="row">
              <div class="col d-lg-flex">
                <router-link to="/" class="nav-link">
                  <div class="stackN h1" style="--stacks: 3">
                    <span style="--index: 0">Home</span>
                    <span style="--index: 1">Home</span>
                    <span style="--index: 2">Home</span>
                  </div>
                </router-link>
                <router-link to="/about" class="nav-link">
                  <div class="stackN h1" style="--stacks: 3">
                    <span style="--index: 0">About</span>
                    <span style="--index: 1">About</span>
                    <span style="--index: 2">About</span>
                  </div>
                </router-link>
                <router-link to="/user/product" class="nav-link">
                  <div class="stackN h1" style="--stacks: 3">
                    <span style="--index: 0">Product</span>
                    <span style="--index: 1">Product</span>
                    <span style="--index: 2">Product</span>
                  </div>
                </router-link>
                <router-link to="/contact" class="nav-link">
                  <div class="stackN h1" style="--stacks: 3">
                    <span style="--index: 0">Contact</span>
                    <span style="--index: 1">Contact</span>
                    <span style="--index: 2">Contact</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <button
    type="button"
    class="btn btn-teslaRed btn-floating btn-lg"
    id="btn-back-to-top"
    style="position: fixed; bottom: 20px; right: 20px;z-index:5;"
    @click="backTotop"
  >
    <font-awesome-icon :icon="['fas', 'angle-up']"/>

  </button>
  <!-- <button
        type="button"
        class="btn btn-teslaRed btn-floating btn-lg "
        style="position: fixed ; bottom: 80px ; right: 20px;"
        >
    <i class="fas fa-shopping-cart"></i>
  </button> -->
</template>

<script>
import gsap from "gsap";
import emitter from "@/methods/emitter";
export default {
  data() {
    return {
      favItems: JSON.parse(localStorage.getItem("favoriteItem")) || [],
      numCart: 0,
      cart: {},
    };
  },
  computed: {
    numFavItems() {
      return Object.keys(this.favItems).length;
    },
  },
  watch: {
    cart: {
      handler: function () {
        this.numCart = this.cart.carts.length;
      },
    },
  },
  
  methods: {
    exitNav(){
      const navCollapse = document.getElementById('navbarNavAltMarkup');
      navCollapse.classList.remove('open');
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
    backTotop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    animation() {
      gsap
        .timeline()
        .from(".ob1", {
          x: -500,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0,
        })
        .from(".ob2", {
          x: -500,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.3,
        })
        .from(".ob3", {
          x: -500,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.6,
        })
        .from(".ob4", {
          x: -500,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.9,
        });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    document
      .querySelector("#navbarSideCollapse")
      .addEventListener("click", function () {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
      });
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      const btn = document.getElementById("btn-back-to-top");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
    emitter.on("cartChange",(method)=>{
      console.log(method);
      if(method == "minus"){
        this.numCart - 1;
        
      }else if(method == "add"){
        this.numCart + 1;
        console.log(this.numCart);
      }
    })
  },
};
</script>
