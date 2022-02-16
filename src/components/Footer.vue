<template>
  <!-- Footer -->
  <footer
    class="text-center text-lg-start text-white"
    style="background-color: black"
  >
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 Tesla" >
            <h6 class="text-uppercase mb-4 font-weight-bold">Tesla Inc</h6>
            <p>
              Ride With Pride.<br />
              Accelerate the world's transition to sustainable energy.
            </p>
            <p></p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 Company">
            <h6 class="text-uppercase mb-4 font-weight-bold">Company</h6>
            <p>
              <router-link class="text-white" to="/">Home</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/about">About</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/user/product">Product</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/contact">Contact</router-link>
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 Products">
            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <router-link class="text-white" to="/user/product">SUV</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/user/product">Sedan</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/user/product">Sports</router-link>
            </p>
          </div>

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 Contact">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New Taipei City, TW</p>
            <p><i class="fas fa-envelope mr-3"></i> TeslaTaiwan@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> (02)-2221-3375</p>
          </div>
          <!-- Grid column -->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3" />

      <!-- Section: Copyright -->
      <section class="p-3 pt-0 Copyright">
        <div class="row d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <!-- Copyright -->
            <div class="p-3">
              © {{ currentYear }} Copyright:
              <a class="text-white" href="#">Tesla Corporation</a>
            </div>
            <!-- Copyright -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <!-- Facebook -->
            <a
              class="btn btn-outline-light btn-floating m-1 text-white"
              role="button"
              ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a
              class="btn btn-outline-light btn-floating m-1 text-white"
              role="button"
              ><i class="fab fa-twitter"></i
            ></a>

            <!-- Google -->
            <a
              class="btn btn-outline-light btn-floating m-1 text-white"
              role="button"
              ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a
              class="btn btn-outline-light btn-floating m-1 text-white"
              role="button"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <!-- Grid column -->
        </div>
      </section>
      <!-- Section: Copyright -->
    </div>
    <!-- Grid container -->
  </footer>
  <!-- Footer -->
  <!-- End of .container -->
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      // tesla: this.$refs.Tesla
    };
  },
  methods:{
    footerAnimate(){
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          gsap.from(".Tesla", {
            scrollTrigger: {
              trigger: '.Tesla',
              start: "200px bottom",
              end: "200px bottom",
              invalidateOnResize: true,
              toggleActions: "play none none reverse",
              // markers:true,
            },
            y: -200,
            duration: 1,
            ease: "power4.out",
            scale: 0.5,
            opacity:0,
          });
          gsap.from(".Company", {
            scrollTrigger: {
              trigger: '.Company',
              toggleActions: "play none none reverse",
              invalidateOnResize: true,
              start: "200px bottom",
              end: "200px bottom",
              // markers:true,
            },
            duration: 1,
            ease: "power4.out",
            y: -200,
            // scale: 0.5,
            delay:0.5,
            opacity:0,
          });
          gsap.from(".Copyright", {
            scrollTrigger: {
              trigger: '.Copyright',
              toggleActions: "play none none reverse",
              invalidateOnResize: true,
              start: "200px bottom",
              end: "200px bottom",
              // markers:true,
            },
            duration: 1,
            ease: "power4.out",
            y: -400,
            // scale: 0.5,
            delay: 2,
            opacity:0,
          });
          gsap.from(".Products", {
            scrollTrigger: {
              trigger: '.Products',
              toggleActions: "play none none reverse",
              invalidateOnResize: true,
              start: "200px bottom",
              end: "200px bottom",
              // markers:true,
            },
            duration: 1,
            ease: "power4.out",
            y: -200,
            // scale: 0.5,
            delay:1,
            opacity:0,
          });
          gsap.from(".Contact", {
            scrollTrigger: {
              trigger: '.Contact',
              toggleActions: "play none none reverse",
              invalidateOnResize: true,
              start: "200px bottom",
              end: "200px bottom",
              // markers:true,
            },
            duration: 1,
            ease: "power4.out",
            y: -200,
            // scale: 0.5,
            delay:1.5,
            opacity:0,
          });
        },
      });

    }
  },
  mounted(){
    ScrollTrigger.refresh();
    this.footerAnimate()
    // gsap.timeline
    //   .from(".ob1",{x:-500, ease:"expo.out", duration: 1, opacity: 0 })
    //   .from('.ob2', {x:-1000, ease:"expo.out", duration: 1, opacity: 0 })
    //   .from('.ob3', {x:-500, ease:"expo.out", duration: 1, opacity: 0 })
  },
  unmounted(){
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      // 把 ScrollTrigger 綁定的動畫消除
        trigger.kill();
      });
      // 消除綁定 MatchMedia();
    ScrollTrigger.clearMatchMedia();
  }
};
</script>
