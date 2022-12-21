<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 4.75rem" title="风险数据列表">
        <div class="fx_list">
          <div class="item item1">
            <div class="img">上报</div>
            <img class="arrow" src="@/assets/image/safe/arrow1.png" alt="" />
            <p class="text">车间风险点</p>
          </div>
          <div class="item item2">
            <p class="text">车间风险点</p>
            <img class="arrow" src="@/assets/image/safe/arrow2.png" alt="" />
            <div class="img">处理中</div>
          </div>
          <div class="item item3">
            <div class="img">已完成</div>
            <img class="arrow" src="@/assets/image/safe/arrow3.png" alt="" />
            <p class="text">车间风险点</p>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 7.125rem; margin-top: 0.25rem"
        title="风险源统计"
      >
        <div style="height: 0.65rem; width: 100%">
          <chart-define :chartOption="echart.seriesBar3()"></chart-define>
        </div>
        <div class="fx_total_list">
          <div class="item item1">
            <div class="text1"><span>高风险：</span><span>50%</span></div>
            <div class="text2"><span>中风险：</span><span>50%</span></div>
          </div>
          <div class="item item2">
            <div class="text1"><span>低风险：</span><span>50%</span></div>
            <div class="text2"><span>可接受：</span><span>50%</span></div>
          </div>
        </div>
        <div style="height: 4.125rem; width: 4.125rem">
          <chart-define
            :chartOption="echart.seriesline7()"
            :autoTooltip="true"
          ></chart-define>
        </div>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk
        style="height: 12.15rem"
        title="隐患事件列表"
        more-text="查看全部"
        more-color="rgba(240, 176, 66, .5)"
        @moreClick="dialogTableVisible = true"
      >
        <mar-quee class="r_table">
          <template v-slot:thead>
            <table class="table" cellspacing="0">
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
              </colgroup>
              <thead>
                <tr class="th_tr">
                  <th class="th">序号</th>
                  <th class="th">隐患编号</th>
                  <th class="th">信息</th>
                  <th class="th">进度</th>
                </tr>
              </thead>
            </table>
          </template>
          <template v-slot:tbody>
            <table class="table tbody" cellspacing="0">
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
                <col width="25%" />
              </colgroup>
              <tbody>
                <tr
                  class="th_td"
                  v-for="(item, index) in dataList"
                  :key="item.text + index"
                >
                  <td class="td">{{ index + 1 }}</td>
                  <td class="td">{{ item.number }}</td>
                  <td class="td">{{ item.workStatus }}</td>
                  <td class="td">
                    <span v-if="item.status == 0" style="color: #ff2626"
                      >未处理</span
                    >
                    <span v-else-if="item.status == 1" style="color: #ff9a26"
                      >处理中</span
                    >
                    <span v-else>已处理</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </mar-quee>
      </card-chunk>
    </section>
    <mk-popup popupTitle="隐患事件列表" v-model="dialogTableVisible">
      <div class="popup_item_name thead">
        <div class="td">序号</div>
        <div class="td">隐患编号</div>
        <div class="td">信息</div>
        <div class="td">进度</div>
        <div class="td">隐患内容</div>
        <div class="td">隐患类型/等级</div>
        <div class="td">检查日期</div>
        <div class="td">状态</div>
      </div>
      <div style="overflow: auto; height: 365px">
        <div
          class="popup_item_name tbody"
          v-for="(item, index) in dataList"
          :key="item.time + index"
        >
          <div class="td">{{ index + 1 }}</div>
          <div class="td">{{ item.number }}</div>
          <div class="td">{{ item.workStatus ? "工作中" : "待机" }}</div>
          <div class="td">
            <span v-if="item.status == 0" style="color: #ff2626">未处理</span>
            <span v-else-if="item.status == 1" style="color: #ff9a26"
              >处理中</span
            >
            <span v-else>已处理</span>
          </div>
          <div class="td" style="text-align: left; flex: 2">
            {{ item.text }}
          </div>
          <div class="td">{{ item.grade }}</div>
          <div class="td">{{ item.time }}</div>
          <div class="td" :style="{ color: item.status ? '#fff' : '#FF2626' }">
            <div v-if="item.status == 0" class="wraing"></div>
            <div v-else class="success"></div>
          </div>
        </div>
      </div>
    </mk-popup>
  </div>
</template>

