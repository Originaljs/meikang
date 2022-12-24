export type iconDataOpts = {
    position: number[],
    url: string,
    page: string,
    size: number[],
    resize?: number[],
    resetPosition?: number[]
    center?: number[]
    chlidUrl?: string
}
export const iconData: Array<iconDataOpts> = [
    // 首页图标
    { position: [-4468.09, 0, -146.61], url: "矿井区", page: 'main', size: [400, 400] },
    { position: [1291.02, 298.00, 890.86], url: "办公区", page: 'main', size: [400, 400] },
    { position: [862.12, 98.19, -9.88], url: "廊桥", page: 'main', size: [400, 400] },
    { position: [90.01, 293.91, -938.64], url: "廊桥", page: 'main', size: [400, 400] },
    { position: [-656.57, 140.43, -4.98], url: "廊桥", page: 'main', size: [400, 400] },
    { position: [-799.98, 70, -621.08], url: "清洗区", page: 'main', size: [400, 400] },
    { position: [-2438.62, 30, -933.09], url: "清洗区", page: 'main', size: [400, 400] },
    { position: [-743.77, 171.63, 1253.31], url: "运输区", page: 'main', size: [400, 400] },
    { position: [-32.35, 536.41, -1562.10], url: "蓄水罐", page: 'main', size: [400, 400] },
    { position: [105.35, 241.85, -18.16], url: "中转站", page: 'main', size: [400, 400] },
    { position: [1857.50, 35, -423.14], url: "压风机", page: 'main', size: [400, 400] },
    // 人员定位图标
    { position: [-188.61, 55.89, -75.96], url: "机头硐室", page: 'peopleLocal', size: [100, 100] },
    { position: [60.73, 47, 136.93], url: "警告", page: 'peopleLocal', size: [100, 100], resize: [0.63, 0.4], resetPosition: [0, 0, 0], center: [-0.3, -1.3], chlidUrl: '报警弹窗' },
    { position: [33.77, 43.16, -9.00], url: "洗涤硐室", page: 'peopleLocal', size: [100, 100] },
    { position: [137.07, 45.32, -136.53], url: "制冷硐室", page: 'peopleLocal', size: [100, 100] },
    { position: [-150.29, 61.73, 193.62], url: "主泵室", page: 'peopleLocal', size: [100, 100] },
    //生成空压机定位图标
    { position: [-339.81, 220, -192.15], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    { position: [-204.10, 220, -296.94], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    { position: [-42.26, 220, -191.57], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    { position: [129.83, 220, -296.65], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    { position: [253.21, 220, -190.58], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    { position: [407.62, 220, -295.03], url: "风压系统", page: 'airCompressor', size: [100, 100] },
    //生成安全检测图标
    { position: [-1279.52, 128.68, 1676.62], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [-1106.40, 134.09, 303.36], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [1142.15, 65.90, -842.97], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [2295.84, 165.83, 330.48], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [4149.94, 171.55, 246.39], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [4414.13, 33.46, -1127.22], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [-12.93, 536.41, -1574.66], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [-3083.24, 4.05, -158.80], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [-2393.16, 65.90, -1265.67], url: "摄像头", page: 'securityDetection', size: [200, 200], resize: [2.256, 1], resetPosition: [0, 0, 0], center: [1.2, 0], chlidUrl: '视频监控弹窗' },
    { position: [1351.71, 167, 345.64], url: "警告", page: 'securityDetection', size: [200, 200], resize: [0.509, 0.6], resetPosition: [0, 0, 0], center: [-0.17, -0.8], chlidUrl: '报警弹窗' },
    // 水泵图标
    { position: [-247.24, 98.81, -135.70], url: "water", page: 'waterPump', size: [100, 100] },
    { position: [-97.39, 98.81, -136.52], url: "water", page: 'waterPump', size: [100, 100] },
    { position: [50.71, 98.81, -136.18], url: "water", page: 'waterPump', size: [100, 100] },
    { position: [200.13, 98.81, -136.96], url: "water", page: 'waterPump', size: [100, 100] },
    //生成开采图标
    { position: [45, 5, 0], url: "弹窗", page: 'shaearer', size: [5.5, 5] },
    { position: [-45, 5, 0], url: "弹窗", page: 'shaearer', size: [5.5, 5] },
    // 瓦斯图标
    { position: [-323.67, 94, 321.34], url: "瓦斯泵1", page: 'gasPump', size: [100, 100] },
    { position: [-131.24, 94, 320.34], url: "瓦斯泵2", page: 'gasPump', size: [100, 100] },
    { position: [87.35, 94, 320.27], url: "瓦斯泵3", page: 'gasPump', size: [100, 100] },
    { position: [281.36, 94, 320.46], url: "瓦斯泵4", page: 'gasPump', size: [100, 100] },
    //生成运输图标
    { position: [396.27, 107.56, 22.87], url: "大皮1", page: 'beltConveyor', size: [100, 100] },
    { position: [-118.76, 93.78, 24.96], url: "大皮2", page: 'beltConveyor', size: [100, 100] },
    //生成风机图标
    { position: [-2.87, 104.77, -169.53], url: "警告", size: [100, 100], page: 'fan', resize: [2.2112, 2.2], resetPosition: [0, 0, 0], center: [1.4, 0.5], chlidUrl: '警告弹窗' },
    { position: [609.63, 150, 67.97], url: "组 974 (1)", size: [100, 100], page: 'fan' },
    { position: [612.17, 150, -181.83], url: "组 974", size: [100, 100], page: 'fan' },
]

export const fanPlaneData: Array<{ position: number[], url: string }> = [
    { position: [350.34, 125, -180.31], url: "涡轮1" },
    { position: [257.94, 125, -180.31], url: "涡轮2" },
    { position: [185.34, 125, -180.31], url: "涡轮3" },
    { position: [85.24, 125, -180.31], url: "涡轮4" },
    { position: [350.10, 125, 62.68], url: "涡轮5" },
    { position: [260.48, 125, 62.68], url: "涡轮6" },
    { position: [186.58, 125, 62.68], url: "涡轮7" },
    { position: [86.44, 125, 62.68], url: "涡轮8" },
]