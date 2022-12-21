<template>
  <div class="wrapper">
    <section class="left">
      <card-chunk style="height: 5.375rem" title="人员在岗状态">
        <div class="ryzg">
          <div class="ry_info">
            <p class="item item1">
              <span>人员在岗：</span><span><b>580</b>人</span>
            </p>
            <p class="item item2">
              <span>请假人员：</span><span><b>50</b>人</span>
            </p>
          </div>
          <div class="ryzg_img">
            <img class="img" src="@/assets/image/staff/guandao.png" alt="" />
            <div class="text jinshang">井上：<b>200</b>人</div>
            <div class="text yunshu">运输道：<b>200</b>人</div>
            <div class="text jinxia">井下：<b>200</b>人</div>
          </div>
        </div>
      </card-chunk>
      <card-chunk
        style="height: 2.475rem; margin-top: 0.25rem"
        title="技术人员分布"
      >
        <div class="jsry">
          <div class="total_people">
            <img class="img" src="@/assets/image/staff/total_num.png" alt="" />
            <p class="num">8745</p>
            <p class="title">矿区总人数</p>
          </div>
          <div class="people_category">
            <div class="category">
              <span>技术人员：</span><span class="text"><b>54</b>人</span>
            </div>
            <div class="category">
              <span>管理人员：</span><span class="text"><b>54</b>人</span>
            </div>
          </div>
        </div>
      </card-chunk>
      <card-chunk style="height: 3.75rem; margin-top: 0.25rem" title="调度电话">
        <div class="phone">
          <div class="item">
            <p>值班室：</p>
            <p class="data">03/2705612</p>
          </div>
          <div class="item">
            <p>作业频道：</p>
            <p class="data">1视频</p>
          </div>
          <div class="item">
            <p>运输频道：</p>
            <p class="data">2视频</p>
          </div>
        </div>
      </card-chunk>
    </section>
    <section class="right">
      <card-chunk
        style="height: 12.1rem"
        title="人员信息"
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
                  <th class="th">姓名</th>
                  <th class="th">位置</th>
                  <th class="th">当班情况</th>
                  <th class="th">定位信号</th>
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
                  class="td_tr"
                  v-for="(item, index) in dataList"
                  :key="item.name + index"
                >
                  <td class="td">{{ item.name }}</td>
                  <td class="td">{{ item.location }}</td>
                  <td class="td">{{ item.workStatus ? "工作中" : "请假" }}</td>
                  <td
                    class="td"
                    :style="{ color: item.status ? '#fff' : '#FF2626' }"
                  >
                    {{ item.status ? "正常" : "丢失" }}
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </mar-quee>
      </card-chunk>
    </section>
    <mk-popup popupTitle="人员信息" v-model="dialogTableVisible">
      <div class="pop_table thead">
        <div class="th">序号</div>
        <div class="th">姓名</div>
        <div class="th">编号</div>
        <div class="th">位置</div>
        <div class="th">当班情况</div>
        <div class="th">定位信号</div>
      </div>
      <div style="overflow: auto; height: 4.5625rem">
        <div
          class="pop_table tbody"
          v-for="(item, index) in dataList"
          :key="item.location + index"
        >
          <div class="th">{{ index + 1 }}</div>
          <div class="th">{{ item.name }}</div>
          <div class="th">{{ item.number }}</div>
          <div class="th">{{ item.location }}</div>
          <div class="th">
            {{
              item.workStatus == 1
                ? "工作中"
                : item.workStatus == -1
                ? "调休"
                : "请假"
            }}
          </div>
          <div class="th" :style="{ color: item.status ? '#fff' : '#FF2626' }">
            {{ item.status ? "正常" : "丢失" }}
          </div>
        </div>
      </div>
    </mk-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from "vue";
