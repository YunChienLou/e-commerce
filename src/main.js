import App from "./App.vue";
import router from "./router";
const app = createApp(App);
import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// Import component
import Loading from "vue3-loading-overlay";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// bs icons
import "bootstrap-icons/font/bootstrap-icons.css";
// fontawesome-vue
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/fontawsome";

// GSAP ANIMATION
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
app.use(gsap);
// Vue 3 Google maps
import VueGoogleMaps from "@fawmi/vue-google-maps";
// js運算功能 自己引入
import { currency, date } from "./methods/filters";
// 載入資源
import $httpMessageState from "./methods/pushMessageState";
// 新增資源到全域
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.config.globalProperties.$httpMessageState = $httpMessageState;
//斷句系統
import { question, paragraph, table } from "./methods/paragraph";
app.config.globalProperties.$para = {
  question,
  paragraph,
  table,
};
// 驗證表單
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");
app.use(VueGoogleMaps, {
  load: {
    key: `${process.env.VUE_APP_GOOGLE_MAP_API_KEY}`,
  },
});
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.component("Loading", Loading);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
