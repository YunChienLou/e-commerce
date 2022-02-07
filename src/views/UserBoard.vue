<template>
  <Nav></Nav>
  <div class="">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import Nav from "@/components/UserNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ToastMessages,
    Nav,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
};
</script>
