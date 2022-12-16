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
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import mkHeader from "@/views/mkHeader.vue";
const route = useRoute();
const router = useRouter();
const loading = ref(true);
const href = window.location.hash;
if (href.length > 2 && href != "#/home") router.push("/home");

onMounted(() => {
  if (href.length > 2) {
    console.log(href);
    nextTick(() => {
      loading.value = false;
    });
  }
});
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
