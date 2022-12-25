<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk
        style="height: 3.175rem"
        title="煤仓仓位"
        more-text="煤量占比"
        more-color="#999999"
      >
        <chart-define
          :chartOption="echart.seriesBar1()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 2.425rem; margin-top: 0.25rem"
        title="电压/电流监测"
      >
        <div class="dydl_jc">
          <div class="dydl_left">
            <p class="numb">2</p>
            <p class="text">正在运行</p>
          </div>
          <div class="dydl_right">
            <div class="item">
              <span>西部皮带</span>
              <span><b>2.65</b>m/s</span>
            </div>
            <div class="item">
              <span>七采皮带</span>
              <span><b>2.65</b>m/s</span>
            </div>
            <div class="item">
              <span>南部配合皮带</span>
              <span><b>2.65</b>m/s</span>
            </div>
            <div class="item">
              <span>南部皮带</span>
              <span><b>2.65</b>m/s</span>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk style="height: 3.55rem; margin-top: 0.25rem" title="煤流运量">
        <chart-define
          :chartOption="echart.seriesLine5()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
      <card-chunk
        style="height: 2.225rem; margin-top: 0.25rem"
        title="皮带功率"
        more-text="单位：kw"
        more-color="#999999"
      >
        <chart-define
          :chartOption="echart.seriesPictorialBar1()"
          :autoTooltip="true"
        ></chart-define>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk style="height: 5.925rem" title="皮带速度">
        <div class="pdsd">
          <div
            v-for="(item, index) in speedList"
            :key="item.name + index"
            class="pdsd_item"
          >
            <div class="pdsd_text">
              <p :class="['text_value', index == 3 ? 'text_value_color' : '']">
                {{ item.speed }}M/s
              </p>
              <p class="text_name">{{ item.name }}</p>
            </div>
            <div
              :class="[
                'status',
                index === 0 ? 'bule' : index === 3 ? 'yellow' : 'red',
              ]"
            ></div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 5.725rem; margin-top: 0.25rem"
        title="故障信息"
        more-text="2022-04"
        more-color="#999999"
      >
        <mar-quee class="r_table">
          <template v-slot:thead>
            <table class="table" cellspacing="0">
              <colgroup>
                <col width="15%" />
                <col width="25%" />
                <col width="35%" />
                <col width="25%" />
              </colgroup>
              <thead>
                <tr class="th_tr">
                  <th class="th">序号</th>
                  <th class="th">设备名称</th>
                  <th class="th">原因</th>
                  <th class="th">时间</th>
                </tr>
              </thead>
            </table>
          </template>
          <template v-slot:tbody>
            <table class="table tbody" cellspacing="0">
              <colgroup>
                <col width="15%" />
                <col width="25%" />
                <col width="35%" />
                <col width="25%" />
              </colgroup>
              <tbody>
                <tr
                  class="th_tr"
                  v-for="(item, index) in dataList"
                  :key="item.name + index"
                >
                  <td class="td">{{ index + 1 }}</td>
                  <td class="td">{{ item.name }}</td>
                  <td class="td">{{ item.cause }}</td>
                  <td class="td" style="color: #ff9a26">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </mar-quee>
      </card-chunk>
    </section>
    <div
      :class="['fixed_bottom', showActive ? '' : 'active']"
      @click="
        off_on();
        showActive = !showActive;
      "
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { echart } from "@/unitls/chartOptions";
import { shallowRef, ref } from "vue";
import MarQuee from "@/components/chart/MarQuee.vue";
const showActive = ref(true);
const off_on = () => {
  if (showActive.value) {
    // intoBeltConveyor_3d()
  } else {
    // intoMinecartTransport_3d()
  }
};
const speedList = shallowRef([
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 1,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 2,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
  {
    name: "八采大皮1#",
    speed: "0.00",
    status: 0,
  },
]);
const dataList = shallowRef([
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "撕裂故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "冒烟故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "撕裂故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "冒烟故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "撕裂故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "冒烟故障",
    time: "17:00:00",
  },
  {
    name: "七采大皮",
    cause: "张力过大故障",
    time: "17:00:00",
  },
]);
</script>

