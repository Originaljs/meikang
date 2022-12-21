<template>
  <el-dialog custom-class="mk-popup" center :show-close="false">
    <template #title>
      <div class="title">
        <div class="left">{{ popupTitle }}</div>
        <div class="search" v-if="showSearch">
          <img class="icon" src="@/assets/image/search.png" alt="" />
          <el-input class="search-input" v-mode="input"></el-input>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref<any>(null);
const props = defineProps({
  popupTitle: String,
  showSearch: {
    type: Boolean,
    default: false,
  },
  dialogTableVisible: Boolean,
});
</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }
  .search {
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    .icon {
      position: absolute;
      width: 18px;
      height: 18px;
      top: 50%;
      margin-top: -9px;
      left: 10px;
    }
    .search-input {
      width: 394px;
      height: 35px;
      --el-input-hover-border-color: rgba(0, 0, 0, 0) !important;
      --el-input-bg-color: rgba(0, 0, 0, 0) !important;
      --el-input-border-color: rgba(0, 0, 0, 0) !important;
      --el-input-text-color: #ffffff;
      .el-input__wrapper {
        padding-left: 37px;
        border-radius: 10px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
