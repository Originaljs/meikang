<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 5.55rem" title="排水总量统计">
        <div class="total_box">
          <div class="item item1">
            <p>5000</p>
            <p class="title">累计用水(T）</p>
          </div>
          <div class="item item2">
            <p>52</p>
            <p class="title">本月用水(T）</p>
          </div>
        </div>
        <div class="duty_list">
          <div class="item">
            <p>总水泵效率</p>
            <p class="num">100%</p>
          </div>
          <div class="item">
            <p>水泵运行时间</p>
            <p class="num">136548878 h</p>
          </div>
          <div class="item">
            <p>电机功率</p>
            <p class="num">150 kw</p>
          </div>
          <div class="item">
            <p>电机电压</p>
            <p class="num">220 V</p>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 6.35rem; margin-top: 0.225rem"
        title="设备维修率"
      >
        <div class="btn_list">
          <div class="item">掘锚机JM41</div>
          <div class="item">掘锚机JM41</div>
          <div class="item">掘锚机JM41</div>
        </div>
        <div style="height: 4.875rem">
          <chart-define :chartOption="echart.seriesPie1()"></chart-define>
        </div>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 3.675rem" title="主电机功率">
        <div class="main_djgl">
          <div class="left">
            <div class="item">
              <p class="title">运行时间</p>
              <p class="data"><b class="yellow">27</b>Min</p>
            </div>
            <div class="item">
              <p class="title">关机时间</p>
              <p class="data"><b class="red">27</b>Min</p>
            </div>
            <div class="item">
              <p class="title">待机时间</p>
              <p class="data"><b class="blue">27</b>Min</p>
            </div>
          </div>
          <div class="right">
            <img
              class="img"
              src="@/assets/image/drainageSystem/dj.png"
              alt=""
            />
            <img class="circle" src="@/assets/image/gas/annulus.png" alt="" />
            <div class="text">1500KW</div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 4.05rem; margin-top: 0.2375rem"
        title="电机电压(v)"
      >
        <chart-define
          :chartOption="echart.seriesPictorialBar2()"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 3.925rem; margin-top: 0.2375rem"
        title="主水泵运行"
      >
        <chart-define
          :chartOption="echart.seriesBar2()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
    </section>
  </div>
</template>

<script setup lang="ts">
import { echart } from "@/unitls/chartOptions";
</script>

<style scoped lang="less">
.total_box {
  width: 100%;
  padding: 0.125rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  .item {
    width: 1.7rem;
    height: 1.7rem;
    text-align: center;
    font-size: 0.2rem;
    font-weight: bold;
    color: #fff;
    line-height: 1.7rem;
    // position: relative;

    &.item1 {
      background: url("@/assets/image/smartMining/display-pie-back1.png")
        no-repeat center center/100% 100%;
    }
    &.item2 {
      background: url("@/assets/image/smartMining/display-pie-back2.png")
        no-repeat center center/100% 100%;
    }
    .title {
      // width: 100%;
      font-size: 0.15rem;
      font-weight: 400;
      text-align: center;
      line-height: 0.25rem;
      position: relative;
      top: -0.5rem;
      left: 0.08rem;
      // left: 0;
    }
  }
}
.duty_list {
  width: 100%;
  margin-top: 0.125rem;
  margin-left: 0.2125rem;
  .item {
    display: flex;
    justify-content: space-between;
    width: 3.825rem;
    height: 0.625rem;
    background: url("@/assets/image/gas/man_bg.png") no-repeat center center /
      100% 100%;
    line-height: 0.625rem;
    color: #fff;
    font-size: 0.175rem;
    box-sizing: border-box;
    padding: 0 0.25rem;
    margin-bottom: 0.0625rem;
    .num {
      font-size: 0.25rem;
      font-weight: bold;
    }
  }
}
.btn_list {
  display: flex;
  margin-top: 0.35rem;
  justify-content: space-between;
  .item {
    background: url("@/assets/image/home/sb_ipt.png") no-repeat center center /
      100% 100%;
    color: #fff;
    width: 1.2rem;
    height: 0.3375rem;
    font-size: 0.15rem;
    text-align: center;
    font-weight: bold;
    line-height: 0.3375rem;
  }
}
.main_djgl {
  width: 100%;
  height: 100%;
  margin-top: 0.35rem;
  .left {
    margin-left: 0.25rem;
    .item {
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
        b {
          font-size: 0.3rem;
        }
        .yellow {
          color: #f0b042;
        }
        .red {
          color: #fd5332;
        }
        .blue {
          color: #42eef0;
        }
      }
    }
  }
  .right {
    width: 3.075rem;
    height: 2.6rem;
    position: absolute;
    box-sizing: border-box;
    margin-left: 0.25rem;
    top: 1rem;
    right: 0.2rem;
    // float: left;
    .img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .circle {
      top: 0.9625rem;
      left: 0.7rem;
      position: absolute;
      width: 1.65rem;
      height: 0.325rem;
      animation: bounce 4s linear infinite;
    }
    .text {
      color: #fff;
      position: absolute;
      right: 0;
      font-size: 0.15rem;
      &::before {
        content: "";
        width: 0.075rem;
        height: 0.075rem;
        border-radius: 50%;
        background: #62dc2c;
        box-shadow: 0rem 0rem 0.0625rem #62dc2c;
        position: absolute;
        left: -0.1rem;
        top: 0.1rem;
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
