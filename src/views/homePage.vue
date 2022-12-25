<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk
        style="height: 3.175rem"
        title="安全生产"
        more-text="起：2020-05-12"
      >
        <div class="aqsc_day">
          <div class="day_left">{{ 1154 }}</div>
          <div class="day_right">
            <p class="right_tit">安全生产总天数</p>
            <p><span class="em">1154</span>天</p>
          </div>
        </div>
        <div class="sbwx">设备维修</div>
        <div class="sbwx_list">
          <p class="sbwx_item">掘锚机JM41</p>
          <p class="sbwx_item">掘锚机JM41</p>
          <p class="sbwx_item">掘锚机JM41</p>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 2.425rem; margin-top: 0.25rem"
        title="生产产量"
      >
        <div class="sccl">
          <div class="sccl_item ym">
            <div class="num">500</div>
            <div class="ipt">原煤（万吨）</div>
          </div>
          <div class="sccl_item spm">
            <div class="num">62314</div>
            <div class="ipt">原煤（万吨）</div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 2.95rem; margin-top: 0.25rem"
        title="月度产量统计"
      >
        <chart-define
          :chartOption="echart.seriesLine()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk style="height: 2.85rem; margin-top: 0.25rem" title="全景矿场">
        <mk-video :src="vd"></mk-video>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 3.675rem" title="安全检测">
        <chart-define :chartOption="echart.seriesPictorialBar()"></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 3.675rem; margin-top: 0.75rem"
        title="商品煤发运量"
      >
        <chart-define :chartOption="echart.seriespie()"></chart-define>
      </card-chunk>
      <card-chunk style="height: 3.3rem; margin-top: 0.75rem" title="掘进统计">
        <chart-define
          :chartOption="echart.seriesLine2()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
    </section>
    <div class="fixed_bottom">
      <div :class="['fire', isFire ? 'active' : '']" @click="fireFun"></div>
      <div
        :class="['item', showDown ? '' : 'active']"
        @click="showDown = false"
      ></div>
      <div
        :class="['item1', showDown ? 'active' : '']"
        @click="showDown = true"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MkVideo from "@/components/MkVideo.vue";
import { echart } from "@/unitls/chartOptions";
import vd from "@/assets/video/adfef780a85dc08e1c02f403f7c87479.mp4";
import { ref } from "vue";
const showDown = ref(false);
const isFire = ref(false);
const fireFun = () => {
  isFire.value = true;
  // fireFun_3d(true,() => {isFire.value = false})
};
const up_down = () => {
  if (showDown.value) {
    // mineFocusOut_3d()
  } else {
    // backMain_3d()
  }
};
</script>

<style scoped lang="less">
.aqsc_day {
  margin-top: 0.0625rem;
  display: flex;
  justify-content: space-around;
  .day_left {
    width: 1.9rem;
    height: 1.35rem;
    background: url("@/assets/image/home/day_num.png") no-repeat center
      center/100% 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 0.3rem;
    line-height: 1.25rem;
    box-sizing: border-box;
    margin-left: 0.1125rem;
  }
  .day_right {
    width: 2.175rem;
    height: 1.05rem;
    background: url("@/assets/image/home/day_num_bg.png") no-repeat center
      center / 100% 100%;
    text-align: center;
    color: #fff;
    font-size: 0.15rem;
    line-height: 0.3rem;
    padding: 0.25rem 0 0 0rem;
    margin: 0.25rem 0 0.05rem 0.0625rem;
    box-sizing: border-box;
    .right_tit {
      font-weight: bold;
      line-height: 1;
    }
    .em {
      color: #f0b042;
      font-size: 0.2125rem;
      text-shadow: 0rem 0rem 0.125rem #f0b042;
      margin-right: 0.1rem;
    }
  }
}

.sbwx {
  color: #fff;
  font-size: 0.175rem;
  margin-top: 0.175rem;
  line-height: 0.275rem;
}
.sbwx_list {
  display: flex;
  justify-content: space-between;
  margin-top: 0.075rem;
  .sbwx_item {
    color: #fff;
    font-size: 0.15rem;
    text-align: center;
    width: 1.2rem;
    height: 0.3375rem;
    line-height: 0.3375rem;
    background: url("@/assets/image/home/sb_ipt.png") no-repeat center
      center/100% 100%;
  }
}

.sccl {
  margin-top: 0.125rem;
  display: flex;
  justify-content: space-around;

  .sccl_item {
    color: #fff;

    .num {
      width: 1.175rem;
      height: 0.9625rem;
      text-align: center;
      font-size: 0.275rem;
      line-height: 0.9625rem;
      font-weight: bold;
      margin: 0 auto;
    }

    .ipt {
      width: 1.5rem;
      height: 0.425rem;
      text-align: center;
      line-height: 0.425rem;
      margin-top: 0.1875rem;
    }

    &.ym {
      .num {
        background: url("@/assets/image/home/yield_bg.png") no-repeat center
          center / 100% 100%;
      }
      .ipt {
        background: url("@/assets/image/home/yield_ipt.png") no-repeat center
          center / 100% 100%;
      }
    }

    &.spm {
      .num {
        background: url("@/assets/image/home/yield_bg1.png") no-repeat center
          center / 100% 100%;
      }
      .ipt {
        background: url("@/assets/image/home/yield_ipt1.png") no-repeat center
          center / 100% 100%;
      }
    }
  }
}
.fixed_bottom {
  .fire {
    width: 1.5125rem;
    height: 0.4625rem;
    margin-bottom: 0.1375rem;
    background: url("@/assets/image/home/end.png") no-repeat center / 100%;
    &.active {
      background: url("@/assets/image/home/start.png") no-repeat center / 100%;
    }
  }
  .item,
  .item1 {
    width: 1.725rem;
    height: 0.6rem;
  }

  .item {
    background: url("@/assets/image/home/井上区拷贝.png") no-repeat center
      center / 100% 100%;
    &.active {
      background: url("@/assets/image/home/井上区.png") no-repeat center center /
        100% 100%;
    }
  }
  .item1 {
    margin-top: 0.1375rem;
    background: url("@/assets/image/home/井下区.png") no-repeat center center /
      100% 100%;
    &.active {
      background: url("@/assets/image/home/井下区拷贝.png") no-repeat center
        center / 100% 100%;
    }
  }
}
</style>
