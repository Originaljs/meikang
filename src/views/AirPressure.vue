<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 5.875rem" title="设备状态">
        <chart-define
          :chartOption="echart.seriesStatusBar()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 6.025rem; margin-top: 0.25rem"
        title="电压/电流监测"
      >
        <chart-define
          :chartOption="echart.seriesCandlestick()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 5.425rem" title="温度/流量监测">
        <chart-define
          :chartOption="echart.seriesLine4()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 6.425rem; margin-top: 0.25rem"
        title="水泵压力"
      >
        <div class="sbyl">
          <div
            v-for="item in sbList"
            :key="item.className"
            :class="[item.className]"
          >
            <div v-if="item.index" class="item_txt">
              {{ item.num % 2 < 1 ? "180pa" : "" }}
              <small>{{ item.index }}</small
              >{{ item.num % 2 > 0 ? "180pa" : "" }}
            </div>
            <img class="img" src="@/assets/image/fan/shuibeng.png" alt="" />
          </div>
          <div
            v-for="(item, index) in sbLineList"
            :key="item"
            :class="['sb_line', item]"
          >
            <img
              :src="index % 2 < 1 ? liugc : liug"
              alt=""
              :class="[index % 2 < 1 ? 'img_long' : 'img']"
            />
          </div>
        </div>
      </card-chunk>
    </section>
  </div>
</template>

<script setup lang="ts">
import { echart } from "@/unitls/chartOptions";
import { markRaw } from "vue";
import liugc from "@/assets/image/fan/liuxiang_long.png";
import liug from "@/assets/image/fan/liuxiang.png";
const sbList = markRaw([
  {
    className: "sb_item item1",
    index: "#1",
    num: 1,
  },
  {
    className: "sb_item item2",
    index: "#2",
    num: 2,
  },
  {
    className: "sb_item item3",
    index: "#3",
    num: 3,
  },
  {
    className: "sb_item item4",
    index: "#4",
    num: 4,
  },
  {
    className: "sb_item item5",
    index: "#5",
    num: 5,
  },
  {
    className: "sb_item item6",
  },
  {
    className: "sb_item item7",
    index: "#6",
    num: 6,
  },
]);
const sbLineList = markRaw([
  "line1",
  "line2",
  "line3",
  "line4",
  "line5",
  "line6",
]);
</script>

<style scoped lang="less">
.sbyl {
  position: relative;
  .sb_item {
    position: absolute;
    text-align: center;
    .img {
      width: 0.3875rem;
      height: 0.3875rem;
      margin: 0 auto;
      display: block;
    }
    .item_txt {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #ff9a26;
      font-weight: bold;
      font-size: 0.175rem;
      line-height: 0.275rem;
      box-sizing: border-box;
      & > small {
        color: #fff;
        font-size: 0.15rem;
        margin: 0 0.0875rem;
      }
    }
    &.item1 {
      left: 0.1375rem;
      top: 0.6rem;
      .item_txt {
        top: -0.35rem;
        margin-left: 0.125rem;
      }
    }
    &.item2 {
      right: 0.1375rem;
      top: 0.6rem;
      .item_txt {
        top: -0.35rem;
      }
    }
    &.item3 {
      right: 0.1375rem;
      top: 2.025rem;
      .item_txt {
        top: -0.35rem;
      }
    }
    &.item4 {
      left: 0.6625rem;
      top: 2.025rem;
      .item_txt {
        top: -0.35rem;
      }
    }
    &.item5 {
      left: 0.6625rem;
      top: 3.65rem;
      .item_txt {
        top: -0.35rem;
      }
    }
    &.item6 {
      right: 0.1375rem;
      top: 3.65rem;
    }
    &.item7 {
      right: 0.1375rem;
      top: 5.125rem;
      .item_txt {
        top: -0.35rem;
      }
    }
  }
  .sb_line {
    position: absolute;
    background: rgba(255, 213, 160, 0.2);
    overflow: hidden;
    .img {
      width: 0.175rem;
      height: 0.425rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      animation: t_b 3s linear infinite;
    }
    .img_long {
      width: 0.8625rem;
      height: 0.175rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: l_r 5s linear infinite;
    }
    &.line1 {
      top: 0.775rem;
      left: 0.4125rem;
      width: 3.35rem;
      height: 2px;
    }
    &.line2 {
      top: 0.8rem;
      right: 0.3375rem;
      width: 2px;
      height: 1.4125rem;
    }
    &.line3 {
      top: 2.2rem;
      left: 0.85rem;
      width: 2.925rem;
      height: 2px;
      .img_long {
        transform: translateY(-50%) rotate(180deg);
        animation: r_l 4s linear infinite;
      }
    }
    &.line4 {
      top: 2.225rem;
      left: 0.8375rem;
      width: 2px;
      height: 1.6125rem;
    }
    &.line5 {
      top: 3.825rem;
      left: 0.85rem;
      width: 2.925rem;
      height: 2px;
    }
    &.line6 {
      top: 3.85rem;
      right: 0.3375rem;
      height: 1.5rem;
      width: 2px;
    }
  }
}
@keyframes t_b {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
@keyframes l_r {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}

@keyframes r_l {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
  }
} 
</style>
