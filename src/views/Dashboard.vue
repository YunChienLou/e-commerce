<template>
  <Loading :active="isLoading"></Loading>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>
<script>
import emitter from "@/methods/emitter";
import Navbar from "../components/Navbar.vue";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(token);
    this.isLoading = true;
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      this.isLoading = false;
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
