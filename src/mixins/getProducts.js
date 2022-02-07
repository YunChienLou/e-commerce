export default {
  data() {
    return {
      products: {},
    };
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
  },
  created() {
    this.getProducts();
  },
};
