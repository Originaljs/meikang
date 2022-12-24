import * as Bol3d from './main'
import '@/assets/css/3d_index.css'
import { iconData, iconDataOpts, fanPlaneData } from './iconData'
import { AnyAaaaRecord } from 'dns'
type CarOptions = {
    title: string,
    text1: string,
    text2?: string,
    popupHeight: number,
    popupScale: number,
    popupRotation: number
}

export class CreateScene {
    container: any
    PRO_ENV: string
    carObjs: any[] = []
    carLTs: any[] = []
    outScenePopup: any[] = []
    fireObj: any
    lightMapBG: Bol3d.Texture
    mainClick: any = []
    oulineForKD!: any
    oulineForKD1!: any
    landLine!: any
    mineClick: any = []
    mainMeshArrs: any[] = []
    waterPump!: any
    water!: Bol3d.Water
    cameraTween: any
    orbitTween: any
    fan: any
    undergroundMineObj: any
    airCompressorObj: any
    beltConveyorObj: any
    gasPumpObj: any
    shearerObj: any
    JMJObj: any
    minecartTransportObj: any
    shearerSonObj!: any
    iconData: Array<any> = iconData
    mainPlaneObjs: any[] = []
    peoplePlaneObjs: any[] = []
    airPlaneObjs: any[] = []
    securityPlaneObjs: any[] = []
    waterPlaneObjs: any[] = []
    gasPumpPlaneObjs: any[] = []
    beltConveyorPlaneObjs: any[] = []
    fanPlaneObjs: any[] = []
    // 内部场景状态
    mineStatus: boolean = false
    undergroundMineStatus: boolean = false
    waterPumpStatus: boolean = false
    fanStatus: boolean = false
    airCompressorStatus: boolean = false
    beltConveyorStatus: boolean = false
    gasPumpStatus: boolean = false
    shearerStatus: boolean = false
    securityStatus: boolean = false
    /**
     * @param publicUrl 3d static resource path
     */
    constructor(publicUrl: string) {
        this.PRO_ENV = publicUrl
        this.lightMapBG = new Bol3d.TextureLoader().load(publicUrl + "3d/1.png")
    }
    /**
     * @param dom 3D scene container
     * @param callback The callback function after loading the scene successfully
     */
    sceneOnLoad(dom: HTMLCanvasElement, callback?: Function) {
        let delScene = new Date().getTime();
        if (delScene <= 0) {
            this.container = { count: 0 };
        } else {
            this.container = new Bol3d.Container({
                publicPath: this.PRO_ENV,
                container: dom,
                viewState: "orbit",
                bgColor: 0x000000,
                cameras: {
                    orbitCamera: {
                        position: [2304, 427, 2581],
                        near: 20,
                        far: 100000,
                        fov: 60,
                    },
                },
                controls: {
                    orbitControls: {
                        autoRotate: false,
                        autoRotateSpeed: 1,
                        target: [1653, -0, 1315],
                        minDistance: 20,
                        maxDistance: 3000,
                        maxPolarAngle: Math.PI * 0.45,
                        // minPolarAngle: Math.PI * 0.1,
                        enableDamping: false,
                        dampingFactor: 0.05,
                    },
                },
                lights: {
                    sunLight: {
                        color: 0xedeacc,
                        intensity: 0,
                        position: [2000.3, 6000, 4000.2],
                        mapSize: [4096, 4096],
                        near: 1,
                        far: 15000,
                        bias: -0.001,
                        distance: 8000,
                    },
                    ambientLight: {
                        color: 0xffffff,
                        intensity: 0.05,
                    },
                },
                nodePass: {
                    hue: 0, // 0 - 6.2
                    sataturation: 1.5, // 0 - 2
                    vibrance: 0, // -1 - 1
                    brightness: 0, // 0 - 0.5
                    contrast: 1, // 0 - 2
                },
                skyBox: {
                    urls: ["3d/169.jpg"],
                    scale: 1,
                    rotation: [0, 0, 0],
                },
                modelUrls: [
                    "3d/models/main/DX.glb",
                    "3d/models/main/LTK.glb",
                    "3d/models/main/LTK-KC.glb",
                    "3d/models/main/JZ-001.glb",
                    "3d/models/main/JZ-002.glb",
                    "3d/models/main/JZ-005.glb",
                    "3d/models/main/SB.glb",
                    "3d/models/main/FJ.glb",
                    "3d/models/main/JXKD.glb",
                    "3d/models/main/KYJ.glb",
                    "3d/models/main/PDYSJ.glb",
                    "3d/models/main/WSB.glb",
                    "3d/models/main/CMJ.glb",
                    "3d/models/main/dh-c.glb",
                    "3d/models/main/JMJ.glb",
                    "3d/models/main/YSKC.glb",
                    "3d/models/main/xfyl.glb",
                ],
                outline: {
                    edgeStrength: 5,
                    edgeGlow: 0,
                    edgeThickness: 1,
                    pulsePeriod: 2.5,
                    visibleEdgeColor: "#FF7A5A",
                    hiddenEdgeColor: "#190a05",
                },
                bloomEnabled: true,
                bloom: {
                    bloomStrength: 0.8, // 强度
                    threshold: 0, // 阈值
                    bloomRadius: 0, // 半径
                },
                enableShadow: false,
                hdrUrls: ["3d/2.hdr"],
                toneMappingExposure: 1,
                antiShake: false,
                bounds: {
                    radius: 10000,
                    center: [0, 0, 0],
                },
                fog: {
                    color: 0x52636E, // 雾颜色
                    intensity: 0.00005, // 雾强度
                },
                stats: false,
                onProgress: (item: any) => {
                    item.scale.set(10, 10, 10)
                    if (item.name == "DX" || item.name == "LTK" || item.name == "JZ-001" || item.name == "JZ-002" || item.name == "JZ-005" || item.name == "LTK-KC" || item.name == "dh-c" || item.name == "xfyl") {
                        if (item.name == "dh-c") {
                            item.position.set(-2922.82, 0, -1397.95)
                            item.name = "car1"
                            this.carObjs.push(item)
                            const car1 = item.clone()
                            car1.position.set(-1516.38, 0, 622.78)
                            car1.name = "car2"
                            this.container.attach(car1)
                            this.carObjs.push(car1)
                            car1.traverse((child: any) => {
                                if (child.type == "Group") {
                                    if (child.name == "dh-c006" || child.name == "dh-c005" || child.name == "dh-c004" || child.name == "dh-c003" || child.name == "dh-c002" || child.name == "dh-c001") {
                                        this.carLTs.push(child)
                                    }
                                }
                            })
                            const car2 = item.clone();
                            car2.position.set(-1628.85, 0, -1304.48);
                            car2.name = "car3";
                            car2.rotation.y = -Math.PI / 2;
                            this.container.attach(car2);
                            this.carObjs.push(car2);
                            car2.traverse((child: any) => {
                                if (child.type == "Group") {
                                    if (child.name == "dh-c006" || child.name == "dh-c005" || child.name == "dh-c004" || child.name == "dh-c003" || child.name == "dh-c002" || child.name == "dh-c001") {
                                        this.carLTs.push(child)
                                    }
                                }
                            })
                            const option = { title: '渣土车', text1: '2.4小时', text2: '2.3吨', popupHeight: 10, popupScale: 0.05, popupRotation: Math.PI / 2 }
                            this.addCarPlane(item, option)
                            this.addCarPlane(car1, option)
                            this.addCarPlane(car2, option)
                        }
                        if (item.name == "xfyl") {
                            item.visible = false;
                            this.fireObj = item;
                        }
                        if (item.name == "LTK-KC") {
                            item.traverse((chlid: any) => {
                                if (chlid.type == 'Group') {
                                    if (chlid.name == "KC-003") {
                                        const caroption1 = { title: '推土机', text1: '1.2小时', popupHeight: 12, popupScale: 0.1, popupRotation: Math.PI / 2 }
                                        this.addCarPlane(chlid, caroption1)
                                    } else if (chlid.name == "Box002") {
                                        const caroption2 = { title: '矿井运输车', text1: '2.4小时', text2: '2.3吨', popupHeight: 12, popupScale: 0.1, popupRotation: Math.PI / 2 }
                                        this.addCarPlane(chlid, caroption2)
                                    } else if (chlid.name == "Box001") {
                                        const caroption3 = { title: '矿井运输车', text1: '2.6小时', text2: '2.7吨', popupHeight: 700, popupScale: 5, popupRotation: 0 }
                                        this.addCarPlane(chlid, caroption3)
                                    }
                                }
                            })
                        }
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                chlid.material.roughness = 1;
                                chlid.material.envMapIntensity = 0.2
                                if (chlid.name == "DX-003" || chlid.name == "LTK-1" || chlid.name == "LTK-2" || chlid.name == "LTK-5") {
                                    chlid.material.envMapIntensity = 1
                                    chlid.material.lightMap = this.lightMapBG;
                                    chlid.material.lightMapIntensity = 0.1
                                    chlid.renderOrder = 100;
                                    this.mainClick.push(chlid)
                                    if (chlid.name == "LTK-1") {
                                        this.oulineForKD = chlid;
                                    }
                                    if (chlid.name == "LTK-5") {
                                        this.oulineForKD1 = chlid;
                                    }
                                } else if (chlid.name == "DX-001") {
                                    this.landLine = chlid;
                                    chlid.material.envMapIntensity = 1
                                    chlid.material.lightMap = this.lightMapBG;
                                    chlid.material.lightMapIntensity = 1;
                                    chlid.material.transparent = true
                                    this.container.addBloom(chlid)
                                } else if (chlid.name == "JZ-002") {
                                    chlid.material.envMap = null;
                                    this.container.addBloom(chlid)
                                    chlid.material.emissive.set(0xffffff);
                                } else if (chlid.name == "JZ-001-002" || chlid.name == "JZ-001" || chlid.name == "JZ-001-003" || chlid.name == "JZ-001-001") {
                                    chlid.renderOrder = 100;
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.9
                                } else if (chlid.name == "JZ-003") {
                                    chlid.material.lightMap = this.lightMapBG;
                                    chlid.material.lightMapIntensity = 0.1;
                                    this.container.addBloom(chlid)
                                } else if (chlid.name == "LTK-3") {
                                    this.mineClick.push(chlid)
                                } else if (chlid.name == "Box003") {
                                    console.log(chlid)
                                }
                            }
                            if (chlid.type == "Group") {
                                if (chlid.name == "dh-c006" || chlid.name == "dh-c005" || chlid.name == "dh-c004" || chlid.name == "dh-c003" || chlid.name == "dh-c002" || chlid.name == "dh-c001") {
                                    this.carLTs.push(chlid)
                                }
                            }
                        })
                        this.mainMeshArrs.push(item);
                    } else if (item.name == 'SB') {
                        item.visible = false
                        this.waterPump = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }

                        })
                    } else if (item.name == 'FJ') {
                        item.visible = false
                        this.fan = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }

                        })
                    } else if (item.name == 'JXKD') {
                        item.visible = false
                        this.undergroundMineObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })
                    } else if (item.name == 'KYJ') {
                        item.visible = false
                        this.airCompressorObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })

                    } else if (item.name == 'PDYSJ') {
                        item.visible = false
                        this.beltConveyorObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })

                    } else if (item.name == 'WSB') {
                        item.visible = false
                        this.gasPumpObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })

                    } else if (item.name == 'CMJ') {
                        item.visible = false
                        this.shearerObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                            if (chlid.type == "Object3D") {
                                chlid.userData.oldPosition = chlid.position.clone();
                                this.shearerSonObj = chlid;
                            }
                        })

                    } else if (item.name == 'JMJ') {
                        item.visible = false
                        this.JMJObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })

                    } else if (item.name == 'YSKC') {
                        item.visible = false
                        this.minecartTransportObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {

                            }
                        })

                    }
                },
                onLoad: () => {
                    this.addIcons()
                    this.addPlaneIcon()
                    this.addMouseEevent()
                    this.water = this.addWater([100, 100], 0x68b6d7, -Math.PI / 2, [-23, 0, 170])
                    this.mainClick.push(this.container.sky)
                    this.mineClick.push(this.container.sky)
                    // this.underClick.push(container.sky)
                    this.container.clickObjects = this.mainClick
                    setTimeout(() => {
                        callback && callback();
                    }, 1000);
                    this.addSceneAnimation()
                }
            })
        }

    }
    addMouseEevent() {
        const events = new Bol3d.Events(this.container);
        events.onclick = (e: any) => {
            console.log(
                "中心点： " +
                e.objects[0].point.x.toFixed(2) +
                "," +
                e.objects[0].point.y.toFixed(2) +
                "," +
                e.objects[0].point.z.toFixed(2)
            );
            console.log(e.objects[0].object);
        };
        events.ondbclick = (e: any) => {
            let name = e.objects[0].object.name;

        };
        events.onhover = (e: any) => {
            let name = e.objects[0].object.name;

        };
        // 实时获取位置
        (window as any).outViewPoint = () => {
            const point = this.container.orbitControls.target;
            const camera = this.container.orbitCamera.position;
            console.log(
                "point:",
                point.x.toFixed(0) + "," + point.y.toFixed(0) + "," + point.z.toFixed(0)
            );
            console.log(
                "camera:",
                camera.x.toFixed(0) + "," + camera.y.toFixed(0) + "," + camera.z.toFixed(0)
            );
        };
    }

    addCarPlane(obj: any, options: CarOptions) {
        let plane = new Bol3d.POI.Popup3DR({
            value: `<div class='planeBox'>
                <div class='titleName'>${options.title}</div>
                <div class='lineName'>工作时长：<span class='lineText'>${options.text1}</span></div>
                ${options.text2 ? `<div class='lineName'>运输重量：<span class='lineText'>${options.text2}</span></div>` : ""}
            </div>`,
            position: [0, options.popupHeight, 0],
            className: 'carPlaneUp',
            closeVisible: 'hidden',
            scale: [options.popupScale, options.popupScale, options.popupScale],
            rotation: [0, options.popupRotation, 0]
        })
        this.outScenePopup.push(plane)
        obj.add(plane);

    }

    /**
     * Scene adds water plane
     * @param size Plane size
     * @param color Water surface color
     * @param rotation 
     * @param position Plane position
     * @returns 
     */
    addWater(size: number[], color: string | number, rotation: number, position: number[]) {
        const sun = new Bol3d.Vector3();
        const waterGeometry = new Bol3d.PlaneGeometry(size[0], size[1]);
        const water = new Bol3d.Water(waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new Bol3d.TextureLoader().load(
                this.PRO_ENV + "3d/waternormals.jpg",
                function (texture: any) {
                    texture.wrapS = texture.wrapT = Bol3d.RepeatWrapping;
                }
            ),
            sunDirection: new Bol3d.Vector3(),
            sunColor: 0xffffff,
            waterColor: color,
            distortionScale: 15,
            fog: this.container.scene.fog !== undefined,
        });
        (water as any).position.set(...position);
        (water as any).rotation.x = rotation;

        const parameters = {
            elevation: 2,
            azimuth: 180,
        };
        const phi = Bol3d.MathUtils.degToRad(90 - parameters.elevation);
        const theta = Bol3d.MathUtils.degToRad(parameters.azimuth);
        sun.setFromSphericalCoords(1, phi, theta);
        (water as any).material.uniforms["sunDirection"].value.copy(sun).normalize();
        this.container.attach(water);
        return water;
    }
    addSceneAnimation() {
        const clock = new Bol3d.Clock();
        const render = () => {
            requestAnimationFrame(render)
                ; (this.water as any).material.uniforms["time"].value += 1.0 / 60.0;
            this.landLine.material.map.offset.y -= 0.01;
            this.carLTs.forEach(item => {
                item.rotateOnAxis(item.position.clone().set(0, 1, 0), 0.06)
            })

        }
        render()
    }
    /**
     * Scene moving 
     * @param point Change the control target
     * @param look 
     * @param times 
     * @param td 
     */
    tweenMoveView(point: number[], look: number[], times: number, td?: Function) {
        this.cameraTween = new Bol3d.TWEEN.Tween(this.container.orbitCamera)
            .to({ position: new Bol3d.Vector3(...look) }, times)
            .start()
            .onComplete(function () {
                td && td();
            });
        this.orbitTween = new Bol3d.TWEEN.Tween(this.container.orbitControls)
            .to({ target: new Bol3d.Vector3(...point) }, times)
            .start();
    }
    /**
     * 矿井聚焦
     */
    mineFocusOut() {
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.returnOrigin()
        this.mineStatus = true
        // this.mainPlaneObjs.forEach((item: any) => {
        //     item.visible = true;
        // })
        this.tweenMoveView([-4429, 0, -52], [-4413, 1096, 118], 1500, () => {
            this.container.clickObjects = this.mineClick;
        })
    }
    /**
     * 进入地下矿洞
     */
    undergroundMine() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.undergroundMineStatus = true
        this.container.orbitControls.target.set(-278, 0, 314)
        this.container.orbitCamera.position.set(-982, 396, 1107)
        this.container.sky.visible = false
        // 主场景隐藏
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });

        // this.landObj.visible = true;
        this.undergroundMineObj.visible = true
        this.tweenMoveView([-66, 0, 32], [-238, 262, 387], 800, () => {

            // this.container.clickObjects =[this.underClick]
        })
    }
    /**
     * 进入水泵场景
     */
    intoWaterPump() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.container.clickObjects = [];

        this.waterPumpStatus = true
        this.container.orbitControls.target.set(-204, -0, 304)
        this.container.orbitCamera.position.set(-1391, 477, 1475)
        this.container.sky.visible = false

        this.water.visible = true;

        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.waterPump.visible = true;

        this.tweenMoveView([-12, -0, 133], [-22, 576, 873], 800, () => { })
    }
    /**
     * 进入风机场景
     */
    intoFan() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();

        this.fanStatus = true
        this.container.orbitControls.target.set(-428, -0, 440)
        this.container.orbitCamera.position.set(-1261, 475, 1377)
        this.container.sky.visible = false
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.fan.visible = true;
        this.tweenMoveView([9, 0, -78], [-499, 602, 429], 800, () => { })
    }
    /**
     * 进入空压机场景
     */
    intoAirCompressor() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.container.clickObjects = [];

        this.airCompressorStatus = true
        this.container.orbitControls.target.set(-428, -0, 440)
        this.container.orbitCamera.position.set(-1261, 475, 1377)
        this.container.sky.visible = false
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.airCompressorObj.visible = true

        this.tweenMoveView([27, 0, -41], [-553, 639, 808], 800, () => {
            this.airCompressorObj.traverse((child: any) => {
                if (child.isMesh) {
                    this.container.clickObjects.push(child)
                }
            })
        })
    }
    /**
     * 皮带运输机
     */
    intoBeltConveyor() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.container.clickObjects = [];

        this.beltConveyorStatus = true
        this.container.orbitControls.target.set(-428, -0, 440)
        this.container.orbitCamera.position.set(-1261, 475, 1377)
        this.container.sky.visible = false
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });

        this.beltConveyorObj.visible = true
        this.tweenMoveView([78, -0, 56], [-352, 634, 833], 800, () => { })
    }
    /**
     * 瓦斯泵
     */
    intoGasPump() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.container.clickObjects = [];

        this.gasPumpStatus = true
        this.container.orbitControls.target.set(-428, -0, 440)
        this.container.orbitCamera.position.set(-1261, 475, 1377)
        this.container.sky.visible = false
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.gasPumpObj.visible = true
        this.tweenMoveView([-48, -0, 93], [-548, 684, 869], 800, () => { })
    }
    /**
     * 采煤机
     */
    intoShearerFor() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.container.clickObjects = [];

        this.shearerStatus = true
        this.container.orbitControls.target.set(-493, 0, -47)
        this.container.orbitCamera.position.set(-700, 33, -19)
        this.container.sky.visible = false
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.shearerObj.visible = true;
        this.tweenMoveView([1088, 0, -61], [894, 35, 42], 800, () => {
            this.shearerObj.traverse((child: any) => {
                if (child.isMesh) {
                    this.container.clickObjects.push(child)
                }
            })
        })

    }
    /**
     * 安全检测
     */
    intoSecurityDetection() {
        this.returnOrigin()
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();

        this.securityStatus = true
        this.container.sky.visible = true
        this.mainMeshArrs.forEach(item => {
            item.visible = true;
            if (item.name == "xfyl") {
                item.visible = false;
            }
        });

        this.container.orbitControls.target.set(1908, -0, 2176)
        this.container.orbitCamera.position.set(2553, 340, 3472)

        this.tweenMoveView([1653, -0, 1315], [2304, 427, 2581], 800, () => {

            this.carObjs.forEach(item => {
                item.visible = true;
            })
        })
    }
    /**
     * 内部场景返回状态恢复
     */
    returnOrigin() {
        this.carObjs.forEach(item => {
            item.visible = false;
        })

        if (this.mineStatus) {//矿井聚焦恢复
            this.mineStatus = false
        } else if (this.undergroundMineStatus) { // 矿洞聚焦恢复
            this.undergroundMineStatus = false
            this.undergroundMineObj.visible = false
        } else if (this.waterPumpStatus) {// 水泵场景恢复 
            this.waterPumpStatus = false
            this.water.visible = false;
            this.waterPump.visible = false;
        } else if (this.fanStatus) {// 风机场景恢复 
            this.fanStatus = false
            this.fan.visible = false;
        } else if (this.airCompressorStatus) {// 空压机场景恢复
            this.airCompressorStatus = false
            this.airCompressorObj.visible = false
        } else if (this.beltConveyorStatus) {// 皮带运输机场景恢复
            this.beltConveyorStatus = false
            this.beltConveyorObj.visible = false
        } else if (this.gasPumpStatus) {// 瓦斯泵场景恢复
            this.gasPumpStatus = false
            this.gasPumpObj.visible = false
        } else if (this.shearerStatus) {// 采煤机场景恢复
            this.shearerStatus = false
            this.shearerObj.visible = false
        } else if (this.securityStatus) {
            this.securityStatus = false

        }
    }
    /**
     * 生成场景图标
     */
    addIcons() {
        this.iconData.forEach((item: iconDataOpts) => {
            const { position, url, page, size, resize, resetPosition, center, chlidUrl } = item
            const plane = new Bol3d.POI.Icon({
                position: position,
                url: `3d/device/${page}/${url}.png`,
                scale: [size[0], size[1]],
                sizeAttenuation: true,
                publicPath: this.PRO_ENV,
            })
            plane.name = url
            plane.center.y = 0;
            if (page != 'shaearer') this.container.attach(plane)
            if (resize && center) {
                const chlidPlane = new Bol3d.POI.Icon({
                    position: resetPosition,
                    url: `3d/device/${page}/${chlidUrl}.png`,
                    scale: [resize[0], resize[1]],
                    sizeAttenuation: true,
                    publicPath: this.PRO_ENV,
                })
                chlidPlane.name = ('' + chlidUrl).trim()
                chlidPlane.center = new Bol3d.Vector2(center[0], center[1]);
                plane.add(chlidPlane)
            }
            if (page == 'main') {
                this.mainPlaneObjs.push(plane)
                this.mainClick.push(plane)
                this.mineClick.push(plane)
            } else {
                plane.visible = false
                if (page == 'peopleLocal') {
                    this.peoplePlaneObjs.push(plane)
                } else if (page == 'airCompressor') {
                    this.airPlaneObjs.push(plane)
                } else if (page == 'securityDetection') {
                    this.securityPlaneObjs.push(plane)
                } else if (page == 'waterPump') {
                    this.waterPlaneObjs.push(plane)
                } else if (page == 'shaearer') {
                    this.shearerSonObj.add(plane)
                } else if (page == 'gasPump') {
                    this.gasPumpPlaneObjs.push(plane)
                } else if (page == 'beltConveyor') {
                    this.beltConveyorPlaneObjs.push(plane)
                } else if (page == 'fan') {
                    this.fanPlaneObjs.push(plane)
                }
            }
        })
    }
    addPlaneIcon() {
        fanPlaneData.forEach(data => {
            const geometry = new Bol3d.PlaneGeometry(50, 15)
            const material = new Bol3d.MeshBasicMaterial({
                side: Bol3d.DoubleSide,
                transparent: true,
                map: new Bol3d.TextureLoader().load(this.PRO_ENV + `3d/device/fan/${data.url}.png`)
            })
            const plane = new Bol3d.Mesh(geometry, material);
            plane.visible = false;
            plane.name = 'fan' + data.url;
            (plane as any).position.set(...data.position)
            plane.renderOrder = 300;
            (plane as any).rotation.y = -Math.PI / 2
            this.container.attach(plane)
            this.fanPlaneObjs.push(plane)
        });
    }
}
