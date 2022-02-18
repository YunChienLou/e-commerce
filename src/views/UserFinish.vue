<template>
  <Loading :active="isLoading"></Loading>
  <div class="row text-center mt-5">
    <h2>感謝您的購買</h2>
    <h2>我們正在準備您的訂單</h2>
  </div>
  <div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <Process :page="processPage"></Process>
      <table class="table align-middle">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="text-end">
              $NT {{ $filters.currency(item.final_total) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end">總計</td>
            <td class="text-end">$NT {{ $filters.currency(order.total) }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  <div class="row d-flex justify-content-center mb-3">
    <router-link class="col-3" to="/"
      ><button class="btn btn-teslaRed form-control">
        回到首頁
      </button></router-link
    >
    <router-link class="col-3" to="/user/product"
      ><button class="btn btn-teslaRed form-control">
        回到車款頁面
      </button></router-link
    >
  </div>
</template>
<script>
import Process from "@/components/ProcessSteps.vue";
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",
      isLoading: false,
      processPage: 3,
    };
  },
  components: {
    Process,
  },
  inject: ["emitter"],
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
          this.$router.push("/user/finish");
        }
      });
    },
  },
  created() {
    this.emitter.on("finish-order", (message) => {
      console.log(message);
      this.orderId = message;
    });
  },
  mounted() {
    this.getOrder();
    console.log(this.order);
  },
};
</script>
