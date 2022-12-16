<template>
  <div class="page_list_wrapper">
    <div class="page_list">
      <div
        class="page_list_item"
        v-for="item in pages"
        :key="item.path"
        @click="router.push(item.path)"
      >
        <img
          :src="item.img"
          alt=""
          :class="['img', route.path == item.path ? 'big' : '']"
        />
        <p class="text">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const pages = markRaw([
  {
    img: new URL("@/assets/image/tf.png", import.meta.url).href,
    path: "/ventilate",
    name: "通风系统",
  },
  {
    img: new URL("@/assets/image/yf.png", import.meta.url).href,
    path: "/fan",
    name: "压风系统",
  },
  {
    img: new URL("@/assets/image/ys.png", import.meta.url).href,
    path: "/transport",
    name: "运输系统",
  },
  {
    img: new URL("@/assets/image/ps.png", import.meta.url).href,
    path: "/drainageSystem",
    name: "排水系统",
  },
  {
    img: new URL("@/assets/image/sy.png", import.meta.url).href,
    path: "/home",
    name: "首页",
  },
  {
    img: new URL("@/assets/image/ws.png", import.meta.url).href,
    path: "/gasExtraction",
    name: "瓦斯抽采",
  },
  {
    img: new URL("@/assets/image/zn.png", import.meta.url).href,
    path: "/smartMining",
    name: "智能开采",
  },
  {
    img: new URL("@/assets/image/aq.png", import.meta.url).href,
    path: "/safe",
    name: "安全检测",
  },
  {
    img: new URL("@/assets/image/ry.png", import.meta.url).href,
    path: "/staff",
    name: "人员定位",
  },
]);
</script>

<style scoped lang="less">
.page_list_wrapper {
  width: 100%;
  bottom: 0;
  overflow: hidden;
  position: absolute;

  .page_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(100%);
    transition: all 0.5s;
    padding-bottom: 0.5625rem;
    .page_list_item {
      position: relative;
      width: 1.3rem;
      height: 1.475rem;
      cursor: pointer;

      &:hover {
        .img {
          width: 1.3rem;
          height: 1.3rem;
        }
      }
      .img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }

      .big {
        width: 1.3rem;
        height: 1.3rem;
      }

      .text {
        color: #fff;
        text-align: center;
        position: absolute;
        width: 100%;
        font-size: 0.15rem;
        bottom: 0.1125rem;
        text-shadow: 0.05rem 0.0875rem 0.025rem #ad928b;
      }
    }
  }
}
.page_list_wrapper:hover .page_list {
  transform: translateY(0);
}
</style>