import MarQuee from "@/components/chart/MarQuee.vue";
import MkPopup from "@/components/chart/MkPopup.vue";
const dialogTableVisible = ref(false);
const dataList = shallowRef([
  {
    name: "刘婷婷",
    location: "地面管理",
    workStatus: 0,
    number: 21,
    status: 0,
  },
  {
    name: "李四",
    location: "爆破区",
    workStatus: 1,
    number: 22,
    status: 1,
  },
  {
    name: "小红",
    location: "井下",
    workStatus: 1,
    number: 24,
    status: 1,
  },
  {
    name: "小郑",
    location: "井下",
    workStatus: 1,
    number: 26,
    status: 1,
  },
  {
    name: "王飞",
    location: "地面管理",
    workStatus: 0,
    number: 28,
    status: 0,
  },
  {
    name: "甘小兵",
    location: "爆破区",
    workStatus: 1,
    number: 30,
    status: 1,
  },
  {
    name: "张飞",
    location: "井下",
    workStatus: 1,
    number: 36,
    status: 1,
  },
  {
    name: "李逵",
    location: "井下",
    workStatus: 1,
    number: 31,
    status: 1,
  },
  {
    name: "王飞",
    location: "地面管理",
    workStatus: 0,
    number: 32,
    status: 0,
  },
  {
    name: "小红",
    location: "爆破区",
    workStatus: 1,
    number: 33,
    status: 1,
  },
  {
    name: "张三",
    location: "井下",
    workStatus: 1,
    number: 34,
    status: 1,
  },
  {
    name: "甘小兵",
    location: "井下",
    workStatus: 1,
    number: 1,
    status: 1,
  },
  {
    name: "张三",
    location: "地面管理",
    workStatus: 0,
    number: 2,
    status: 0,
  },
  {
    name: "小郑",
    location: "爆破区",
    workStatus: 1,
    number: 3,
    status: 1,
  },
  {
    name: "小红",
    location: "井下",
    workStatus: 1,
    number: 4,
    status: 1,
  },
  {
    name: "李逵",
    location: "井下",
    workStatus: 1,
    number: 5,
    status: 1,
  },
  {
    name: "甘小兵",
    location: "地面管理",
    workStatus: 0,
    number: 6,
    status: 0,
  },
  {
    name: "张飞",
    location: "爆破区",
    workStatus: 1,
    number: 7,
    status: 1,
  },
  {
    name: "韩大",
    location: "井下",
    workStatus: 1,
    number: 8,
    status: 1,
  },
  {
    name: "王明",
    location: "井下",
    workStatus: 1,
    number: 9,
    status: 1,
  },
  {
    name: "张三",
    location: "地面管理",
    workStatus: -1,
    number: 10,
    status: 0,
  },
  {
    name: "甘小兵",
    location: "爆破区",
    workStatus: 1,
    number: 11,
    status: 1,
  },
  {
    name: "韩大",
    location: "井下",
    workStatus: 1,
    number: 12,
    status: 1,
  },
  {
    name: "王明",
    location: "井下",
    workStatus: 1,
    number: 13,
    status: 1,
  },
]);
</script>
<style scoped lang="less">
.ryzg {
  width: 100%;
  .ry_info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.1625rem;
    .item {
      height: 0.55rem;
      display: flex;
      justify-content: space-between;
      text-align: center;
      line-height: 0.55rem;
      color: #fff;
      font-size: 0.15rem;
      //   box-sizing: border-box;
      padding: 0 0.25rem;
    }
    .item2 {
      background: url("@/assets/image/staff/zg_ipt_bg.png") no-repeat center
        center/100% 100%;
    }
    .item1 {
      background: url("@/assets/image/staff/zg_ipt_bg_active.png") no-repeat
        center center/100% 100%;
    }
    b {
      font-size: 0.225rem;
    }
  }
  .ryzg_img {
    margin-top: 0.45rem;
    width: 100%;
    height: 3.4125rem;
    position: relative;
    .img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .text {
      font-size: 0.175rem;
      color: #fff;
      font-weight: bold;
      position: absolute;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0rem 0rem 0.125rem 0.075rem #ffffff;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 0.025rem;
        border-top: 1px #fff dotted;
      }
    }
    .jinshang {
      top: 0.6125rem;
      left: 1.2rem;
      padding-left: 1.575rem;
      &::after {
        width: 1.475rem;
      }
    }
    .yunshu {
      top: 1.25rem;
      left: 1.625rem;
      padding-left: 0.925rem;
      &::after {
        width: 0.825rem;
      }
    }
    .jinxia {
      top: 2.275rem;
      left: 2.0875rem;
      padding-left: 0.65rem;
      &::after {
        width: 0.55rem;
      }
    }
    b {
      font-size: 0.3rem;
      color: #ff9a26;
    }
  }
}
.jsry {
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
  .total_people {
    width: 1.55rem;
    height: 1.1rem;
    .img {
      width: 100%;
    }
    .num {
      color: #ff9a26;
      text-align: center;
      position: absolute;
      top: 1rem;
      left: 0.6rem;
      font-size: 0.25rem;
    }
    .title {
      font-size: 0.15rem;
      color: #fff;
      text-align: center;
    }
  }
  .people_category {
    margin-left: 0.05rem;

    .category {
      width: 2.5rem;
      height: 0.65rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.15rem;
      line-height: 0.65rem;
      color: #fff;
      background: url("@/assets/image/staff/tj_ipt_bg.png") no-repeat center
        center/100% 100%;
      box-sizing: border-box;
      padding: 0 0.35rem;
      .text {
        color: #ff9a26;
      }
      b {
        font-size: 0.225rem;
        text-shadow: 0rem 0rem 0.075rem rgba(255, 154, 38, 0.6);
      }
    }
  }
}
.phone {
  width: 100%;
  background: url("@/assets/image/staff/phone.png") no-repeat center center/100%
    100%;
  position: relative;
  height: 2.575rem;
  margin-top: 0.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 0.5375rem;
    font-size: 0.175rem;
    color: #fff;
    box-sizing: border-box;
    padding: 0 0.4rem;
    background: linear-gradient(
        90deg,
        rgba(255, 247, 233, 0),
        rgba(255, 247, 233, 0.23),
        rgba(255, 247, 233, 0)
      )
      no-repeat center bottom / 100% 1px;
    line-height: 0.5375rem;
    .data {
      font-size: 0.225rem;
      font-weight: bold;
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
    .th_tr {
      width: 100%;
      height: 0.6rem;
      background: url("@/assets/image/table_head_short.png") no-repeat center
        center / 100% 100%;
    }
    .th,
    td {
      font-size: 0.15rem;
      color: #ffffff;
      text-align: center;
    }
    .th {
      height: 0.6rem;
    }

    .td {
      height: 0.5335rem;
    }
    .td_tr {
      background: linear-gradient(
          90deg,
          rgba(255, 247, 233, 0),
          rgba(255, 247, 233, 0.23),
          rgba(255, 247, 233, 0)
        )
        no-repeat center bottom / 100% 1px;
    }
  }
}
.pop_table {
  display: flex;
  justify-content: space-between;
  font-size: 0.175rem;
  text-align: center;
  align-items: center;
  margin: 0 0.3375rem;
  &.thead {
    color: #ff9a26;
    height: 0.6rem;
    background: url("@/assets/image/table_head_long.png") no-repeat center
      center/100% 100%;
  }
  &.tbody {
    color: #ffffff;
    height: 0.5375rem;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.23),
        rgba(0, 0, 0, 0)
      )
      no-repeat center bottom / 100% 1px;
  }
  &.th {
    flex: 1;
    text-align: center;
    margin: auto auto;
  }
  &.th:first-child {
    flex: 0 1 0.675rem;
  }
  &.th:last-child {
    flex: 0 1 1.075rem;
  }
}
</style>
