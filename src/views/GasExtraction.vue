<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 12.15rem" title="泵位总览">
        <div class="people">
          <img class="img" src="@/assets/image/gas/man.png" alt="" />
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="text_info">
            <div class="item">
              <p class="title">当前爆破员</p>
              <p class="name">徐建军</p>
            </div>
            <div class="item">
              <p class="title">当班检查员</p>
              <p class="name red">甘晓斌</p>
            </div>
          </div>
        </div>
        <div class="duty">
          <p class="tit">当班检查员</p>
          <div class="duty_list">
            <div class="duty_item">
              <p>总水泵效率</p>
              <p class="num">100%</p>
            </div>
            <div class="duty_item">
              <p>水泵运行时间</p>
              <p class="num">136548878 h</p>
            </div>
            <div class="duty_item">
              <p>电机功率</p>
              <p class="num">150 kw</p>
            </div>
            <div class="duty_item">
              <p>电机电压</p>
              <p class="num">220 V</p>
            </div>
          </div>
        </div>
        <div class="beng_box">
          <img class="img" src="@/assets/image/gas/beng_bg.png" alt="" />
          <div class="beng_post beng1">
            <img
              class="post_img"
              src="@/assets/image/gas/location.png"
              alt=""
            />
            <p class="beng_text">1#泵位</p>
          </div>
          <div class="beng_post beng2">
            <img
              class="post_img"
              src="@/assets/image/gas/location.png"
              alt=""
            />
            <p class="beng_text">2#泵位</p>
          </div>
          <div class="beng_post beng3">
            <img
              class="post_img"
              src="@/assets/image/gas/location.png"
              alt=""
            />
            <p class="beng_text">3#泵位</p>
          </div>
          <div class="beng_post beng4">
            <img
              class="post_img"
              src="@/assets/image/gas/location.png"
              alt=""
            />
            <p class="beng_text">4#泵位</p>
          </div>
          <div class="beng_post beng5">
            <img
              class="post_img"
              src="@/assets/image/gas/location.png"
              alt=""
            />
            <p class="beng_text">5#泵位</p>
          </div>
        </div>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 12.15rem" title="瓦斯泵状态总览">
        <div class="beng_list">
          <div class="item" v-for="item in bengList" :key="item.name">
            <div class="title">
              <div class="line"></div>
              <p>{{ item.name }}</p>
            </div>
            <div class="box">
              <div
                :class="['box_item', parseFloat(item.main) > 40 ? 'red' : '']"
              >
                <div class="circle"></div>
                <p>主控泵</p>
                <p class="data">{{ item.main }}℃</p>
              </div>
              <div
                :class="[
                  'box_item',
                  parseFloat(item.concentration) > 40 ? 'red' : '',
                ]"
              >
                <div class="circle"></div>
                <p>副控泵</p>
                <p class="data">{{ item.concentration }}℃</p>
              </div>
              <div class="box_item">
                <div class="circle"></div>
                <p>运行时间</p>
                <p class="data">{{ item.runTime }}min</p>
              </div>
              <div class="box_item">
                <div class="circle"></div>
                <p>瓦斯浓度</p>
                <p class="data">{{ item.concentration }}ml/m³</p>
              </div>
            </div>
          </div>
        </div>
      </card-chunk>
    </section>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
const bengList = shallowRef([
  {
    name: "1#瓦斯泵",
    main: "25",
    assistant: "25",
    runTime: "100",
    concentration: "50",
  },
  {
    name: "2#瓦斯泵",
    main: "25",
    assistant: "41.5",
    runTime: "100",
    concentration: "50",
  },
  {
    name: "3#瓦斯泵",
    main: "25",
    assistant: "25",
    runTime: "100",
    concentration: "50",
  },
  {
    name: "4#瓦斯泵",
    main: "25",
    assistant: "25",
    runTime: "100",
    concentration: "50",
  },
]);
</script>

