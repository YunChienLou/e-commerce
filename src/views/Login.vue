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
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
          this.$router.push("/dashboard/products");
        }

        console.log(res);
      });
    },
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
