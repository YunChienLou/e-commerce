<template>
  <Nav></Nav>
  <div class="parallax">
    <div class="text-center main-title">
      <h1>About Us</h1>
      <h3>關於特斯拉</h3>
    </div>
    <img src="@/assets/tesla/parallax.jpg" class="img-fluid bg" alt="" />
    <img src="@/assets/tesla/fog.png" class="img-fluid topLayer" alt="" />
  </div>
  <div class="content">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-6 text-center align-item-center my-5 d-flex align-items-center"
        >
          Tesla 成立於 2003 年，當初創立 Tesla
          的工程師團隊，希望證明人們無需因為駕駛電動車而有任何妥協。相較於燃油車，電動車的性能應該更優良、更快速也能帶來更多駕駛上的樂趣。時至今日，Tesla
          已不僅打造出純電動車，更推出了具有無限擴充功能的清潔能源發電與儲存產品。Tesla
          深信，全世界越快停止依靠石化燃料，則越能迅速進入零排放的美好未來。
        </div>
        <div class="col-sm-6">
          <img
            src="@/assets/tesla/beforeCliff.jpg"
            class="img-fluid"
            alt="..."
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-6">
          <img
            src="@/assets/tesla/driverSeat.jpg"
            class="img-fluid"
            alt="..."
          />
        </div>
        <div
          class="col-sm-6 text-center align-item-center my-5 d-flex align-items-center"
        >
          您可以透過觸控螢幕上的「軟體」索引標籤來檢查是否有新的軟體更新。如有可用更新，您將會在中央觸控螢幕顯示畫面上收到通知，並可選擇立即安裝或預約其他時間安裝。為確保軟體更新的效率及穩定性，請將您的車輛連接到
          Wi-Fi。
        </div>
      </div>
      <div class="row"></div>
      <hr />
      <div class="row">
        <div
          class="col-sm-4 text-center align-item-center my-5 d-flex align-items-center"
        >
          您可在車內面板上設定「充電％上限」。於一般日常使用時，建議您將設定保持在每日所需里程的範圍內，最高到
          90% 的電池容量即可。當您要準備長途旅程時，再將充電上限設為 100%
          作為最佳設定。
        </div>
        <div class="col-sm-8">
          <img src="@/assets/tesla/charge.jpg" class="img-fluid" alt="..." />
        </div>
      </div>
    </div>
    <div class="container px-4 py-5" id="hanging-icons">
      <h2 class="pb-2 border-bottom">服務中心</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <i class="fas fa-oil-can"></i>
          </div>
          <div>
            <h2>低成本保養</h2>
            <p>
              每部 Tesla
              車輛的設計目標在於降低維修成本。車輛無需定期保養，零件維修頻率低。遠距診斷以及可提升車輛效能的定期空中下載
              (OTA) 軟體更新，可幫您減少維修時間，以盡情享受開車上路的時光。
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <i class="fas fa-layer-group"></i>
          </div>
          <div>
            <h2>管理服務</h2>
            <p>
              您隨時可以使用 Tesla
              應用程式來安排、變更和取消服務預約。無需等待。請加入您欲造訪服務中心的詳細資訊，以獲得快速流暢的體驗。
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <i class="fas fa-tools"></i>
          </div>
          <div>
            <h2>隨時隨地的維修服務</h2>
            <p>
              如果您的車輛需要檢查或維修，Tesla
              行動服務技術人員可以在您的停車地點完成大多數維修。如果當場無法解決問題，他們通常會識別和預先診斷維修問題，以便您到達
              Tesla 服務中心後能夠快速完成維修。
            </p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <i class="fas fa-exclamation-circle"></i>
          </div>
          <div>
            <h2>緊急服務</h2>
            <p>
              如果發生緊急狀況，道路救援團隊能夠在您最需要的時刻提供服務。我們的道路救援團隊全年無休，請隨時聯絡。
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/components/UserNav.vue";
import Footer from "@/components/Footer.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  components: {
    Nav,
    Footer,
  },
  methods: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".topLayer", {
      ScrollTrigger: {
        trigger: ".content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      // yPercent: -50,
      ease: "none",
      duration: 5,
    });
  },
};
</script>
// gsap.to("#section-3-1219", { // backgroundPosition: "50% 100%", // ease:
"none", // scrollTrigger: { // trigger: "#section-3-1219", // start: "top
bottom", // end: "bottom top", // scrub: true // } // });
