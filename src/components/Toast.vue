<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header justify-content-between">
      <div class="">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"
          ><img src="@/assets/car-icon.svg" alt="logo" width="20" />
        </span>
        <strong>TESLA Taiwan</strong>
      </div>
      <div class="">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
    <div class="toast-body">
      <strong class="toast-body me-auto">{{ msg.title }}</strong>
      <div class="progress mt-2" style="height: 3px">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          :class="`bg-${msg.style}`"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 0%"
          ref="count"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Toast from "bootstrap/js/dist/toast";

export default {
  name: "Toast",
  props: ["msg"],
  data() {
    return {
      minutes: 6,
      countdown: null,
    };
  },
  methods: {
    startTimer() {
      let seconds = this.minutes; // initial time
      let et = this.$refs.count;
      et.style.width = "0%";
      this.countdown = setInterval(() => {
        this.minutes--;
        et.style.width = ((seconds - this.minutes) * 100) / seconds + "%";
        if (this.minutes === 0) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.countdown);
      this.minutes = 10;
    },
  },
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 6000,
    });
    toast.show();
    this.startTimer();
  },
};
</script>
