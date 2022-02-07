<template>
  <div class="container">
    <div class="row justify-content-center">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>刪除</th>
            <th>商品資料</th>
            <th style="width: 110px">價格</th>
            <th class="text-end">購買狀態</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="favItems">
            <tr v-for="item in favItems" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="delFavItem(item.id)"
                >
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.title }}
              </td>
              <td class="">NT${{ $filters.currency(item.price) }}</td>
              <td class="text-end">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="this.status.loadingItem === item.id"
                  @click="addCart(item.id)"
                >
                  加入購物車
                  <div
                    v-if="this.status.loadingItem === item.id"
                    class="spinner-grow text-danger spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-center"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favList: JSON.parse(localStorage.getItem("favoriteItem")) || [],
      products: [],
      status: {
        loadingItem: "",
      },
    };
  },
  computed: {
    favItems() {
      return this.products.filter((item) => {
        return this.favList.indexOf(item.id) > -1;
      });
    },
  },
  methods: {
    delFavItem(id) {
      let index = this.favList.findIndex((el) => {
        return id === el;
      });
      this.favList.splice(index, 1);
      localStorage.setItem("favoriteItem", JSON.stringify(this.favList));
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log("products:", response);
      });
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
        // this.getCart();
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
