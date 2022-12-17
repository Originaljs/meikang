export const echart = {
    seriesLine() {
        return {
            color: "#FFD5A0",
            grid: {
                bottom: "3%",
                top: "20%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            tooltip: {
                trigger: "axis",
            },
            yAxis: {
                type: "value",
                name: "单位：万吨",
                nameTextStyle: {
                    color: "#FEFEFE",
                    fontSize: 12,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisLabel: {
                    color: "#ffffff",
                    fontSize: 12,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
            },
            xAxis: {
                type: "category",
                data: ["01月", "03月", "05月", "07月", "09月", "11月"],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisLabel: {
                    color: "#ffffff",
                    fontSize: 12,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                boundaryGap: false,
            },
            series: [
                {
                    type: "line",
                    name: "月度产量",
                    data: [340, 280, 290, 350, 410, 380],
                    symbol: "circle",
                    symbolSize: 9,
                    lineStyle: {
                        width: 1,
                    },
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(255, 213, 160, .4)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0,0,0,0)", // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            ],
        };
    },
    seriesPictorialBar() {
        const imgs = [
            new URL("@/assets/image/home/bar1.png", import.meta.url).href,
            new URL("@/assets/image/home/bar2.png", import.meta.url).href,
            new URL("@/assets/image/home/bar3.png", import.meta.url).href,
            new URL("@/assets/image/home/bar4.png", import.meta.url).href,
            new URL("@/assets/image/home/bar5.png", import.meta.url).href,
        ];
        return {
            grid: {
                bottom: "0%",
                top: "15%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            yAxis: [
                {
                    type: "category",
                    data: ["氧气", "甲烷", "二氧化碳", "一氧化碳", "其他"],
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "#ffffff",
                        fontSize: 12,
                    },
                },
                {
                    type: "category",
                    name: "单位：万吨",
                    nameGap: 5,
                    nameTextStyle: {
                        color: "#C0C0C0",
                        fontSize: 12,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    data: [50, 60, 80, 70, 90],
                    axisLabel: {
                        formatter: "{value}%",
                        color: "#ffffff",
                        fontSize: 12,
                    },
                },
            ],
            xAxis: {
                type: "value",
                show: false,
            },
            series: [
                {
                    type: "pictorialBar",
                    z: 2,
                    yAxisIndex: 0,
                    barGap: "-100%",
                    barWidth: 8,
                    symbolRepeat: "fixed",
                    symbolMargin: 0,
                    data: [
                        {
                            value: 50,
                            symbol: "image://" + new URL("@/assets/image/home/bar5.png", import.meta.url).href
                        },
                        {
                            value: 60,
                            symbol: "image://" + new URL("@/assets/image/home/bar4.png", import.meta.url).href
                        },
                        {
                            value: 80,
                            symbol: "image://" + new URL("@/assets/image/home/bar1.png", import.meta.url).href
                        },
                        {
                            value: 70,
                            symbol: "image://" + new URL("@/assets/image/home/bar2.png", import.meta.url).href
                        },
                        {
                            value: 90,
                            symbol: "image://" + new URL("@/assets/image/home/bar3.png", import.meta.url).href
                        },
                    ],
                    symbolSize: [8, 8],
                },
                {
                    type: "bar",
                    yAxisIndex: 0,
                    z: 1,
                    barWidth: 7,
                    data: [
                        {
                            value: 50,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(0, 255, 114, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 255, 114, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 60,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(21, 241, 253, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 255, 114, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 80,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(0, 154, 252, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 255, 114, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 70,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(213, 233, 50, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 255, 114, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 90,
                            itemStyle: {
                                color: {
                                    type: "linear",
                                    x: 1,
                                    y: 0,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(146, 169, 211, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 255, 114, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    type: "bar",
                    barGap: "-100%",
                    barWidth: 8,
                    z: 1,
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(0, 255, 114, .4)",
                            },
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(21, 241, 253, .4)",
                            },
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(0, 154, 252, .4)",
                            },
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(213, 233, 50, .4)",
                            },
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(146, 169, 211, .4)",
                            },
                        },
                    ],
                },
            ],
        };
    },
    seriespie() {
        return {
            color: [
                "RGBA(255, 176, 91, 1)",
                "RGBA(255, 238, 143, 1)",
                "RGBA(255, 255, 255, 1)",
            ],
            series: [
                {
                    type: "pie",
                    z: 2,
                    radius: ["40%", "55%"],
                    center: "50%",
                    data: [
                        {
                            value: 13,
                            name: "洗精煤",
                            label: {
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        color: "#fff",
                                    },
                                    b: {
                                        fontSize: 12,
                                        color: "rgba(168, 158, 93, 1)",
                                        fontWeight: "bold",
                                        lineHeight: 20,
                                        align: "center",
                                    },
                                },
                            },
                        },
                        {
                            value: 37,
                            name: "原煤",
                            label: {
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        color: "#fff",
                                    },
                                    b: {
                                        fontSize: 12,
                                        color: "rgba(255, 238, 143, 1)",
                                        fontWeight: "bold",
                                        lineHeight: 20,
                                        align: "center",
                                    },
                                },
                            },
                        },
                        {
                            value: 49,
                            name: "洗块煤",
                            label: {
                                rich: {
                                    a: {
                                        fontSize: 12,
                                        color: "#fff",
                                    },
                                    b: {
                                        fontSize: 12,
                                        color: "rgba(225, 188, 141, 1)",
                                        fontWeight: "bold",
                                        lineHeight: 20,
                                        align: "center",
                                    },
                                },
                            },
                        },
                    ],
                    selectedMode: "single",
                    select: {
                        disabled: false,
                        scale: true,
                        scaleSize: 10,
                    },
                    label: {
                        show: true,
                        color: "#fff",
                        textAlign: "center",
                        formatter: function (parm: any) {
                            return [`{a|${parm.name}}` + "\n" + `{b|${parm.value}万吨}`];
                        },
                    },
                },
                {
                    type: "pie",
                    z: 1,
                    radius: "65%",
                    emptyCircleStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 3,
                        borderType: [3, 7],
                        borderColor: "rgba(255, 213, 160, 1)",
                    },
                },
            ],
        };
    },
    seriesLine2() {
        return {
            color: "#FFD5A0",
            title: {
                text: "单位：m",
                right: "3%",
                top: "5%",
                textStyle: {
                    color: "#C0C0C0",
                    fontSize: 12,
                    fontWeight: 400,
                },
            },
            tooltip: {
                trigger: "axis",
            },
            grid: {
                bottom: "3%",
                top: "20%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisLabel: {
                    color: "#ffffff",
                    fontSize: 12,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
            },
            xAxis: {
                type: "category",
                data: ["01月", "03月", "05月", "07月", "09月", "11月"],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisLabel: {
                    color: "#ffffff",
                    fontSize: 12,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
                boundaryGap: false,
            },
            series: [
                {
                    type: "line",
                    name: "月度产量",
                    data: [3400, 2800, 2900, 3500, 4100, 3800],
                    symbol: "circle",
                    symbolSize: 9,
                    lineStyle: {
                        width: 1,
                    },
                    areaStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(255, 213, 160, .4)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0,0,0,0)", // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            ],
        };
    },
};