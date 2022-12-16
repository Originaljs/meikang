<template>
  <div class="header">
    <span class="title">瞰图智慧煤矿综合管控平台</span>
    <div class="right">
      <template v-if="weather == 'sunny'">
        <img src="@/assets/image/fine.png" alt="" class="weather_icon" />
        <p class="weather">晴</p>
      </template>
      <template v-else-if="weather == 'blizzard'">
        <img src="@/assets/image/blizzard.png" alt="" class="weather_icon" />
        <p class="weather">暴雪</p>
      </template>
      <template v-else-if="weather == 'cloudy'">
        <img src="@/assets/image/cloudy.png" alt="" class="weather_icon" />
        <p class="weather">多云</p>
      </template>
      <template v-else-if="weather == 'fog'">
        <img src="@/assets/image/fog.png" alt="" class="weather_icon" />
        <p class="weather">雾</p>
      </template>
      <template v-else>
        <img src="@/assets/image/rainstorm.png" alt="" class="weather_icon" />
        <p class="weather">暴雨</p>
      </template>
      <p class="time">{{ currentTime }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { formatterDate } from "@/unitls/unit";
const weather = ref("sunny");
const currentTime = ref<string | null>(null);
const timer = setInterval(() => {
  currentTime.value = formatterDate("Y年M月D日 h:m:s");
}, 1000);
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 0.875rem;
  box-sizing: border-box;
  font-size: 30px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0.125rem;

  .title {
    letter-spacing: 0.0625rem;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0.25rem;
    display: flex;
    margin-right: 0.95rem;
    .weather_icon {
      width: 0.375rem;
      height: 0.375rem;
      margin-right: 0.25rem;
    }

    .weather {
      font-size: 0.175rem;
      color: #ff9a26;
      line-height: 0.375rem;
      text-align: center;
    }
    .time {
      font-size: 0.175rem;
      color: #ffffff;
      margin-left: 0.4375rem;
      line-height: 0.375rem;
    }
  }
}
</style>
