<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 5.55rem" title="排水总量统计"></card-chunk>
      <card-chunk
        style="height: 6.35rem; margin-top: 0.225rem"
        title="设备维修率"
      >
        <chart-define :chartOption="echart.seriesPie1()"></chart-define>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 3.675rem" title="主电机功率"></card-chunk>
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

<style scoped lang="less"></style>
