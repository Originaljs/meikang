<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 12.1rem" title="泵位总览">
        <div class="earth">
          <div class="item item1">
            <div class="text">晋.105801</div>
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
          <div class="item item2">
            <div class="text">晋.105801</div>
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
          <div class="item item3">
            <div class="text">晋.105801</div>
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
          <div class="item item4">
            <div class="text">晋.105801</div>
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
        </div>
        <div class="cm_list">
          <div class="cm_item">
            <div class="title">1#采煤挖掘</div>
            <div class="box">
              <span>支架：#12894</span>
              <span>俯仰角：50°</span>
              <span>倾角：50°</span>
            </div>
          </div>
          <div class="cm_item">
            <div class="title">1#采煤挖掘</div>
            <div class="box">
              <span>支架：#12894</span>
              <span>俯仰角：50°</span>
              <span>倾角：50°</span>
            </div>
          </div>
        </div>
        <div>
          <div style="height: 3rem; width: 100%">
            <div class="float-left">采煤机滚筒轨迹</div>
            <chart-define
              :chartOption="echart.seriesLine1()"
              :autoTooltip="true"
            ></chart-define>
          </div>
        </div>
        <div>
          <div class="float-left">调高泵</div>
          <div style="height: 3rem; width: 100%">
            <chart-define
              :chartOption="echart.seriesLine6()"
              :autoTooltip="true"
            ></chart-define>
          </div>
        </div>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 3.675rem" title="实时矿压">
        <chart-define
          :chartOption="echart.serieslineR1()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 3.675rem; margin-top: 0.5rem"
        title="电机电压（左侧-牵引）"
      >
        <div class="display-pie-box">
          <div class="pie-back">
            <img
              src="@/assets/image/smartMining/display-pie-back1.png"
              alt=""
            />
            <p class="text_center">182A</p>
            <p class="text_bottom">当前电流</p>
          </div>
          <div class="text_list">
            <div class="item">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
            <div class="item">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
            <div class="item">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 3.675rem; margin-top: 0.5rem"
        title="电机电压（右侧-牵引）"
      >
        <div class="display-pie-box">
          <div class="pie-back">
            <img
              src="@/assets/image/smartMining/display-pie-back2.png"
              alt=""
            />
            <p class="text_center">182A</p>
            <p class="text_bottom">当前电流</p>
          </div>
          <div class="text_list">
            <div class="item item2">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
            <div class="item item2">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
            <div class="item item2">
              <p>A相电流：</p>
              <p>30.5A</p>
            </div>
          </div>
        </div>
      </card-chunk>
    </section>
  </div>
</template>

<script setup lang="ts">
import { echart } from "@/unitls/chartOptions";
</script>

<style scoped lang="less">
.earth {
  height: 3.6rem;
  margin: -0.125rem;
  position: relative;
  background: url("@/assets/image/smartMining/earth.png") no-repeat center
    center / 100% 100%;
  .item {
    position: absolute;
    .text {
      width: 1rem;
      height: 0.4rem;
      font-size: 0.15rem;
      color: #fff;
      text-align: center;
      line-height: 0.4rem;
      // position: relative;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        // z-index: -1;
        background: url("@/assets/image/smartMining/location.png") no-repeat
          center/100% 100%;
      }
    }
    .line1 {
      height: 1px;
      position: absolute;
      background: rgba(255, 255, 255, 0.6);
      top: 0.0625rem;
      left: calc(100% - 0.0375rem);
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 0.0625rem;
        height: 0.0625rem;
        border-radius: 0.0375rem;
        background: #ebab3e;
        box-shadow: 0rem 0rem 0.0625rem #ebab3e;
      }
    }
    .line2 {
      position: absolute;
      background: rgba(255, 255, 255, 0.6);
      height: 1px;
      //   transform-origin: 0 0;
      transform: rotate(60deg);
      top: 0.27rem;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 0.0625rem;
        height: 0.0625rem;
        border-radius: 0.0375rem;
        background: #ffffff;
        box-shadow: 0rem 0rem 0.0625rem #ffffff;
      }
    }
    &.item1 {
      left: 0.4rem;
      top: 0.3625rem;
      .line1 {
        width: 0.3125rem;
      }
      .line2 {
        width: 0.5rem;
        left: calc(100% + 0.16rem);
      }
    }
    &.item2 {
      top: 0.95rem;
      right: 0.0625rem;
      .text::before {
        transform: rotateY(180deg);
      }
      .line1 {
        width: 0.4375rem;
        left: -0.4rem;
        &::before {
          left: auto;
          right: 0;
        }
      }
      .line2 {
        width: 0.2rem;
        transform: rotate(120deg);
        left: -0.55rem;
        top: 0.15rem;
      }
    }
    &.item3 {
      top: 1.725rem;
      left: 0.05rem;
      .line1 {
        width: 0.35rem;
      }
      .line2 {
        width: 0.15rem;
        right: -0.42rem;
        top: 0.12rem;
      }
    }
    &.item4 {
      top: 2.05rem;
      right: 0.2125rem;
      .text::before {
        transform: rotateY(180deg);
      }
      .line1 {
        width: 0.6875rem;
        left: -0.65rem;
        &::before {
          left: auto;
          right: 0;
        }
      }
      .line2 {
        width: 0.2rem;
        transform: rotate(120deg);
        left: -0.8rem;
        top: 0.15rem;
      }
    }
  }
}
.cm_list {
  margin-top: -0.375rem;
  margin-left: 0.05rem;
  .cm_item {
    width: 100%;
    margin-bottom: 0.15rem;
    .title {
      font-size: 0.175rem;
      color: #fff;
      line-height: 0.275rem;
    }

    .box {
      width: 100%;
      height: 0.625rem;
      background: url("@/assets/image/smartMining/wj_bg.png") no-repeat center
        center/100% 100%;
      line-height: 0.625rem;
      color: #fff;
      box-sizing: border-box;
      padding: 0.175rem 0.275rem;
      line-height: 0.275rem;
      display: flex;
      justify-content: space-between;
    }
  }
}

.display-pie-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pie-back {
    width: 2rem;
    height: 2rem;
    position: relative;
    text-align: center;
    color: #fff;
    margin-top: -0.3rem;
    img {
      width: 100%;
    }
    .text_center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.225rem;
      font-weight: bold;
    }
    .text_bottom {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.4rem;
    }
  }
  .text_list {
    flex: 1;
    .item {
      background: url("@/assets/image/smartMining/display-text-back1.png")
        no-repeat center center/100% 100%;
      box-sizing: border-box;
      padding: 0.125rem 0.1rem 0.125rem 0.5rem;
      margin-bottom: 0.3rem;
      color: #fff;
      &.item2 {
        background: url("@/assets/image/smartMining/display-text-back2.png")
          no-repeat center center/100% 100%;
      }
    }
  }
}

.float-left {
  position: relative;
  color: #fff;
  font-size: 0.22rem;
  line-height: 0.3rem;
  top: 0.25rem;
}
</style>