<script lang="ts" setup>
import { echart } from "@/unitls/chartOptions";
import MarQuee from "@/components/chart/MarQuee.vue";
import MkPopup from "@/components/chart/MkPopup.vue";
import { shallowRef, ref } from "vue";
const dialogTableVisible = ref(false);
const dataList = shallowRef([
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    text: "4/5号支架前梁不接顶",
    time: "2022-5-9",
    number: 21,
    status: 2,
  },
  {
    name: "李四",
    workStatus: 0,
    grade: "采煤/C级",
    text: "风机异常震动",
    time: "2022-5-9",
    number: 22,
    status: 1,
  },
  {
    name: "小红",
    workStatus: 0,
    text: "工作面140号支架护帮板卸载",
    grade: "采煤/C级",
    time: "2022-5-9",
    number: 24,
    status: 2,
  },
  {
    name: "小郑",
    text: "工作面140号支架护帮板卸载",
    workStatus: 1,
    grade: "采煤/C级",
    time: "2022-5-9",
    number: 26,
    status: 2,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    text: "风机异常震动",
    time: "2022-5-9",
    number: 28,
    status: 0,
  },
  {
    name: "张三",
    text: "4/5号支架前梁不接顶",
    workStatus: 1,
    time: "2022-5-9",
    grade: "采煤/C级",
    number: 30,
    status: 1,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    time: "2022-5-9",
    text: "风机异常震动",
    number: 36,
    status: 2,
  },
  {
    name: "张三",
    workStatus: 1,
    time: "2022-5-9",
    text: "工作面140号支架护帮板卸载",
    grade: "采煤/C级",
    number: 31,
    status: 1,
  },
  {
    name: "张三",
    time: "2022-5-9",
    text: "4/5号支架前梁不接顶",
    workStatus: 1,
    grade: "采煤/C级",
    number: 32,
    status: 0,
  },
  {
    name: "张三",
    workStatus: 1,
    text: "工作面140号支架护帮板卸载",
    grade: "采煤/C级",
    number: 33,
    time: "2022-5-9",
    status: 2,
  },
  {
    name: "张三",
    workStatus: 1,
    text: "4/5号支架前梁不接顶",
    grade: "采煤/C级",
    time: "2022-5-9",
    number: 34,
    status: 1,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    text: "风机异常震动",
    time: "2022-5-9",
    number: 1,
    status: 2,
  },
  {
    name: "张三",
    workStatus: 1,
    time: "2022-5-9",
    grade: "采煤/C级",
    text: "工作面140号支架护帮板卸载",
    number: 2,
    status: 0,
  },
  {
    name: "张三",
    time: "2022-5-9",
    text: "4/5号支架前梁不接顶",
    workStatus: 1,
    grade: "采煤/C级",
    number: 3,
    status: 2,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    text: "风机异常震动",
    time: "2022-5-9",
    number: 4,
    status: 1,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    time: "2022-5-9",
    text: "4/5号支架前梁不接顶",
    number: 5,
    status: 1,
  },
  {
    name: "张三",
    workStatus: 1,
    grade: "采煤/C级",
    time: "2022-5-9",
    text: "工作面140号支架护帮板卸载",
    number: 6,
    status: 0,
  },
  {
    name: "张三",
    time: "2022-5-9",
    grade: "采煤/C级",
    text: "工作面140号支架护帮板卸载",
    workStatus: 1,
    number: 7,
    status: 1,
  },
  {
    name: "张三",
    grade: "采煤/C级",
    text: "风机异常震动",
    time: "2022-5-9",
    workStatus: 1,
    number: 8,
    status: 1,
  },
  {
    name: "张三",
    grade: "采煤/C级",
    time: "2022-5-9",
    text: "4/5号支架前梁不接顶",
    workStatus: 1,
    number: 9,
    status: 1,
  },
  {
    name: "张三",
    time: "2022-5-9",
    grade: "采煤/C级",
    text: "工作面140号支架护帮板卸载",
    workStatus: 1,
    number: 10,
    status: 0,
  },
  {
    name: "张三",
    grade: "采煤/C级",
    workStatus: 1,
    text: "4/5号支架前梁不接顶",
    time: "2022-5-9",
    number: 11,
    status: 1,
  },
  {
    name: "韩大",
    grade: "采煤/C级",
    workStatus: 1,
    time: "2022-5-9",
    text: "风机异常震动",
    number: 12,
    status: 1,
  },
  {
    name: "王明",
    grade: "采煤/C级",
    time: "2022-5-9",
    workStatus: 1,
    text: "4/5号支架前梁不接顶",
    number: 13,
    status: 1,
  },
]);
</script>