<style scoped lang="less">
.people {
  width: 100%;
  height: 4rem;
  position: relative;
  margin-top: 0.0875rem;
  .img {
    width: 3.625rem;
    height: 4rem;
    position: absolute;
    left: -0.45rem;
    top: 0;
  }
  .circle1,
  .circle2 {
    width: 1.65rem;
    height: 0.325rem;
    background: url("@/assets/image/gas/annulus.png") no-repeat center
      center/100% 100%;
    position: absolute;
    left: 0.525rem;
    animation: bounce 4s linear infinite;
  }
  .circle1 {
    top: 0.925rem;
  }
  .circle2 {
    top: 1.925rem;
  }
  .text_info {
    position: absolute;
    right: 0.2rem;
    top: 40%;
    transform: translateY(-50%);
    .item {
      white-space: nowrap;
      margin: 0.35rem 0;
      .title {
        color: #fff;
        font-size: 0.2rem;
        line-height: 0.3rem;
      }
      .name {
        font-size: 0.3rem;
        font-weight: bold;
        line-height: 0.4rem;
        font-style: italic;
        color: #f0b042;
        text-shadow: 0rem 0rem 0.125rem #f0b042;
        &.red {
          color: #fd5332;
          text-shadow: 0rem 0rem 0.125rem #fd5332;
        }
      }
    }
  }
}
.duty {
  width: 100%;
  margin-top: -0.25rem;
  .tit {
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.3rem;
    margin-left: 0.2rem;
  }
  .duty_list {
    margin-top: 0.25rem;

    .duty_item {
      display: flex;
      justify-content: space-between;
      background: url("@/assets/image/gas/man_bg.png") no-repeat center center /
        100% 100%;
      width: 3.825rem;
      height: 0.625rem;
      box-sizing: border-box;
      padding: 0 0.25rem;
      margin-left: 0.15rem;
      color: #fff;
      line-height: 0.625rem;
      margin-bottom: 0.25rem;
      font-size: 0.175rem;
      .num {
        font-weight: bold;
        font-size: 0.25rem;
      }
    }
  }
}
.beng_box {
  width: 5.075rem;
  height: 4.125rem;
  position: relative;
  margin-left: -0.625rem;
  margin-top: -0.725rem;
  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .beng_post {
    width: 0.875rem;
    height: 0.925rem;
    position: absolute;
    .post_img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: post_bounce 4s linear infinite;
      //   display: block;
    }
    &.beng1 {
      left: 2.125rem;
      top: 2.9375rem;
      .post_img {
        width: 0.875rem;
        height: 0.875rem;
      }
    }
    &.beng2 {
      left: 0.8375rem;
      top: 2.275rem;
      .post_img {
        width: 0.825rem;
        height: 0.825rem;
      }
    }
    &.beng3 {
      left: 2.6375rem;
      top: 2rem;
      .post_img {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    &.beng4 {
      left: 3.925rem;
      top: 1.5875rem;
      .post_img {
        width: 0.625rem;
        height: 0.625rem;
      }
    }
    &.beng5 {
      left: 2.675rem;
      top: 1.2625rem;
      .post_img {
        width: 0.55rem;
        height: 0.55rem;
      }
    }
    .beng_text {
      color: #fff;
      font-size: 0.125rem;
      position: absolute;
      bottom: 0;
      text-align: center;
      left: 0.1rem;
    }
  }
}
.beng_list {
  margin: 0.0625rem;
  .item {
    margin-top: 0.1375rem;
    &:first-child {
      margin-top: 0;
    }
    .title {
      font-size: 0.2rem;
      line-height: 0.3rem;
      color: #ffd800;
      position: relative;
      padding-left: 0.4375rem;
      margin-left: -0.125rem;
      .line {
        width: 0.2875rem;
        height: 0.025rem;
        position: absolute;
        left: 0;
        top: 50%;
        background: rgba(255, 255, 255, 0.4);

        &::after,
        &::before {
          content: "";
          width: 0.05rem;
          height: 0.05rem;
          background: #ffd800;
          position: absolute;
          border-radius: 0.025rem;
          margin-top: -1px;
        }
        &::before {
          left: 0;
        }
        &::after {
          right: 0;
        }
      }
    }
    .box {
      width: 4rem;
      height: 2.3rem;
      background: url("@/assets/image/gas/card.png") no-repeat center
        center/100% 100%;
      margin-top: 0.0875rem;
      box-sizing: border-box;
      padding: 0.05rem 0.0625rem 0rem 0.15rem;
      .box_item {
        position: relative;
        height: 0.55rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 0.175rem;
        color: #fff;
        line-height: 0.55rem;
        box-sizing: border-box;
        padding: 0 0.25rem 0 0.2125rem;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            #fff7e9,
            rgba(0, 0, 0, 0)
          )
          no-repeat center bottom/100% 1px;
        &:last-child {
          background: rgba(0, 0, 0, 0);
        }
        .data {
          font-size: 0.2rem;
        }
        .circle {
          position: absolute;
          width: 0.1125rem;
          height: 0.1125rem;
          border-radius: 50%;
          background: linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0),
            #ffd800,
            rgba(0, 0, 0, 0)
          );
          box-shadow: 0rem 0rem 0.0625rem #ffd800;
          top: 50%;
          left: -0.0625rem;
          padding: 1px;
          margin-top: -0.0625rem;
          box-sizing: border-box;
          &::after {
            content: "";
            display: block;
            width: 0.0875rem;
            height: 0.0875rem;
            background: #000;
            border-radius: 50%;
          }
        }
        &.red {
          .circle {
            background: linear-gradient(
              -45deg,
              rgba(0, 0, 0, 0),
              #ff0000,
              rgba(0, 0, 0, 0)
            );
            box-shadow: 0rem 0rem 0.0625rem #ff0000;
          }
          .data {
            color: #ff1313;
          }
        }
      }
    }
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes post_bounce {
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-50%, -60%);
  }
  50% {
    transform: translate(-50%, -50%);
  }
  75% {
    transform: translate(-50%, -40%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
