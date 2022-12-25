<template>
  <div class="canvasBox">
    <canvas class="t-canvas" ref="tCanvas"></canvas>
  </div>
  <RouterView v-if="route.path == '/'"></RouterView>
  <main
    v-else
    class="page_contianer"
    v-loading="loading"
    element-loading-text="正在加载..."
    element-loading-background="rgba(255, 255, 255, 0.1)"
  >
    <section class="page_wrapper">
      <mk-header></mk-header>
      <RouterView v-slot="{ Component }">
        <Transition>
          <component :is="Component"></component>
        </Transition>
      </RouterView>
      <div class="footer">
        <page-list></page-list>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import mkHeader from "@/views/mkHeader.vue";
import sceneAPI from "./3d";
const route = useRoute();
const router = useRouter();
const loading = ref(true);
const href = window.location.hash;
const tCanvas = ref(null);
if (href.length > 2 && href != "#/home") router.push("/home");

onMounted(() => {
  if (href.length > 2) {
    console.log(href);
    nextTick(() => {
      sceneAPI.pageOnload(tCanvas.value!, () => {
        loading.value = false;
      });
    });
  }
});

watch(
  () => route.path,
  (path) => {
    switch (path) {
      case "/home":
        if (!loading.value) sceneAPI.backMain_3d();
        break;
      case "/drainageSystem":
        sceneAPI.intoWaterPump_3d();
        break;
      case "/transport":
        sceneAPI.intoBeltConveyor_3d();
        break;
      case "/gasExtraction":
        sceneAPI.intoGasPump_3d();
        break;
      case "/smartMining":
        sceneAPI.intoShearer_3d();
        break;
      case "/fan":
        sceneAPI.intoAirCompressor_3d();
        break;
      case "/safe":
        sceneAPI.intoSecurityDetection_3d();
        break;
      case "/ventilate":
        sceneAPI.intoFan_3d();
        break;
      case "/staff":
        sceneAPI.undergroundMineOut_3d();
        break;
    }
  }
);
</script>

<style lang="less">
@import "element-plus/theme-chalk/base.css";
@import "element-plus/theme-chalk/el-loading.css";
.canvasBox {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  // pointer-events: none;

  .t-canvas {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
    pointer-events: all;
    position: absolute;
    left: 0;
    top: 0;
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
  // display: flex;
  overflow: hidden;
  background: url("@/assets/image/page_bg.png") no-repeat center center/100%
    100%;

  .page_wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("@/assets/image/page_shadow.png") no-repeat center
      center/100% 100%;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url("@/assets/image/page_shadow.png") no-repeat center
        center/100% 100%;
    }
    .wrapper {
      padding: 0 0.5rem;
      width: 100%;
      display: flex;
      margin-top: 0.875rem;
      // position: relative;
      justify-content: space-between;
      box-sizing: border-box;
      pointer-events: none;
      .left,
      .right {
        pointer-events: auto;
      }
    }
    .footer {
      width: calc(100% - 9.75rem);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: auto;
    }
  }
}
.el-overlay,
.el-loading-mask {
  pointer-events: auto;
}
.mk-popup {
  background: linear-gradient(
    90deg,
    rgba(28, 24, 41, 1) 0%,
    rgba(0, 0, 2, 1) 100%
  ) !important;
  .el-dialog__body {
    padding: 0 0 0.1625rem !important;
  }
  &::before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 1.25rem;
    height: 1.25rem;
    border: 0.025rem solid;
    box-sizing: border-box;
    border-radius: 0.05rem;
    pointer-events: none;
  }
  &::before {
    left: 0;
    border-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0)
      )
      2;
  }
  &::after {
    right: 0;
    border-image: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.5)
      )
      2;
  }
  .el-dialog__header {
    position: relative;
    margin-right: 0;
    &::before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 1.25rem;
      height: 1.25rem;
      border: 0.025rem solid;
      box-sizing: border-box;
      border-radius: 0.05rem;
      pointer-events: none;
    }
    &::before {
      left: 0;
      border-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0.5)
        )
        2;
    }
    &::after {
      right: 0;
      border-image: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0.5)
        )
        2;
    }
  }
}
.fixed_bottom {
  position: fixed;
  bottom: 2.15rem;
  right: 5.525rem;
  z-index: 2;
  pointer-events: all;
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
