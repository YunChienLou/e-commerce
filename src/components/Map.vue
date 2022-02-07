<template>
  <GMapMap
    :center="center"
    :zoom="13"
    map-type-id="terrain"
    style="width: 100vw; height: 50rem"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="{
          url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
          scaledSize: { width: 77, height: 77 },
          labelOrigin: { x: 16, y: -10 },
        }"
      >
        <GMapInfoWindow>
          <div>{{ m.title }} <MyComponent /></div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 25.049353, lng: 121.524735 },
      markers: [
        {
          title: "特斯拉濱江 展售中心",
          position: {
            lat: 25.071605,
            lng: 121.537387,
          },
        },
        {
          title: "特斯拉台北車站 展售中心",
          position: {
            lat: 25.048533,
            lng: 121.516871,
          },
        },
        {
          title: "特斯拉信義 展售中心",
          position: {
            lat: 25.03423,
            lng: 121.526005,
          },
        },
      ],
    };
  },
};
</script>

<style>
.vue-map-container {
  height: 70vh;
}
</style>
