<template>
  <div class="steps">
    <progress id="progress" value="0" max="100"></progress>
    <div class="step-item">
      <button class="step-button text-center done" type="button">1</button>
      <div class="step-title">填寫資訊</div>
    </div>
    <div class="step-item">
      <button class="step-button text-center collapsed" type="button">2</button>
      <div class="step-title">確認訂單</div>
    </div>
    <div class="step-item">
      <button class="step-button text-center collapsed" type="button">3</button>
      <div class="step-title">完成購車</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: Number,
  },
  methods: {
    button() {
      const stepButtons = document.querySelectorAll(".step-button");
      const progress = document.querySelector("#progress");
      const donePages = this.$props.page - 1;
      progress.setAttribute(
        "value",
        (donePages * 100) / (stepButtons.length - 1)
      );
      stepButtons.forEach((item, secindex) => {
        if (donePages >= secindex) {
          item.classList.add("done");
        }
        if (donePages < secindex) {
          item.classList.remove("done");
        }
      });
    },
  },
  mounted() {
    this.button();
  },
};
</script>
