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
    }
};