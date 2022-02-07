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
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個商品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.catagory }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-page="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <!-- @update-product="updateProduct" 子物件將資料傳到父後 用updateProduct來接收 -->
  <DelModal
    ref="delModal"
    :item="tempProduct"
    @del-item="delProduct"
  ></DelModal>
</template>
<script>
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  inject: ["emitter"],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      // 修改
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then(
        (response) => {
          console.log(response);
          productComponent.hideModal();

          if (response.data.success) {
            this.getProducts();
            this.emitter.emit("push-message", {
              style: "success",
              title: "更新成功",
            });
          } else {
            this.emitter.emit("push-message", {
              style: "danger",
              title: "更新失敗",
              content: response.data.message.join("、"),
            });
          }
        }
      );
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        this.isLoading = false;
        console.log(res.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
  },
  created() {
    this.getProducts();
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