<style scoped lang="less">
.fx_list {
  width: 100%;
  height: 100%;
  position: relative;
  .item {
    display: flex;
    align-items: center;
    position: absolute;
    color: #fff;
    .img {
      width: 1.575rem;
      height: 1.575rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 1.575rem;
    }
    .text {
      width: 106px;
      height: 0.55rem;
      font-size: 0.15rem;
      text-align: center;
      line-height: 0.55rem;
    }
    .arrow {
      width: 0.375rem;
      height: 0.375rem;
      margin: 0 0.075rem 0 0.0875rem;
    }

    &.item1 {
      left: 0.175rem;
      top: 0.1rem;
      .img {
        background: url("@/assets/image/safe/1.png") no-repeat center
          center/100% 100%;
      }
      .text {
        background: url("@/assets/image/safe/ipt1.png") no-repeat center/100%;
      }
    }
    &.item2 {
      left: 0.55rem;
      top: 1.4rem;
      .img {
        background: url("@/assets/image/safe/2.png") no-repeat center
          center/100% 100%;
      }
      .text {
        background: url("@/assets/image/safe/ipt2.png") no-repeat center/100%;
      }
    }
    &.item3 {
      left: 0.175rem;
      top: 2.5625rem;
      .img {
        background: url("@/assets/image/safe/3.png") no-repeat center
          center/100% 100%;
      }
      .text {
        background: url("@/assets/image/safe/ipt3.png") no-repeat center/100%;
      }
    }
  }
}
.fx_total_list {
  position: relative;
  width: 100%;
  .item {
    display: flex;
    justify-content: space-between;
    height: 0.55rem;
    width: 100%;
    text-align: center;
    line-height: 0.55rem;
    color: #fff;
    font-size: 0.15rem;
    .text1,
    .text2 {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 0.3rem;
    }
    &.item1 {
      .text1 {
        width: 50%;
        background: url("@/assets/image/safe/btn1.png") no-repeat center center /
          100% 100%;
      }
      .text2 {
        width: 50%;
        background: url("@/assets/image/safe/btn2.png") no-repeat center center /
          100% 100%;
      }
    }
    &.item2 {
      margin-top: 0.055rem;
      .text1 {
        width: 50%;
        background: url("@/assets/image/safe/btn3.png") no-repeat center center /
          100% 100%;
      }
      .text2 {
        width: 50%;
        background: url("@/assets/image/safe/btn4.png") no-repeat center center /
          100% 100%;
      }
    }
  }
}

.r_table {
  width: 100%;
  .tbody {
    position: absolute;
  }
  .table {
    width: 100%;
    .th,
    .td {
      font-size: 0.15rem;
      color: #ffffff;
      text-align: center;
    }

    .th {
      height: 0.6rem;
    }
    .td {
      height: 0.5375rem;
    }

    .th_tr {
      width: 100%;
      height: 0.6rem;
      background: url("@/assets/image/table_head_short.png") no-repeat center
        center / 100% 100%;
    }

    .th_td {
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
}

.popup_item_name {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
  text-align: center;
  margin: 0 27px;
  //   box-sizing: border-box;
  //   padding: 0 0.25rem;
  &.thead {
    color: #ff9a26;
    height: 48px;
    background: url("@/assets/image/table_head_long.png") no-repeat center /
      100% 100%;
  }
  &.tbody {
    color: #ffffff;
    height: 43px;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.23),
        rgba(0, 0, 0, 0)
      )
      no-repeat center bottom / 100% 1px;
  }
  .td {
    flex: 1;
    text-align: center;
  }

  .td:first-child {
    flex: 0 1 54px;
  }

  .td:last-child {
    flex: 0 1 86px;
  }
  .wraing,
  .success {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      position: absolute;
      background: #1a1b1e;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .wraing {
    background: linear-gradient(-30deg, #ff0000, transparent);
    box-shadow: 0px 0px 10px #ff0000;
  }

  .success {
    background: linear-gradient(-30deg, #00ff24, transparent);
    box-shadow: 0px 0px 10px #00ff24;
  }
}
</style>
