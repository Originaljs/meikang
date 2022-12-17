<template>
  <div class="video_wrapper">
    <video :src="src" class="video" controls ref="video"></video>
    <button class="play_button" @click="videoPlay" v-show="showPlay"></button>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
const props = defineProps({
  src: String,
});
const video = ref<HTMLVideoElement>(null!);
const showPlay = ref(true);
onMounted(() => {
  video.value.onplay = () => {
    showPlay.value = video.value.paused;
  };

  video.value.onpause = () => {
    showPlay.value = video.value.paused;
  };
});

watch(
  () => props.src,
  (src) => {
    video.value.load();
    video.value.pause();
  }
);
const videoPlay =()=>{
    video.value.play()
}
</script>

<style scoped lang="less">
.video_wrapper {
  width: 3.875rem;
  height: 2.075rem;
  background: rgba(77, 77, 77, 0.8);
  margin: 0 auto;

  .play_button {
    width: 0.35rem;
    height: 0.35rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background: url("@/assets/image/home/video_play.png") no-repeat center
      center/100% 100%;
    border: none;
  }

  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