<style scoped lang="less">
.dydl_jc {
  // position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 0.125rem;
  .dydl_left {
    width: 1.4rem;
    height: 1.15rem;
    background: url("@/assets/image/transport/ys.png") no-repeat center center /
      100% 100%;
    color: #ffffff;
    text-align: center;
    // line-height: 1.2;
    padding-top: 0.2rem;
    box-sizing: border-box;
    .numb {
      font-size: 0.275rem;
      font-style: oblique;
      font-weight: bold;
    }
    .text {
      font-size: 0.15rem;
      margin-top: 0.075rem;
      box-sizing: border-box;
    }
  }
  .dydl_right {
    flex: 1;
    margin-left: 0.3875rem;
    margin-right: 0.125rem;
    .item {
      //   width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 0.15rem;
      color: #fff;
      line-height: 0.45rem;
      b {
        font-size: 0.225rem;
        color: #ff9a26;
        margin-right: 0.0625rem;
      }
    }
  }
}
.pdsd {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.45rem 0.175rem;
  padding-top: 0.2rem;
  justify-content: center;
  .pdsd_item {
    color: #fff;
    width: 1.85rem;
    height: 0.875rem;
    background: url("@/assets/image/transport/pd.png") no-repeat center/100%
      100%;
    box-sizing: border-box;
    .pdsd_text {
      position: relative;
      padding-left: 0.5rem;
      padding-top: 0.09rem;
      line-height: 1.75;
      .text_name {
        font-size: 0.15rem;
        color: rgba(255, 255, 255, 0.6);
      }
      .text_value {
        font-size: 0.2rem;
        font-weight: bold;
      }
      .text_value_color {
        color: #ffa14d;
      }
    }
    .status {
      width: 0.1125rem;
      height: 0.1125rem;
      position: relative;
      right: -1.6rem;
      top: -0.55rem;
      border-radius: 50%;
    }
    .yellow {
      background: #fff834;
      box-shadow: 0rem 0rem 0.125rem #fff834;
    }
    .bule {
      background: #2ddfec;
      box-shadow: 0rem 0rem 0.125rem #2ddfec;
    }

    .red {
      background: #ff0202;
      box-shadow: 0rem 0rem 0.125rem #ff0202;
    }
  }
}

.r_table {
  width: 100%;
  .table {
    width: 100%;
    .th,
    .td {
      font-size: 0.15rem;
      color: #ffffff;
      text-align: center;
      height: 0.5375rem;
    }

    .th {
      color: #ff9a26;
      height: 0.6rem;
    }

    .th_tr {
      width: 100%;
      height: 0.6rem;
      background: url("@/assets/image/table_head_short.png") no-repeat center
        center / 100% 100%;
      background: linear-gradient(
          90deg,
          rgba(255, 247, 233, 0),
          rgba(255, 247, 233, 0.23),
          rgba(255, 247, 233, 0)
        )
        no-repeat center bottom / 100% 1px;
    }
    .wraing {
      width: 0.1125rem;
      height: 0.1125rem;
      background: #1a1b1e;
      border: 0.025rem solid;
      border-image: linear-gradient(-30deg, #ff0000) 10 10;
      border-radius: 50%;
    }

    .success {
      width: 0.1125rem;
      height: 0.1125rem;
      background: #1a1b1e;
      border: 0.025rem solid;
      border-image: linear-gradient(-30deg, #00ff24) 10 10;
      border-radius: 50%;
    }
  }
  .tbody {
    position: absolute;
  }
}
.fixed_bottom {
  width: 1.5125rem;
  height: 0.4625rem;
  background: url("@/assets/image/transport/pidai.png") no-repeat center / 100%;
  &.active {
    background: url("@/assets/image/transport/kuangche.png") no-repeat center /
      100%;
  }
}
</style>
