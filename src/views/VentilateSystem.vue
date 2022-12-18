<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk title="主电机功率" style="height: 3.425rem">
        <div class="main_dj">
          <div class="dj_left">
            <img src="@/assets/image/ventilate/dj.png" alt="" class="img" />
            <img
              src="@/assets/image/ventilate/annulus.png"
              alt=""
              class="circle"
            />
            <div class="dj_text">运<br />行<br />正<br />常</div>
          </div>
          <div class="dj_right">
            <div class="dj_right_item">
              <p class="title">整机电流</p>
              <p class="data"><b class="yellow">220</b>A</p>
            </div>
            <div class="dj_right_item">
              <p class="title">整机电压</p>
              <p class="data"><b class="red">220</b>V</p>
            </div>
            <div class="dj_right_item">
              <p class="title">运行速度</p>
              <p class="data"><b class="blue">80</b>R /h</p>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk title="温度监测" style="height: 4.15rem; margin-top: 0.25rem">
        <div class="wdjc_list">
          <div class="item" v-for="item in monitorList" :key="item.title">
            <div class="title">{{ item.title }}</div>
            <div :class="['valueText', item.color]">
              <div :style="{ width: item.Percentage }" class="progress">
                <div class="label">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk title="震动频率" style="height: 4.15rem; margin-top: 0.2rem">
        <chart-define
          :chartOption="echart.seriesRadar()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk title="变频器电流" style="height: 3.675rem">
        <div class="bp_content">
          <div class="bp_left">
            <img
              src="@/assets/image/smartMining/display-pie-back1.png"
              alt=""
            />
            <div class="text_cneter">182A</div>
            <div class="text_bottom">当前电流</div>
          </div>
          <div class="bp_right">
            <div class="bp_right_item">
              <span class="bp_right_text">主电路</span
              ><span class="circle"></span>
            </div>
            <div class="bp_right_item red">
              <span class="bp_right_text">整流器</span
              ><span class="circle"></span>
            </div>
            <div class="bp_right_item">
              <span class="bp_right_text">逆变器</span
              ><span class="circle"></span>
            </div>
            <div class="bp_right_item">
              <span class="bp_right_text">平波回路</span
              ><span class="circle"></span>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        title="时域分析"
        style="height: 4.05rem; margin-top: 0.2375rem"
      >
        <chart-define
          :chartOption="echart.seriesbar()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        title="频谱分析"
        style="height: 3.925rem; margin-top: 0.2375rem"
      >
        <chart-define
          :chartOption="echart.seriesline3()"
          :autoTooltip="true"
        ></chart-define
      ></card-chunk>
    </section>
  </div>
</template>

<script setup lang="ts">
import { markRaw } from "vue";
import { echart } from "@/unitls/chartOptions";
const monitorList = markRaw([
  {
    title: "电机非驱动...",
    value: "35℃",
    Percentage: "35%",
    color: "white",
  },
  {
    title: "电机驱动测...",
    value: "65℃",
    Percentage: "65%",
    color: "red",
  },
  {
    title: "风机风门开...",
    value: "21.4℃",
    Percentage: "21.4%",
    color: "white",
  },
  {
    title: "模拟液压油...",
    value: "21℃",
    Percentage: "21%",
    color: "white",
  },
  {
    title: "液压油温度...",
    value: "44.4℃",
    Percentage: "44.4%",
    color: "yellow",
  },
]);
</script>

