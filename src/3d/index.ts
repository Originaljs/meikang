import { CreateScene } from "./CreateScene";
const baseUrl = "/3dModel/";

export default class sceneAPI {
    private static readonly scene: CreateScene = new CreateScene(baseUrl)
    // 初始化场景加载
    static pageOnload(elment: HTMLCanvasElement, callback?: Function) {
        this.scene.sceneOnLoad(elment, callback)
    }
    // 矿井聚焦
    static mineFocusOut_3d() {
        this.scene.mineFocusOut()
    }
    // 进入地下矿洞
    static undergroundMineOut_3d() {
        this.scene.undergroundMine()
    }
    // 进入水泵场景
    static intoWaterPump_3d() {
        this.scene.intoWaterPump()
    }
    //进入风机场景
    static intoFan_3d() {
        this.scene.intoFan()
    }
    // 进入空压机场景
    static intoAirCompressor_3d() {
        this.scene.intoAirCompressor()
    }
    // 皮带运输机
    static intoBeltConveyor_3d() {
        this.scene.intoBeltConveyor()
    }
    //瓦斯泵
    static intoGasPump_3d() {
        this.scene.intoGasPump()
    }
    // 采煤机
    static intoShearer_3d() {
        this.scene.intoShearerFor()
    }
    //安全检测
    static intoSecurityDetection_3d() {
        this.scene.intoSecurityDetection()
    }
}