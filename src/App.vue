<template>
  <div class="canvasBox">
    <canvas class="t-canvas"></canvas>
  </div>
  <RouterView v-if="route.path == '/'"></RouterView>
  <main
    v-else
    class="page_contianer"
    v-loading="loading"
    element-loading-text="正在加载..."
    element-loading-background="rgba(255, 255, 255, 0.1)"
  ></main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const loading = ref(true);
const href = window.location.hash;
// if (href.length > 2 && href != "#/home") router.push("/home");
</script>

<style lang="less">
.canvasBox {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;

  .t-canvas {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.page_contianer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
}
@keyframes tzdouce {
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(-0.25rem);
  }
  50% {
    transform: translateY(0rem);
  }
  75% {
    transform: translateY(0.25rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>
