<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 12.1rem" title="泵位总览">
        <div class="earth"></div>
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
      ></card-chunk>
      <card-chunk
        style="height: 3.675rem; margin-top: 0.5rem"
        title="电机电压（右侧-牵引）"
      ></card-chunk>
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

.float-left {
  position: relative;
  color: #fff;
  font-size: 0.22rem;
  line-height: 0.3rem;
  top: 0.25rem;
}
</style>
