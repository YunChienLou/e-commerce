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
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"
  ></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>
<script>
import Pagination from "../components/Pagination.vue";
import DelModal from "@/components/DelModal.vue";
import OrderModal from "@/components/OrderModal.vue";

export default {
  data() {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isLoading: false,
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  methods: {
    getOrders(currentPage = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=:${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct).then((res) => {
        if (res.data.success) {
          res.data.orders = this.orders;
          res.data.pagination = this.pagination;
          this.isLoading = false;
          console.log(res);
        }
      });
    },
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = isNew;
      const orderComponent = this.$refs.orderModal;
      orderComponent.showModal;
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal;
    },
    updatePaid(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.isLoading = true;
      this.$http.put(api, { data: paid }).then((res) => {
        this.isLoading = false;
        this.getOrders(this.currentPage);
        this.$httpMessageState(res, "更新付款狀態");
      });
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getOrders(this.currentPage);
      });
    },
  },
  created() {
    this.getOrders();
    console.log(process.env.VUE_APP_API);
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
s
