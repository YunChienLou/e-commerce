<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/user/product">Product</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-xl-8">
        <h2>{{ product.title }}</h2>
        <p>{{ product.category }}</p>
        <img :src="product.images[0]" alt="" class="img-fluid mb-3" />
        <div></div>
        <div></div>
        <div class="accordion my-5" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                車輛簡介
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <!-- <div class="accordion-body">
                {{ product.content }}
              </div> -->
              <div
                class="accordion-body"
                v-html="$para.paragraph(product.content)"
              ></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                性能簡介
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <!-- <div class="accordion-body">
                {{ product.description }}
              </div> -->
              <div
                class="accordion-body"
                v-html="$para.paragraph(product.description)"
              ></div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                購車須知
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div
                class="accordion-body"
                v-html="$para.question(buyInfo)"
              ></div>
            </div>
          </div>
        </div>
      </article>
      <div class="col-xl-4">
        <div class="">
          <h5 class="h5">車款價格</h5>
          <div class="h5" v-if="!product.price">
            {{ product.origin_price }} 元
          </div>
          <del class="h6" v-if="product.price"
            >原價 {{ product.origin_price }} 元</del
          >
          <div class="h5" v-if="product.price">
            售價 $NT{{ product.price }} 元
          </div>
          <hr />
          <button
            type="button"
            class="btn btn-outline-teslaRed"
            @click="addToCart(product.id)"
          >
            <div
              v-if="this.status.loadingItem === product.id"
              class="spinner-grow text-teslaRed spinner-grow-sm"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            加到購物車 <i class="fas fa-shopping-cart"></i>
          </button>
        </div>

        <div class="my-3">
          <h5 class="h5">相關車款</h5>
          <table class="table">
            <tbody>
              <tr v-for="item in filterData" :key="item.id" class="">
                <th scope="row">
                  <img
                    class="img-fluid"
                    :src="item.images[0]"
                    style="width: 100px"
                    alt=""
                  />
                </th>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>
                  <button type="button" class="btn btn-outline-teslaRed">
                    GO
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getProducts from "@/mixins/getProducts";
export default {
  data() {
    return {
      product: {},
      id: "",
      status: {
        loadingItem: "",
      },
      isLoading: false,
      buyInfo:
        "下訂多久後，可以交付車輛？Tesla會通知您預計交車地點與日期，敬請與交付專員確認該日期後的三日區間內何日交付。請注意，以下更改可能會增加您的車輛交付等待時間： 1.修改訂單2.更改付款方式 3.更改車輛登記人。約定好的交付時間可以更改嗎？由於交付日期一經確認後，車輛物流與牌照登記即最後確認，故交車日期確認後不得修改。依據合約內容，最晚何時一定要交車？依據車輛整備狀況的不同，交付顧問會通知您車輛可交付的時間，您須於此時間起一週內前來Tesla 交車，詳細內容請參閱購車合約。交車後 Tesla 的窗口為何？車主服務(包含維修保養)與道路救援請撥打 24 小時免付費專線：0809-007-518。若為新訂單等相關事宜，請聯繫您的車主顧問。",
      filter: "",
    };
  },
  mixins: [getProducts],
  computed: {
    filterData() {
      // let newData = [];

      let tempData = this.products.filter((el) => {
        if (this.filter === "") {
          return this.products;
        } else if (this.filter === el.category) {
          return el;
        }
      });
      return tempData;
    },
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
          this.filter = response.data.product.category;
        }
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.status.loadingItem = id;
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = "";
        this.$httpMessageState(response, "加入購物車");
        this.$router.push("/user/cart");
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
