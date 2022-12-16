<template>
  <div class="first_page">
    <div class="page_wrapper"></div>
    <div class="taizi"></div>
    <div class="zs"></div>
    <div class="title" @click="blankLink"></div>
    <div class="title1"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const blankLink = () => {
  const link = router.resolve({ name: "home" });
  window.open(link.href, "_blank");
};
</script>

<style scoped lang="less">
.first_page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: url("@/assets/image/first/page_bg.png") no-repeat center / 100%
    100%;
  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/image/first/遮罩.png") no-repeat center/100% 100%;
    z-index: 1;
  }

  &::after {
    opacity: 0.6;
  }
  .page_wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: url("@/assets/image/first/背景框.png") no-repeat center / 100%
      100%;
  }
  .taizi {
    width: 11.225rem;
    height: 3.425rem;
    position: absolute;
    left: 50%;
    top: 7.4875rem;
    z-index: 3;
    margin-left: -5.6125rem;
    background: url("@/assets/image/first/台子.png") no-repeat center/100% 100%;
    animation: tzdouce 8s linear infinite;
  }

  .zs {
    width: 11.225rem;
    height: 7.5rem;
    position: absolute;
    left: 50%;
    top: 3.4175rem;
    z-index: 3;
    margin-left: -5.6125rem;
    background: url("@/assets/image/first/装饰.png") no-repeat center / 100%
      100%;
  }

  .title {
    width: 7.925rem;
    height: 1.375rem;
    position: absolute;
    top: 3.575rem;
    left: 50%;
    background: url("@/assets/image/first/文字和框.png") no-repeat center/100%
      100%;
    z-index: 4;
    margin-left: -3.9625rem;
    cursor: pointer;
  }
  .title1 {
    width: 7.925rem;
    height: 1.375rem;
    position: absolute;
    top: 5.575rem;
    left: 50%;
    background: url("@/assets/image/first/文字和框 拷贝.png") no-repeat
      center/100% 100%;
    z-index: 4;
    margin-left: -3.9625rem;
    cursor: pointer;
  }
}
</style>
