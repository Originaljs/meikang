<template>
  <div class="chunk">
    <div class="chunk_bg1"></div>
    <div class="chunk_bg"></div>
    <div class="chunk_bg1"></div>
    <div class="chunk_wrapper">
      <div class="chunk_title">
        <div class="arrow"></div>
        <div>
          <span>{{ title }}</span>
          <img
            :src="icon"
            alt=""
            v-if="icon"
            @click="emit('iconClick')"
            class="title_icon"
          />
          <div
            v-if="moreText"
            :style="{ color: moreColor }"
            @click="emit('moreClick')"
            class="more"
          >
            {{ moreText }}
          </div>
        </div>
      </div>
      <div class="chunk_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
  moreText: {
    type: String,
    default: "",
  },
  moreColor: {
    type: String,
    default: "#ffffff",
  },
});
const emit = defineEmits(["iconClick", "moreClick"]);
</script>

<style scoped lang="less">
.chunk {
  width: 4.375rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::after {
    content: "";
    width: 100%;
    left: 0;
    bottom: 0;
    flex: 0 0 0.0875rem;
    background: url("@/assets/image/chunk_bottom.png") no-repeat center bottom /
      100% 100%;
  }

  &::before {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    background: url("@/assets/image/chunk_top.png") no-repeat center top / 100%
      100%;
    flex: 0 0 0.0875rem;
  }
  .chunk_bg {
    width: 100%;
    height: calc(84% - 1.45rem);
    border-left: 0.025rem solid rgba(205, 115, 37, 0.6);
    border-right: 0.025rem solid rgba(205, 115, 37, 0.6);
    box-sizing: border-box;
    margin: 0.2rem 0;
  }
  .chunk_bg1 {
    width: 100%;
    height: 6%;
    border-left: 0.025rem solid rgba(205, 115, 37, 0.6);
    border-right: 0.025rem solid rgba(205, 115, 37, 0.6);
    box-sizing: border-box;
  }

  .chunk_wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0.175rem 0.125rem 0.1125rem;

    .chunk_title {
      width: 100%;
      height: 0.35rem;
      font-size: 0.225rem;
      font-weight: bold;
      line-height: 0.325rem;
      // flex: 0 0 .35rem;
      padding: 0 0.35rem;
      letter-spacing: 0.025rem;
      border-radius: 0.05rem;
      position: relative;
      color: #fff;
      background: linear-gradient(
        90deg,
        rgba(255, 130, 39, 0.2) 0%,
        rgba(0, 0, 2, 0) 100%
      );
      display: flex;
      justify-content: space-between;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(240, 176, 66, 0) 0%,
          rgba(240, 176, 66, 0.99) 48%,
          rgba(240, 176, 66, 0) 100%
        );
        width: 100%;
        left: 0;
      }

      .arrow {
        position: absolute;
        width: 0.225rem;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 0.05rem;
        background: radial-gradient(
          circle,
          rgba(240, 176, 66, 0),
          rgba(240, 176, 66, 0.2)
        );
        box-shadow: 0.025rem 0rem 0.1625rem 0rem rgba(240, 176, 66, 0.5),
          1px 0.025rem 0.0625rem 0rem rgba(255, 255, 255, 0.3) inset;
        &::before {
          content: "";
          display: block;
          border: 0.0625rem solid transparent;
          border-right: none;
          border-left-color: #ffffff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .title_icon {
        width: 18px;
        height: 18px;
        margin-left: 22px;
        vertical-align: center;
      }
      .more{
        font-size: .15rem;
        font-weight: 400;
        background: transparent;
        border: none;
        outline: none;
        color: #999;
      }
    }
    .chunk_content {
      flex: 1;
      padding-top: 0.125rem;
    }
  }
}
</style>
