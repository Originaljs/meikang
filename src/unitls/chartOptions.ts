import { hexToRgba } from '@/unitls/unit'
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
    seriesRadar() {
        const data = [{
            name: '1#机位',
            value: 60
        }, {
            name: '2#机位',
            value: 90
        }, {
            name: '3#机位',
            value: 82
        }, {
            name: '4#机位',
            value: 69
        }, {
            name: '5#机位',
            value: 22
        }]
        const data1 = [{
            name: '1#机位',
            value: 66
        }, {
            name: '2#机位',
            value: 80
        }, {
            name: '3#机位',
            value: 85
        }, {
            name: '4#机位',
            value: 50
        }, {
            name: '5#机位',
            value: 42
        }]
        const ahData = data.map(item => item.name);
        data.push(data[0])
        data1.push(data1[0])
        return {
            color: ['rgba(215, 234, 255, 1)', 'rgba(255, 51, 51, 1)'],
            tooltip: {
                show: true,
                trigger: 'axis',
                textStyle: {
                    fontSize: 12,
                }
            },
            legend: {
                bottom: '3%',
                itemWidth: 39,
                itemHeight: 7,
                icon: 'rect',
                itemStyle: {
                    borderWidth: 1,
                },
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            polar: {
                center: ['50%', '50%'],
                radius: '55%'
            },
            angleAxis: {
                type: 'category',
                data: ahData,
                boundaryGap: true,
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#ffffff',
                    align: 'center',
                    formatter: function (value: any) {
                        return value;
                    }
                }
            },
            radiusAxis: [{
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#ffffff',
                    align: 'right',
                    formatter: '{value}%'
                }
            }],
            series: [
                {
                    type: 'line',
                    data: data,
                    symbol: 'none',
                    coordinateSystem: 'polar',
                    name: '正常',
                    lineStyle: {
                        color: 'rgba(215, 234, 255, 1)',
                        width: 1
                    },
                    areaStyle: {
                        color: 'rgba(215, 234, 255, .3)'
                    },
                },
                {
                    type: 'line',
                    data: data1,
                    symbol: 'none',
                    coordinateSystem: 'polar',
                    name: '异常',
                    lineStyle: {
                        color: '#FF1E1E',
                        width: 1
                    },
                    areaStyle: {
                        color: 'rgba(255, 51, 51, .3)'
                    },
                }
            ]
        }
    },
    seriesbar() {
        var data = [{
            value: 3.1,
            name: 0
        }, {
            value: 2.6,
            name: 3
        }, {
            value: 1.9,
            name: 6
        }, {
            value: 2.3,
            name: 9
        }, {
            value: 2.8,
            name: 12
        }, {
            value: 1.6,
            name: 15
        }, {
            value: 2.2,
            name: 18
        }, {
            value: 1.9,
            name: 21
        }, {
            value: 1.3,
            name: 24
        }]
        return {
            grid: {
                top: '10%',
                left: '3%',
                bottom: '3%',
                right: '5%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
            },
            title: {
                right: '5%',
                top: '1%',
                text: '风速：m/s',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 400
                }
            },
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(255, 213, 160, 0)'
                            }, {
                                offset: 0.05,
                                color: 'rgba(255, 213, 160, 0)'
                            }, {
                                offset: 0.05,
                                color: 'rgba(255, 213, 160, .2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 213, 160, .2)'
                            }]
                        }
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                }
            }],
            xAxis: [{
                type: 'category',
                data: data.map(item => item.name),
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(255, 213, 160, 0)'
                            }, {
                                offset: 0.05,
                                color: 'rgba(255, 213, 160, 0)'
                            }, {
                                offset: 0.05,
                                color: 'rgba(255, 213, 160, .2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 213, 160, .2)'
                            }]
                        }
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                }
            }],
            series: [{
                type: 'bar',
                barWidth: 8,
                barGap: '-100%',
                name: '商品煤发运量',
                data: data,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 213, 160, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 213, 160, 1)'
                        }]
                    }
                },
            }, {
                type: 'pictorialBar',
                barWidth: 8,
                barGap: '-100%',
                z: 3,
                symbol: 'rect',
                symbolSize: [8, 1],
                symbolMargin: 2,
                tooltip: {
                    formatter: () => {
                        return ''
                    }
                },
                symbolRepeat: true,
                itemStyle: {
                    color: '#000000'
                },
                data: data,
            }]
        }
    },
    seriesline3() {
        var data1 = [{
            value: 750,
            name: 0,
        }, {
            value: 600,
            name: 3,
        }, {
            value: 600,
            name: 6,
        }, {
            value: 730,
            name: 9,
        }, {
            value: 550,
            name: 12,
        }, {
            value: 780,
            name: 15,
        }, {
            value: 800,
            name: 18,
        }, {
            value: 900,
            name: 21,
        }, {
            value: 760,
            name: 24,
        }]
        var data2 = [{
            value: 550,
            name: 0,
        }, {
            value: 400,
            name: 3,
        }, {
            value: 400,
            name: 6,
        }, {
            value: 530,
            name: 9,
        }, {
            value: 350,
            name: 12,
        }, {
            value: 580,
            name: 15,
        }, {
            value: 600,
            name: 18,
        }, {
            value: 700,
            name: 21,
        }, {
            value: 560,
            name: 24,
        }]
        var data3 = [{
            value: 450,
            name: 0,
        }, {
            value: 300,
            name: 3,
        }, {
            value: 300,
            name: 6,
        }, {
            value: 430,
            name: 9,
        }, {
            value: 250,
            name: 12,
        }, {
            value: 480,
            name: 15,
        }, {
            value: 500,
            name: 18,
        }, {
            value: 600,
            name: 21,
        }, {
            value: 460,
            name: 24,
        }]
        return {
            color: ['#FFD5A0', '#69A0CB', '#EB7272'],
            grid: {
                top: '15%',
                left: '3%',
                bottom: '3%',
                right: '5%',
                containLabel: true
            },
            legend: {
                top: '5%',
                itemWidth: 24,
                itemHeight: 5,
                icon: 'rect',
                textStyle: {
                    color: '#c0c0c0'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                }
            }],
            xAxis: [{
                type: 'category',
                data: data1.map(item => item.name),
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                }
            }],
            series: [{
                type: 'line',
                data: data1,
                name: '雷达',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    width: 1
                },
                itemStyle: {
                    borderWidth: 5,
                    borderColor: 'rgba(255, 213, 160, .2)'
                }
            }, {
                type: 'line',
                data: data2,
                name: '声响',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    width: 1
                },
                itemStyle: {
                    borderWidth: 5,
                    borderColor: 'rgba(105, 160, 203, .2)'
                }
            }, {
                type: 'line',
                data: data3,
                name: '遥测',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    width: 1
                },
                itemStyle: {
                    borderWidth: 5,
                    borderColor: 'rgba(235, 114, 114, .2)'
                }
            }]
        }
    },
    seriesStatusBar() {
        const data = [{
            name: '待机',
            value: 31
        }, {
            name: '关机',
            value: 19
        }, {
            name: '运行',
            value: 40
        }]
        const colors = ['#FE9A26', '#D9D9D9', '#256DCF']
        const data1: any = [];
        data.forEach((item, index) => {
            var color = {};
            switch (index) {
                case 0:
                    color = {
                        type: 'linear',
                        x: .8,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: hexToRgba(colors[index], 0)
                        }, {
                            offset: .2,
                            color: hexToRgba(colors[index], 0)
                        }, {
                            offset: 1,
                            color: hexToRgba(colors[index], .8)
                        }]
                    }
                    break;
                case 1:
                    color = {
                        type: 'linear',
                        x: .1,
                        y: 0,
                        x2: 0,
                        y2: .3,
                        colorStops: [{
                            offset: 0,
                            color: hexToRgba(colors[index], .4)
                        }, {
                            offset: 1,
                            color: hexToRgba(colors[index], 0)
                        }]
                    }
                    break;
                case 2:
                    color = {
                        type: 'linear',
                        x: .1,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: hexToRgba(colors[index], .8)
                        }, {
                            offset: .6,
                            color: hexToRgba(colors[index], 0)
                        }, {
                            offset: 1,
                            color: hexToRgba(colors[index], 0)
                        }]
                    }
            }
            data1.push({
                value: item.value,
                itemStyle: {
                    color
                },
                label: {
                    color: colors[index]
                }
            })
        })
        return {
            color: colors,
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            legend: {
                icon: 'circle',
                bottom: '10%',
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255,255,255,.5)'
                },
                textStyle: {
                    color: '#fff'
                }
            },
            polar: {
                center: ['50%', '40%'],
                radius: '70%'
            },
            angleAxis: {
                type: 'category',
                boundaryGap: true,
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        type: 'dotted'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                axisLabel: {
                    show: false
                }
            },
            radiusAxis: [{
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                min: 0,
                max: 100,
                splitNumber: 5,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }],
            series: [
                {
                    type: 'pie',
                    center: ['50%', '40%'],
                    startAngle: 135,
                    radius: '70%',
                    z: 2,
                    label: {
                        fontSize: 12,
                        formatter: '{c}%'
                    },
                    labelLine: {
                        length: 5,
                        length2: 8,
                        lineStyle: {
                            color: '#fff',
                            type: 'dotted'
                        }
                    },
                    data: data1,
                },
                {
                    type: 'pie',
                    center: ['50%', '40%'],
                    radius: '4%',
                    z: 1,
                    data: data,
                    label: {
                        show: false
                    },
                    emphasis: {
                        disabled: true
                    }
                },
                {
                    type: 'pie',
                    center: ['50%', '40%'],
                    data: [1],
                    z: 3,
                    radius: '5%',
                    label: {
                        show: false
                    },
                }
            ]
        }
    },
    seriesCandlestick() {
        const data = [{
            name: '1#',
            value: [40, 116, 30, 126]
        }, {
            name: '2#',
            value: [40, 98, 30, 108]
        }, {
            name: '3#',
            value: [60, 118, 50, 128]
        }, {
            name: '4#',
            value: [16, 90, 6, 100]
        }];
        const data1 = [{
            name: '1#',
            value: [68, 130, 58, 140]
        }, {
            name: '2#',
            value: [68, 110, 50, 120]
        }, {
            name: '3#',
            value: [90, 118, 80, 128]
        }, {
            name: '4#',
            value: [45, 105, 35, 115]
        }];
        function renderItem(params: any, api: any) {
            // 下影线开始坐标
            var openLinePoint = api.coord([params.dataIndex, api.value(2)]);
            // 矩形开始坐标
            var openBarPoint = api.coord([params.dataIndex, api.value(1)]);
            // 矩形结束坐标
            var closeBarPoint = api.coord([params.dataIndex, api.value(0)]);
            // 上影线结束坐标
            var closeLinePoint = api.coord([params.dataIndex, api.value(3)]);
            var style = api.style({
                fill: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: hexToRgba(api.visual('color'), 1)
                    }, {
                        offset: .5,
                        color: hexToRgba(api.visual('color'), 0)
                    }, {
                        offset: 1,
                        color: hexToRgba(api.visual('color'), 1)
                    }]
                },
                stroke: api.visual('color')
            });
            return {
                type: 'group',
                children: [
                    {
                        type: 'rect',
                        shape: {
                            x: openBarPoint[0] - (params.seriesIndex ? -12 : 12),
                            y: openBarPoint[1],
                            width: 20,
                            height: closeBarPoint[1] - openBarPoint[1]
                        },
                        style: style
                    },
                    {
                        type: 'line',
                        shape: {
                            x1: openLinePoint[0] + 10 - (params.seriesIndex ? -12 : 12),
                            y1: openLinePoint[1],
                            x2: closeBarPoint[0] + 10 - (params.seriesIndex ? -12 : 12),
                            y2: closeBarPoint[1]
                        },
                        style: api.style({
                            stroke: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: hexToRgba(api.visual('color'), 0)
                                }, {
                                    offset: 1,
                                    color: hexToRgba(api.visual('color'), 1)
                                }]
                            }
                        })
                    },
                    {
                        type: 'line',
                        shape: {
                            x1: openBarPoint[0] + 10 - (params.seriesIndex ? -12 : 12),
                            y1: openBarPoint[1],
                            x2: closeLinePoint[0] + 10 - (params.seriesIndex ? -12 : 12),
                            y2: closeLinePoint[1]
                        },
                        style: api.style({
                            stroke: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: hexToRgba(api.visual('color'), 0)
                                }, {
                                    offset: 1,
                                    color: hexToRgba(api.visual('color'), 1)
                                }]
                            }
                        })
                    }
                ]
            };
        }
        return {
            color: ['#FF9000', '#FFD633'],
            tooltip: {
                tirgger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: data.map(item => item.name),
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)'
                }
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                top: '3%',
                right: '0%',
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '电压（V）',
                type: 'custom',
                renderItem: renderItem,
                dimensions: ['低', '高'],
                encode: {
                    x: 0,
                    y: [0, 1],
                    tooltip: [0, 1]
                },
                barWidth: 21,
                data,
            },
            {
                name: '电流（A）',
                type: 'custom',
                barWidth: 21,
                dimensions: ['低', '高'],
                encode: {
                    x: 0,
                    y: [0, 1],
                    tooltip: [0, 1]
                },
                renderItem: renderItem,
                data: data1
            }
            ]
        }
    },
    seriesLine4() {
        const data = [{
            name: '1#',
            value: 14
        }, {
            name: '2#',
            value: 12
        }, {
            name: '3#',
            value: 9
        }, {
            name: '4#',
            value: 17
        }, {
            name: '5#',
            value: 15
        }, {
            name: '6#',
            value: 24
        }]
        const data1 = [{
            name: '1#',
            value: 3100
        }, {
            name: '2#',
            value: 2500
        }, {
            name: '3#',
            value: 3800
        }, {
            name: '4#',
            value: 2900
        }, {
            name: '5#',
            value: 3500
        }, {
            name: '6#',
            value: 4500
        }]
        return {
            color: ['#FF9000', '#FFFFFF'],
            grid: {
                top: '15%',
                right: 16,
                left: '3%',
                bottom: '3%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: data.map(item => item.name),
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)'
                }
            },
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)'
                }
            }, {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)'
                }
            }],
            legend: {
                itemWidth: 8,
                itemHeight: 8,
                top: '3%',
                left: '0%',
                right: '0%',
                icon: 'circle',
                itemGap: 20,
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                type: 'line',
                name: '温度',
                smooth: true,
                symbol: 'none',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 144, 0, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 144, 0, 0)'
                        }]
                    }
                },
                lineStyle: {
                    width: 1
                },
                data
            }, {
                type: 'line',
                name: '流量',
                data: data1,
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255, 0)'
                        }]
                    }
                },
                yAxisIndex: 1
            }]
        }
    },
    seriesBar1() {
        const colors = ['#73B6FF', '#E94B2C', '#FD9E58', '#0150CF'];
        return {
            color: colors,
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '15%',
                left: '3%',
                right: '3%',
                bottom: '20%',
            },
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }],
            xAxis: [{
                type: 'category',
                data: ['1#仓', '2#仓', '3#仓', '4#仓'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: 14,
                    color: '#fff',
                    margin: 15
                }
            }],
            series: [{
                type: 'bar',
                name: '背景柱子',
                barWidth: 60,
                barGap: '-100%',
                tooltip: {
                    show: false
                },
                data: [{
                    value: 100,
                    itemStyle: {
                        color: 'rgba(115, 182, 255, .2)'
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: 'rgba(233, 75, 44, .2)'
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: 'rgba(253, 158, 88, .2)'
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: 'rgba(1, 80, 207, .2)'
                    }
                }]
            }, {
                type: 'bar',
                barWidth: 60,
                data: [{
                    name: '1#仓',
                    value: 30,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(119, 191, 255, .6)'
                            }, {
                                offset: 1,
                                color: 'rgba(102, 155, 255, .6)'
                            }]
                        }
                    }
                }, {
                    name: '2#仓',
                    value: 50,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(233, 75, 44, .6)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 132, 109, .6)'
                            }]
                        }
                    }
                }, {
                    name: '3#仓',
                    value: 10,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(253, 158, 88, .6)'
                            }, {
                                offset: 1,
                                color: 'rgba(252, 202, 101, .6)'
                            }]
                        }
                    }
                }, {
                    name: '4#仓',
                    value: 10,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0, 72, 203, .6)'
                            }, {
                                offset: 1,
                                color: 'rgba(14, 195, 255, .6)'
                            }]
                        }
                    }
                }]
            }, {
                type: 'pictorialBar',
                name: '顶部圆盘',
                symbol: 'circle',
                symbolSize: [60, 10],
                symbolPosition: 'end',
                symbolOffset: [0, '-50%'],
                tooltip: {
                    show: false
                },
                data: [{
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0, color: 'rgba(115, 182, 255, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(115, 182, 255, .4)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0, color: 'rgba(233, 75, 44, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(233, 75, 44, .4)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0, color: 'rgba(253, 173, 88, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(253, 158, 88, .4)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0, color: 'rgba(1, 80, 207, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(1, 80, 207, .4)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }]
            }, {
                type: 'pictorialBar',
                name: '中间圆盘',
                symbol: 'circle',
                symbolSize: [60, 10],
                symbolPosition: 'end',
                symbolOffset: [0, '-50%'],
                tooltip: {
                    show: false
                },
                data: [{
                    value: 30,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(119, 191, 255, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(102, 155, 255, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 50,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(233, 75, 44, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255, 132, 109, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 10,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(253, 158, 88, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(252, 202, 101, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 10,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(119, 191, 255, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(102, 155, 255, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }]
            }, {
                type: 'pictorialBar',
                name: '底部圆盘',
                tooltip: {
                    show: false
                },
                symbol: 'circle',
                symbolSize: [60, 10],
                symbolPosition: 'end',
                symbolOffset: [0, '-50%'],
                data: [{
                    value: 0,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(119, 191, 255, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(102, 155, 255, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 0,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(233, 75, 44, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255, 132, 109, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 0,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(253, 158, 88, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(252, 202, 101, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }, {
                    value: 0,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(119, 191, 255, .6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(102, 155, 255, .6)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }]
            }]
        }
    },
    seriesLine5() {
        const data1 = [{
            value: 22,
            name: '10'
        }, {
            value: 11,
            name: '20'
        }, {
            value: 29,
            name: '40'
        }, {
            value: 25,
            name: '60'
        }, {
            value: 42,
            name: '80'
        }, {
            value: 30,
            name: '100'
        }]
        const data3 = [{
            value: 30,
            name: '10'
        }, {
            value: 25,
            name: '20'
        }, {
            value: 42,
            name: '40'
        }, {
            value: 11,
            name: '60'
        }, {
            value: 29,
            name: '80'
        }, {
            value: 22,
            name: '100'
        }]
        const data2 = [{
            value: 29,
            name: '10'
        }, {
            value: 25,
            name: '20'
        }, {
            value: 22,
            name: '40'
        }, {
            value: 42,
            name: '60'
        }, {
            value: 11,
            name: '80'
        }, {
            value: 30,
            name: '100'
        }]
        const data4 = [{
            value: 30,
            name: '10'
        }, {
            value: 22,
            name: '20'
        }, {
            value: 42,
            name: '40'
        }, {
            value: 25,
            name: '60'
        }, {
            value: 29,
            name: '80'
        }, {
            value: 11,
            name: '100'
        }]
        return {
            color: ['#FF9A26', '#25EDFF', '#1DE43D', '#605BF9'],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '10%',
                right: '5%',
                left: '10%',
                bottom: '25%',
            },
            legend: {
                bottom: '0%',
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
                itemGap: 25,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            xAxis: [{
                type: 'category',
                data: data1.map(item => item.name),
                axisLine: {
                    lineStyle: {
                        color: '#3D3327'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#3D3327'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                }
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#3D3327'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                }
            }],
            series: [{
                type: 'line',
                name: '西部',
                symbol: 'none',
                data: data1,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#FF9A26'
                },
                smooth: true
            }, {
                type: 'line',
                symbol: 'none',
                name: '七采',
                data: data2,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#25EDFF'
                },
                smooth: true
            }, {
                type: 'line',
                symbol: 'none',
                name: '南部配仓',
                data: data3,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#1DE43D'
                },
                smooth: true
            }, {
                type: 'line',
                symbol: 'none',
                name: '南部',
                data: data4,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: '#1DE43D'
                },
                smooth: true
            }]
        }
    },
    seriesPictorialBar1() {
        return {
            grid: {
                top: '10%',
                left: '3%',
                right: '3%',
                bottom: '2%',
                containLabel: true
            },
            tooltip: {
            },
            xAxis: [{
                type: 'category',
                data: ['1H', '2H', '3H', '4H', '5H', '6H'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#808080'
                    }
                },
                axisLabel: {
                    color: '#999999',
                    fontSize: 12
                }
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                minInterval: 10,
                splitLine: {
                    lineStyle: {
                        color: '#808080'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#999999',
                    fontSize: 12
                }
            }],
            series: [{
                name: '功率',
                type: 'pictorialBar',
                // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255, 205, 145, 0.1)'
                        }, {
                            offset: .5,
                            color: 'rgba(255, 205, 145, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 205, 145, 0.1)'
                        }]
                    }
                },
                emphasis: {
                    itemStyle: {
                        opacity: 1
                    }
                },
                data: [30, 20, 25, 18, 12, 9, 2, 1],
                z: 10
            }]
        }
    },
    seriesPie1() {
        var colors = ['#EAD0A6', '#F25B32', '#6A9AE7', '#42EEF0', '#E93434', '#FF9A26', '#C33FD3'];
        var data = [{
            value: 96,
            name: '1#水泵',
        }, {
            value: 86,
            name: '2#水泵',
        }, {
            value: 76,
            name: '3#水泵',
        }, {
            value: 66,
            name: 'js#水泵',
        }, {
            value: 56,
            name: 'svg#水泵',
        }, {
            value: 46,
            name: '012#水泵',
        }, {
            value: 36,
            name: 'u50水泵',
        }]
        var data1: any = [];
        var data2: any = [];
        var data3: any = [];
        var data4: any = [];
        var data5: any = [];
        data.forEach((item, index) => {
            data1.push({
                ...item,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: colors[index],
                    color: hexToRgba(colors[index], .2)
                }
            })
            data2.push({
                ...item,
                value: item.value - 1,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: hexToRgba(colors[index], .4),
                    color: hexToRgba(colors[index], 0)
                }
            }, {
                value: 1,
                itemStyle: {
                    color: hexToRgba(colors[index], 0)
                }
            })
            data3.push({
                ...item,
                value: item.value - 2,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: hexToRgba(colors[index], .3),
                    color: hexToRgba(colors[index], 0)
                }
            }, {
                value: 2,
                itemStyle: {
                    color: hexToRgba(colors[index], 0)
                }
            })
            data4.push({
                ...item,
                value: item.value - 3,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: hexToRgba(colors[index], .2),
                    color: hexToRgba(colors[index], 0)
                }
            }, {
                value: 3,
                itemStyle: {
                    color: hexToRgba(colors[index], 0)
                }
            })
            data5.push({
                ...item,
                value: item.value - 4,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: hexToRgba(colors[index], .1),
                    color: hexToRgba(colors[index], 0)
                }
            }, {
                value: 4,
                itemStyle: {
                    color: hexToRgba(colors[index], 0)
                }
            })
        })
        return {
            legend: {
                bottom: '3%',
                itemWidth: 12,
                itemHeight: 12,
                itemStyle: {
                    borderWidth: 1
                },
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {

            },
            series: [{
                type: 'pie',
                center: ['50%', '40%'],
                startAngle: 90,
                radius: '80%',
                roseType: 'radius',
                emphasis: {
                    disabled: true
                },
                label: {
                    color: '#fff',
                    formatter: '{c}',
                    position: 'inside'
                },
                data: data1
            }, {
                type: 'pie',
                center: ['50%', '40%'],
                startAngle: 89.5,
                radius: '79.5%',
                roseType: 'radius',
                emphasis: {
                    disabled: true
                },
                label: {
                    show: false
                },
                data: data2
            }, {
                type: 'pie',
                center: ['50%', '40%'],
                startAngle: 89,
                radius: '79%',
                emphasis: {
                    disabled: true
                },
                label: {
                    show: false
                },
                roseType: 'radius',
                data: data3
            }, {
                type: 'pie',
                center: ['50%', '40%'],
                radius: '78.5%',
                startAngle: 88.5,
                emphasis: {
                    disabled: true
                },
                label: {
                    show: false
                },
                roseType: 'radius',
                data: data4
            }, {
                type: 'pie',
                center: ['50%', '40%'],
                radius: '78%',
                startAngle: 88,
                emphasis: {
                    disabled: true
                },
                label: {
                    show: false
                },
                roseType: 'radius',
                data: data5
            }]
        }
    },
    seriesPictorialBar2() {
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
                    data: ["1#", "2#", "3#", "js#", "svg", '012', 'U50'],
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
                    // name: "单位：万吨",
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
                    symbolMargin: 1,
                    data: [
                        {
                            value: 4120,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar1.png", import.meta.url).href,
                        },
                        {
                            value: 5423,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar2.png", import.meta.url).href,
                        },
                        {
                            value: 6854,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar3.png", import.meta.url).href,
                        },
                        {
                            value: 5500,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar4.png", import.meta.url).href,

                        },
                        {
                            value: 8745,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar5.png", import.meta.url).href,
                        },
                        {
                            value: 5500,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar6.png", import.meta.url).href,
                        },
                        {
                            value: 8745,
                            symbol: "image://" + new URL("@/assets/image/drainageSystem/bar7.png", import.meta.url).href,
                        }
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
                            value: 4120,
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
                            value: 5423,
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
                            value: 6854,
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
                            value: 5500,
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
                                            color: "rgba(234, 208, 166, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(234, 208, 166, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 8745,
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
                        {
                            value: 5500,
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
                                            color: "rgba(213, 233, 50, 0)",
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            value: 8745,
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
                                            color: "rgba(249, 147, 119, 1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(249, 147, 119, 0)",
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
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(0, 255, 114, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(21, 241, 253, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(0, 154, 252, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(234, 208, 166, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(146, 169, 211, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(213, 233, 50, .4)",
                            },
                        },
                        {
                            value: 10000,
                            itemStyle: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 1,
                                borderColor: "rgba(249, 147, 119, .4)",
                            },
                        },
                    ],
                },
            ],
        };
    },
    seriesBar2() {
        return {
            color: ['#FFD5A0', '#69A0CB'],
            grid: {
                bottom: "0%",
                top: "15%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            legend: {
                itemWidth: 24,
                itemHeight: 5,
                textStyle: {
                    color: '#C0C0C0',
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                data: [0, 3, 6, 9, 12, 15, 24],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C0C0C0',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 213, 160, .2)'
                    }
                }
            }],
            series: [{
                type: 'bar',
                barWidth: 6,
                name: '时间（min）',
                data: [1050, 400, 1200, 500, 600, 980, 700]
            }, {
                type: 'bar',
                barWidth: 6,
                name: '水量（T）',
                data: [800, 240, 1100, 700, 400, 1200, 800]
            }]
        }
    },
    seriesLine1() {
        return {
            color: ["#F08C04", "#B9D8FF"],
            grid: {
                bottom: "3%",
                top: "15%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: ["自动", "手动"],
                right: 0,
                icon: "rect",
                itemWidth: 6,
                itemHeight: 6,
                textStyle: {
                    color: "#FFF",
                },
            },
            yAxis: {
                type: "value",
                // name: "单位：万吨",
                nameTextStyle: {
                    color: "#FEFEFE",
                    fontSize: 12,
                },
                splitLine: {
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
                    show: false,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
            },
            xAxis: {
                type: "category",
                data: ["0", "10", "20", "30", "40", "100"],
                splitLine: {
                    show: false,
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
                    show: false,
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
                    name: "自动",
                    data: [340, 280, 290, 350, 410, 380],
                    symbol: "none",
                    smooth: true,
                    lineStyle: {
                        width: 1.5,
                        shadowColor: "#F08C04",
                        shadowBlur: 8,
                    },
                },
                {
                    type: "line",
                    name: "手动",
                    data: [240, 180, 250, 250, 310, 280],
                    symbol: "none",
                    smooth: true,
                    lineStyle: {
                        width: 1.5,
                        shadowColor: "#B9D8FF",
                        shadowBlur: 8,
                    },
                },
            ],
        };
    },
    seriesLine6() {
        return {
            color: ["#6186FF", "#FFFFFF"],
            grid: {
                bottom: "3%",
                top: "15%",
                left: "3%",
                right: "5%",
                containLabel: true,
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: ["温度", "电流"],
                right: 0,
                icon: "rect",
                itemWidth: 6,
                itemHeight: 6,
                textStyle: {
                    color: "#FFF",
                },
            },
            yAxis: {
                type: "value",
                // name: "单位：万吨",
                nameTextStyle: {
                    color: "#FEFEFE",
                    fontSize: 12,
                },
                splitLine: {
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
                    show: false,
                    lineStyle: {
                        color: "#FFD5A0",
                        opacity: 0.2,
                    },
                },
            },
            xAxis: {
                type: "category",
                data: ["0", "10", "20", "30", "40", "100"],
                splitLine: {
                    show: false,
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
                    show: false,
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
                    name: "温度",
                    data: [340, 280, 290, 350, 410, 380],
                    symbol: "none",
                    smooth: true,
                    lineStyle: {
                        width: 1.5,
                        shadowColor: "#6186FF",
                        shadowBlur: 8,
                    },
                },
                {
                    type: "line",
                    name: "电流",
                    data: [240, 180, 250, 250, 310, 280],
                    symbol: "none",
                    smooth: true,
                    lineStyle: {
                        width: 1.5,
                        shadowColor: "#FFFFFF",
                        shadowBlur: 8,
                    },
                },
            ],
        };
    },
    serieslineR1() {
        let data = [
            {
                name: "01",
                dataKey1: 72,
                dataKey2: 82,
                dataKey3: 92,
                dataKey4: 98,
            },
            {
                name: "02",
                dataKey1: 77,
                dataKey2: 87,
                dataKey3: 97,
                dataKey4: 103,
            },
            {
                name: "03",
                dataKey1: 82,
                dataKey2: 92,
                dataKey3: 102,
                dataKey4: 108,
            },
            {
                name: "04",
                dataKey1: 72,
                dataKey2: 82,
                dataKey3: 92,
                dataKey4: 98,
            },
        ];
        let legendData = ["业务数", "未登筹", "已登", "退件"]; //图例
        let dataNames: any = [],
            dataArr1: any = [],
            dataArr2: any = [],
            dataArr3: any = [],
            dataArr4: any = [];
        data.map((item) => {
            dataNames.push(item.name);
            dataArr1.push(item.dataKey1);
            dataArr2.push(item.dataKey2);
            dataArr3.push(item.dataKey3);
            dataArr4.push(item.dataKey4);
        });
        const colorList = ["#FF8E2B", "#ffffff", "#52AFFE", "#FF9846"];
        function hexToRgba(hex: any, opacity: any) {
            return `rgba(${parseInt("0x" + hex.slice(1, 3))},
            ${parseInt("0x" + hex.slice(3, 5))},
            ${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        let option = {
            grid: {
                top: "12%",
                left: "3%",
                right: "3%",
                bottom: "5%",
                containLabel: true,
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "line",
                },
            },
            legend: {
                left: "center",
                // top: 10,
                // icon: "roundRect",
                data: legendData,
                // itemGap: 25,
                itemWidth: 24,
                itemHeight: 8,
                // //图例文字样式
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                },
                // itemStyle: {
                //   borderWidth: 1,
                // },
            },
            xAxis: [
                {
                    type: "category",
                    axisTick: {
                        show: false,
                    },
                    interval: 1,
                    axisLabel: {
                        color: "#fff",
                        fontSize: 14,
                    },
                    axisLine: {
                        show: false,
                    },
                    boundaryGap: false,
                    data: dataNames,
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "",
                    axisLabel: {
                        color: "#fff",
                        fontSize: 14,
                    },
                    //坐标轴线样式
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)",
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)",
                        },
                    },
                },
            ],
            series: [
                {
                    name: "业务数",
                    data: dataArr1,
                    type: "line",
                    smooth: true, //true曲线; false折线
                    itemStyle: {
                        color: hexToRgba(colorList[0], 1), //改变折线点的颜色
                        opacity: 0.6,
                        lineStyle: {
                            color: hexToRgba(colorList[0], 1), //改变折线颜色
                            type: "solid",
                        },
                    },
                    areaStyle: {
                        //折线图颜色半透明
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorList[0], 0.3), // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorList[0], 0), // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                {
                    name: "未登筹",
                    data: dataArr2,
                    type: "line",
                    smooth: true, //true曲线; false折线
                    itemStyle: {
                        color: hexToRgba(colorList[1], 1), //改变折线点的颜色
                        opacity: 0.6,
                    },
                    lineStyle: {
                        color: hexToRgba(colorList[1], 1), //改变折线点的颜色
                        // color: hexToRgba(colorList[1], 1), //改变折线颜色
                        type: "solid",
                    },
                    areaStyle: {
                        //折线图颜色半透明
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorList[1], 0.3), // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorList[1], 0), // 0% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                {
                    name: "已登",
                    data: dataArr3,
                    type: "line",
                    smooth: true, //true曲线; false折线
                    itemStyle: {
                        color: hexToRgba(colorList[2], 1), //改变折线点的颜色
                        opacity: 0.6,
                    },
                    lineStyle: {
                        color: hexToRgba(colorList[2], 1), //改变折线点的颜色
                        // color: hexToRgba(colorList[1], 1), //改变折线颜色
                        type: "solid",
                    },
                    areaStyle: {
                        //折线图颜色半透明
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorList[2], 0.3), // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorList[2], 0), // 0% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                {
                    name: "退件",
                    data: dataArr4,
                    type: "line",
                    smooth: true, //true曲线; false折线
                    itemStyle: {
                        color: hexToRgba(colorList[3], 1), //改变折线点的颜色
                        opacity: 0.6,
                    },
                    lineStyle: {
                        color: hexToRgba(colorList[3], 1), //改变折线点的颜色
                        // color: hexToRgba(colorList[1], 1), //改变折线颜色
                        type: "solid",
                    },
                    areaStyle: {
                        //折线图颜色半透明
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: hexToRgba(colorList[3], 0.3), // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: hexToRgba(colorList[3], 0), // 0% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                    },
                },
            ],
        };
        return option;
    },
    seriesBar3() {
        return {
            grid: {
                top: 0,
                left: 45,
                right: 45,
                bottom: 0
            },
            yAxis: [{
                type: 'category',
                data: ['人为'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                },
                axisLine: {
                    show: false
                }
            }, {
                type: 'category',
                data: ['非人为'],
                axisLabel: {
                    color: '#fff',
                    fontSize: 12
                },
                axisLine: {
                    show: false
                }
            }],
            xAxis: [{
                type: 'value',
                min: -100,
                max: 100,
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '非人为',
                type: 'bar',
                barWidth: 12,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255, 154, 38, .2)',
                    borderRadius: [2, 0, 0, 2]
                },
                label: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                    verticalAlign: 'middle',
                    fontSize: 10,
                    formatter(params: any) {
                        return Math.abs(params.value) + '%'
                    }
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 1, color: 'rgba(255, 154, 38, .2)' // 0% 处的颜色
                        }, {
                            offset: 0, color: 'rgba(255, 154, 38, 1)' // 0% 处的颜色
                        }]
                    }
                },
                data: [20]
            }, {
                name: '人为',
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(196, 223, 255, .2)',
                    borderRadius: [2, 0, 0, 2]
                },
                barWidth: 12,
                barGap: '-100%',
                label: {
                    show: true,
                    position: 'left',
                    color: '#fff',
                    fontSize: 10,
                    verticalAlign: 'middle',
                    formatter(params: any) {
                        return Math.abs(params.value) + '%'
                    }
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: 'rgba(196, 223, 255, 0.2)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(196, 223, 255, 1)' // 0% 处的颜色
                        }]
                    }
                },
                data: [-80]
            }]
        }
    },
    seriesline7() {
        const data = [{
            name: '爆尘事故',
            value: 60
        }, {
            name: '其他事故',
            value: 90
        }, {
            name: '运输事故',
            value: 82
        }, {
            name: '水灾事故',
            value: 69
        }, {
            name: '瓦斯事故',
            value: 22
        }, {
            name: '火灾事故',
            value: 75
        }]
        const ahData = data.map(item => item.name);
        data.push(data[0])
        return {
            tooltip: {
                show: true,
                trigger: 'axis',
                textStyle: {
                    fontSize: 12,
                }
            },
            polar: {
                center: ['50%', '50%'],
                radius: '55%'
            },
            angleAxis: {
                type: 'category',
                data: ahData,
                boundaryGap: true,
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                axisLabel: {
                    fontSize: 12,
                    color: '#ffffff',
                    align: 'center',
                    formatter: function (value: any, index: any) {
                        return data[index].value + '%' + '\n' + value;
                    }
                }
            },
            radiusAxis: [{
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    fontSize: 10,
                    color: '#ffffff',
                    align: 'right',
                    formatter: '{value}%'
                }
            }],
            series: [
                {
                    type: 'line',
                    data: data,
                    symbol: 'none',
                    coordinateSystem: 'polar',
                    name: '申请数量',
                    lineStyle: {
                        color: 'rgba(215, 234, 255, 1)',
                        width: 1
                    },
                    areaStyle: {
                        color: 'rgba(215, 234, 255, .3)'
                    },
                }
            ]
        }
    }
};