<style scoped lang="less">
.main_dj {
  width: 100%;
  height: 100%;
  position: relative;
  .dj_left {
    width: 3.525rem;
    height: 2.625rem;
    position: absolute;
    left: -0.125rem;
    top: 0.4875rem;
    .img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .circle {
      width: 2.1rem;
      height: 0.525rem;
      top: 0.6125rem;
      left: 0.5375rem;
      position: absolute;
      animation: bounce 4s linear infinite;
    }
    .dj_text {
      position: absolute;
      left: 0.1625rem;
      color: #fff;
      top: -0.1125rem;
      font-size: 0.15rem;
      padding-top: 0.125rem;
      line-height: 0.25rem;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 0.075rem;
        height: 0.075rem;
        background: #62dc2c;
        box-shadow: 0rem 0rem 0.0625rem #62dc2c;
        border-radius: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .dj_right {
    position: absolute;
    top: 0.35rem;
    left: 3.0125rem;
    .dj_right_item {
      margin-bottom: 0.15rem;
      color: #fff;

      .title {
        font-size: 0.2rem;
        line-height: 0.3rem;
      }
      .data {
        font-size: 0.125rem;
        font-weight: bold;
        font-style: italic;
        .yellow {
          color: #f0b042;
          text-shadow: 0px 0px 5px #f0b042;
        }
        .red {
          color: #fd5332;
          text-shadow: 0px 0px 5px #fd5332;
        }
        .blue {
          color: #42eef0;
          text-shadow: 0px 0px 5px #42eef0;
        }
        b {
          font-size: 0.3rem;
        }
      }
    }
  }
}
.wdjc_list {
  margin-top: 0.05rem;
  .item {
    display: flex;
    width: 100%;
    height: 0.4rem;
    align-items: center;
    margin: 0.25rem 0;
    .title {
      color: #fff;
      font-size: 0.15rem;
      width: 1.125rem;
    }
    .valueText {
      flex: 1;
      height: 100%;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 50%;
        position: absolute;
        right: 0.075rem;
        top: 0.2rem;
      }

      .progress {
        position: absolute;
        bottom: 0.05rem;
        left: 0;
        height: 0.25rem;
        .label {
          position: absolute;
          left: 100%;
          color: #fff;
          font-size: 0.15rem;
          line-height: 0.25rem;
          margin-left: 0.0625rem;
        }
      }
      &.white {
        background: url("@/assets/image/ventilate/t_bg2.png") no-repeat center /
          100%;
        .progress {
          background: rgba(220, 220, 220, 0.3);
          box-shadow: 0rem 0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2)
              inset,
            0rem -0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2);
        }
        &::after {
          background: #55e54a;
        }
      }
      &.red {
        background: url("@/assets/image/ventilate/t_bg.png") no-repeat center /
          100%;
        .progress {
          background: rgba(188, 0, 0, 0.3);
          box-shadow: 0rem 0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2)
              inset,
            0rem -0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2);
        }
        &::after {
          background: #ff2f2f;
        }
      }
      &.yellow {
        background: url("@/assets/image/ventilate/t_bg3.png") no-repeat center /
          100%;
        .progress {
          background: rgba(200, 150, 0, 0.3);
          box-shadow: 0rem 0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2)
              inset,
            0rem -0.0375rem 0.0875rem 0rem rgba(255, 255, 255, 0.2);
        }
        &::after {
          background: #fde128;
        }
      }
    }
  }
}

.bp_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .bp_left {
    width: 2rem;
    height: 2rem;
    position: relative;
    margin-right: 0.1rem;

    & > img {
      width: 100%;
    }
    .text_cneter {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(50% - 0.15rem);
      text-align: center;
      color: #fff;
      font-size: 0.225rem;
      font-weight: bold;
    }

    .text_bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.275rem;
      text-align: center;
      color: #fff;
    }
  }

  .bp_right {
    flex: 1;

    .bp_right_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: url("@/assets/image/ventilate/aq_bg1.png") no-repeat center
        center / 100% 100%;
      height: 0.3125rem;
      padding: 0 0.1875rem 0 0.375rem;
      margin-top: 0.3rem;
      .circle {
        width: 0.095rem;
        height: 0.095rem;
        border-radius: 50%;
        background: #ffe822;
        box-shadow: 0rem 0rem 0.0625rem #ffe822;
      }
      .bp_right_text {
        color: #fff;
      }
      &.red {
        background: url("@/assets/image/ventilate/aq_bg2.png") no-repeat center
          center/100% 100%;
        .circle {
          background: #f00412;
          box-shadow: 0rem 0rem 0.0625rem #f00412;
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
    transform: translateY(-0.0625rem);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0.0625rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
