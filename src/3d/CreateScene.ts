import * as Bol3d from './main'
import '@/assets/css/3d_index.css'
import { iconData, iconDataOpts, fanPlaneData } from './iconData'

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
    landObj!: Bol3d.Mesh
    leftFan: any[] = []
    rightFan: any[] = []
    fjPoint: any
    fjPoint1: any
    underClick: any
    trackMoveObj: any
    fireAnimation: any
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
    // 镜面
    reflectRttObj: any
    reflectFrame: any
    groundMirrorMaterial: any
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
                                chlid.material.roughness = 1
                                chlid.material.envMapIntensity = 0.2
                                if (chlid.name == "SB-5" || chlid.name == "SB-1") {
                                    this.container.addBloom(chlid);
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.5
                                } else if (chlid.name == "SB-4") {
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.55
                                }
                                this.addOutLine(chlid, chlid.name == "SB-5" || chlid.name == "SB-1" ? 0x8dcbff : 0xffffff)
                            }

                        })
                    } else if (item.name == 'FJ') {
                        item.visible = false
                        this.fan = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "FJ-004" || chlid.name == "FJ-005") {
                                    chlid.material.roughness = 0.8;
                                    chlid.material.metalness = 1;
                                    chlid.material.envMapIntensity = 0.6;
                                } else if (chlid.name == "FJ-008") {
                                    chlid.renderOrder = 100;
                                } else if (chlid.name == "FJ-006" || chlid.name == "FJ-007") {
                                    chlid.material.roughness = 1;
                                    chlid.material.metalness = 1;
                                    chlid.material.envMapIntensity = 0.3;
                                    this.addOutLine(chlid, chlid.name == "FJ-006" ? 0x8dcbff : 0xff4800)
                                    if (chlid.name == "FJ-006") {
                                        this.leftFan.push(chlid)
                                    } else {
                                        this.rightFan.push(chlid)
                                    }
                                }
                            }

                        })
                    } else if (item.name == 'JXKD') {
                        item.visible = false
                        item.scale.set(1, 1, 1)
                        this.undergroundMineObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "JXKD-003") {
                                    this.underClick.push(chlid)
                                }
                            }
                        })
                    } else if (item.name == 'KYJ') {
                        item.visible = false
                        this.airCompressorObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "KYJ-003" || chlid.name == "KYJ-4") {
                                    if (chlid.name == "KYJ-003") {
                                        this.addOutLine(chlid, 0x8dcbff, 0.1)
                                        chlid.material.transparent = true;
                                        chlid.material.opacity = 0.1;
                                        chlid.material.envMapIntensity = 0.6;
                                        chlid.material.roughness = 0.8;

                                    } else {
                                        chlid.material.transparent = true;
                                        chlid.material.opacity = 0.4;
                                        chlid.material.envMapIntensity = 0.6;
                                        chlid.material.roughness = 0.8;
                                        this.addOutLine(chlid, 0x8dcbff)
                                    }
                                }
                            }
                        })

                    } else if (item.name == 'PDYSJ') {
                        item.visible = false
                        this.beltConveyorObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "PDYSJ-2") {
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.4
                                    this.addOutLine(chlid, 0x8dcbff);
                                } else if (chlid.name == "PDYSJ-1") {
                                    this.container.addBloom(chlid);
                                    chlid.renderOrder = 100;
                                    this.trackMoveObj = chlid;
                                }
                            }
                        })

                    } else if (item.name == 'WSB') {
                        item.visible = false
                        this.gasPumpObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "WSB-1-003_2" || chlid.name == "WSB-1-004" || chlid.name == "WSB-1-003_1") {
                                    this.container.addBloom(chlid)
                                    if (chlid.name == "WSB-1-004") {
                                        chlid.material.envMapIntensity = 0.5;
                                        chlid.material.roughness = 0.3
                                    }
                                } else if (chlid.name == "WSB-1-001") {
                                    this.addOutLine(chlid, 0x8dcbff);
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.5
                                    chlid.renderOrder = 100
                                }
                            }
                        })

                    } else if (item.name == 'CMJ') {
                        item.visible = false
                        this.shearerObj = item
                        item.traverse((chlid: any) => {
                            if (chlid.isMesh) {
                                if (chlid.name == "CMJ-CJ-2" || chlid.name == "CMJ-CJ-3" || chlid.name == "CMJ-CJ-1_2") {
                                    chlid.material.lightMap = this.lightMapBG;
                                    chlid.material.lightMapIntensity = 1.0;
                                    chlid.material.envMap = null;
                                    chlid.material.side = Bol3d.DoubleSide;
                                } else if (chlid.name == "CMJ-2" || chlid.name == "CMJ-1") {
                                    this.addOutLine(chlid, 0x8dcbff);
                                } else if (chlid.name == "CMJ_(1)") {
                                    chlid.material.metalness = 0.6;
                                    chlid.material.envMapIntensity = 0.5;
                                    this.addOutLine(chlid, 0xffffff);
                                } else if (chlid.name.includes('YYZJ')) {
                                    chlid.material.transparent = true;
                                    chlid.material.opacity = 0.1;
                                    chlid.material.roughness = 1;
                                    this.addOutLine(chlid, 0xffffff, 0.5);
                                }
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
                    this.container.mixerActions.forEach((item: any) => {
                        if (item._clip.name == "XFYL") {
                            item.loop = Bol3d.LoopOnce
                            item.paused = true;
                            item._mixer.timeScale = 0.4
                            this.fireAnimation = item
                        } else {
                            item._mixer.timeScale = 0.1
                            item.paused = false;
                        }
                    })
                    this.addLand()
                    this.addIcons()
                    this.addPlaneIcon()
                    this.addPointLight()
                    this.addMouseEevent();
                    [this.reflectRttObj, this.reflectFrame, this.groundMirrorMaterial] = this.mirrorGroud([5000, 5000], 0, -Math.PI / 2, [0, -100, 0])
                    this.water = this.addWater([100, 100], 0x68b6d7, -Math.PI / 2, [-23, 0, 170], [6.43, 2.85, 1])
                    this.mainClick.push(this.container.sky)
                    this.mineClick.push(this.container.sky)
                    // this.underClick.push(container.sky)
                    this.container.clickObjects = this.mainClick
                    this.addSceneAnimation()
                    setTimeout(() => {
                        callback && callback();
                    }, 1000);
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
    addWater(size: number[], color: string | number, rotation: number, position: number[], scaleSize: number[]) {
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
        (water as any).scale.set(...scaleSize);

        const parameters = {
            elevation: 2,
            azimuth: 180,
        };
        const phi = Bol3d.MathUtils.degToRad(90 - parameters.elevation);
        const theta = Bol3d.MathUtils.degToRad(parameters.azimuth);
        sun.setFromSphericalCoords(1, phi, theta);
        (water as any).material.uniforms["sunDirection"].value.copy(sun).normalize();
        this.container.attach(water);
        water.visible = false
        return water;
    }
    /**
     * 生成镜面 reflectRtt
     * @param groundSize Set size of the plane
     * @param blur Set the mirror blur
     * @param angle 
     * @param groundPosition The coordinates of the mirror in the three-dimensional scene
     * @returns 
     */
    mirrorGroud(groundSize: number[], blur: number, angle: number, groundPosition: number[]) {
        const decalNormal = new Bol3d.TextureLoader().load(this.PRO_ENV + "3d/ffff.png");
        const decalDiffuse = new Bol3d.TextureLoader().load(
            this.PRO_ENV + "3d/ffff(1).png"
        );
        decalDiffuse.wrapS = decalDiffuse.wrapT = Bol3d.RepeatWrapping;

        const frame = new Bol3d.NodeFrame();
        const MirrorGeometry = new Bol3d.PlaneGeometry(groundSize[0], groundSize[1]);
        const planeGeo = new Bol3d.PlaneGeometry(groundSize[0], groundSize[1]);

        const MirrorMaterial = new Bol3d.ReflectorRTT(MirrorGeometry, {
            clipBias: 0.05,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
        });
        const mask = new Bol3d.SwitchNode(new Bol3d.TextureNode(decalDiffuse), "w");
        const mirror = new Bol3d.ReflectorNode(MirrorMaterial);
        const normalMap = new Bol3d.TextureNode(decalNormal);
        const normalXY = new Bol3d.SwitchNode(normalMap, "xy");
        const normalXYFlip = new Bol3d.MathNode(normalXY, Bol3d.MathNode.INVERT);
        const offsetNormal = new Bol3d.OperatorNode(
            normalXYFlip,
            new Bol3d.FloatNode(0.5),
            Bol3d.OperatorNode.SUB
        );
        (mirror as any).offset = new Bol3d.OperatorNode(
            offsetNormal, // normal
            new Bol3d.FloatNode(6), // scale
            Bol3d.OperatorNode.MUL
        );
        const blurMirror = new Bol3d.BlurNode(mirror);
        blurMirror.size = new Bol3d.Vector2(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio
        );
        blurMirror.uv = new Bol3d.ExpressionNode(
            "projCoord.xyz / projCoord.q",
            "vec3"
        );
        blurMirror.uv.keywords["projCoord"] = new Bol3d.OperatorNode(
            (mirror as any).offset,
            mirror.uv,
            Bol3d.OperatorNode.ADD
        );
        blurMirror.radius.x = blurMirror.radius.y = blur;
        const groundMirrorMaterial = new Bol3d.PhongNodeMaterial();
        (groundMirrorMaterial as any).environment = blurMirror; // or add "mirror" variable to disable blur
        (groundMirrorMaterial as any).environmentAlpha = mask;
        (groundMirrorMaterial as any).normal = new Bol3d.NormalMapNode(normalMap);

        const mirrorMesh = new Bol3d.Mesh(planeGeo, groundMirrorMaterial as any);
        MirrorMaterial.add(mirrorMesh);
        this.container.attach(MirrorMaterial);
        this.container.clickObjects.push(MirrorMaterial);
        MirrorMaterial.rotateX(angle);
        (MirrorMaterial as any).position.set(
            groundPosition[0],
            groundPosition[1],
            groundPosition[2]
        );

        return [MirrorMaterial, frame, groundMirrorMaterial, MirrorMaterial];
    };
    addSceneAnimation() {
        const clock = new Bol3d.Clock();
        const render = () => {
            requestAnimationFrame(render)
                ; (this.water as any).material.uniforms["time"].value += 1.0 / 60.0;
            this.landLine.material.map.offset.y -= 0.01;
            this.carLTs.forEach(item => {
                item.rotateOnAxis(item.position.clone().set(0, 1, 0), 0.06)
            })
            const delta = clock.getDelta();
            this.groundMirrorMaterial && this.reflectFrame.update(delta).updateNode(this.groundMirrorMaterial)
            if (this.beltConveyorStatus) {
                this.trackMoveObj.material.map.offset.x -= 0.01
            }

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
        this.mainPlaneObjs.forEach((item: any) => {
            item.visible = true;
        })
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
        this.reflectRttObj.visible = false

        this.landObj.visible = true;
        (this.landObj as any).position.y = 20

        // this.landObj.visible = true;
        this.undergroundMineObj.visible = true
        this.tweenMoveView([-66, 0, 32], [-238, 262, 387], 800, () => {
            this.peoplePlaneObjs.forEach(item => {
                if (item.name == "people警告") {
                    item.children[0].visible = false;
                }
                item.visible = true
            })

            this.container.clickObjects = [...this.peoplePlaneObjs]
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
        this.reflectRttObj.visible = true
        this.reflectRttObj.position.y = -30
        this.landObj.visible = true;
        (this.landObj as any).position.y = -30.1

        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.waterPump.visible = true;

        this.tweenMoveView([-12, -0, 133], [-22, 576, 873], 800, () => {
            this.waterPlaneObjs.forEach(item => {
                item.visible = true;
            })
            this.waterPump.traverse((child: any) => {
                if (child.isMesh) {
                    this.container.clickObjects.push(child)
                }
            })
        })
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

        this.reflectRttObj.visible = true
        this.reflectRttObj.position.y = -17
        this.landObj.visible = true;
        (this.landObj as any).position.y = -17.1
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.fan.visible = true;
        this.fjPoint.visible = true
        this.fjPoint1.visible = true
        this.tweenMoveView([9, 0, -78], [-499, 602, 429], 800, () => {
            this.fanPlaneObjs.forEach(item => {
                if (item.name.includes('警告')) {
                    item.children[0].visible = false;
                }
                item.visible = true;
            })
            this.container.clickObjects = this.fanPlaneObjs;
        })
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
        this.reflectRttObj.visible = true
        this.reflectRttObj.position.y = -15
        this.landObj.visible = true;
        (this.landObj as any).position.y = -15.1
        this.airCompressorObj.visible = true

        this.tweenMoveView([27, 0, -41], [-553, 639, 808], 800, () => {
            this.airPlaneObjs.forEach(item => {
                item.visible = true;
            })
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

        this.container.orbitControls.target.set(-428, -0, 440)
        this.container.orbitCamera.position.set(-1261, 475, 1377)
        this.container.sky.visible = false

        this.beltConveyorStatus = true
        this.reflectRttObj.visible = true
        this.reflectRttObj.position.y = -15
        this.landObj.visible = true;
        (this.landObj as any).position.y = -15.1
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });

        this.beltConveyorObj.visible = true
        this.tweenMoveView([78, -0, 56], [-352, 634, 833], 800, () => {
            this.beltConveyorPlaneObjs.forEach(item => {
                item.visible = true
            })
        })
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

        this.reflectRttObj.visible = true
        this.reflectRttObj.position.y = -15
        this.landObj.visible = true;
        (this.landObj as any).position.y = -15.1
        this.mainMeshArrs.forEach(item => {
            item.visible = false;
        });
        this.gasPumpObj.visible = true
        this.tweenMoveView([-48, -0, 93], [-548, 684, 869], 800, () => {
            this.gasPumpPlaneObjs.forEach(item => {
                item.visible = true;
            })
        })
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
            this.securityPlaneObjs.forEach(item => {
                item.children[0].visible = false;
                item.visible = true
            })
            this.carObjs.forEach(item => {
                item.visible = true;
            })
            this.container.clickObjects = this.securityPlaneObjs
        })
    }
    /**
     * 内部场景返回状态恢复
     */
    returnOrigin() {
        this.mainPlaneObjs.forEach(item => {
            item.visible = false;
        })
        this.carObjs.forEach(item => {
            item.visible = false;
        })
        this.outScenePopup.forEach(item => {
            item.visible = false;
        })
        if (this.mineStatus) {//矿井聚焦恢复
            this.mineStatus = false
        } else if (this.undergroundMineStatus) { // 矿洞聚焦恢复
            this.undergroundMineStatus = false
            this.landObj.visible = false;
            this.undergroundMineObj.visible = false
            this.peoplePlaneObjs.forEach(item => {
                item.visible = false
            })
        } else if (this.waterPumpStatus) {// 水泵场景恢复 
            this.waterPumpStatus = false
            this.water.visible = false;
            this.landObj.visible = false;
            this.waterPump.visible = false;
            this.reflectRttObj.visible = false
            this.waterPlaneObjs.forEach(item => {
                item.visible = false;
            })
        } else if (this.fanStatus) {// 风机场景恢复 
            this.fanStatus = false
            this.fan.visible = false;
            this.reflectRttObj.visible = false
            this.landObj.visible = false;
            this.fjPoint.visible = false
            this.fjPoint1.visible = false
            this.fanPlaneObjs.forEach(item => {
                item.visible = false;
            })
        } else if (this.airCompressorStatus) {// 空压机场景恢复
            this.airCompressorStatus = false
            this.airCompressorObj.visible = false
            this.reflectRttObj.visible = false
            this.landObj.visible = false;
            this.airPlaneObjs.forEach(item => {
                item.visible = false;
            })
        } else if (this.beltConveyorStatus) {// 皮带运输机场景恢复
            this.beltConveyorStatus = false
            this.beltConveyorObj.visible = false
            this.reflectRttObj.visible = false
            this.landObj.visible = false;
            this.beltConveyorPlaneObjs.forEach(item => {
                item.visible = false
            })
        } else if (this.gasPumpStatus) {// 瓦斯泵场景恢复
            this.gasPumpStatus = false
            this.gasPumpObj.visible = false
            this.reflectRttObj.visible = false
            this.landObj.visible = false;
            this.gasPumpPlaneObjs.forEach(item => {
                item.visible = false;
            })
        } else if (this.shearerStatus) {// 采煤机场景恢复
            this.shearerStatus = false
            this.shearerObj.visible = false
        } else if (this.securityStatus) {
            this.securityStatus = false
            this.securityPlaneObjs.forEach(item => {
                item.visible = false;
            })

        }
    }
    /**
     * 返回主场景
     */
    backMain() {
        this.cameraTween && this.cameraTween.stop();
        this.orbitTween && this.orbitTween.stop();
        this.returnOrigin()
        this.container.sky.visible = true
        this.mainMeshArrs.forEach(item => {
            item.visible = true;
            if (item.name == "xfyl") {
                item.visible = false;
            }
        });
        this.mainPlaneObjs.forEach(item => {
            item.visible = true;
        })
        this.outScenePopup.forEach(item => {
            item.visible = true;
        })

        this.container.orbitControls.target.set(1908, -0, 2176)
        this.container.orbitCamera.position.set(2553, 340, 3472)
        this.tweenMoveView([1653, -0, 1315], [2304, 427, 2581], 800, () => {
            this.carObjs.forEach(item => {
                item.visible = true;
            })
            this.container.clickObjects = this.mainClick
        })
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
            if (page != 'main') plane.visible = false
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
            switch (page) {
                case 'main':
                    this.mainPlaneObjs.push(plane)
                    this.mainClick.push(plane)
                    this.mineClick.push(plane)
                    break;
                case 'peopleLocal':
                    this.peoplePlaneObjs.push(plane)
                    break;
                case 'airCompressor':
                    this.airPlaneObjs.push(plane)
                    break;
                case 'securityDetection':
                    this.securityPlaneObjs.push(plane)
                    break;
                case 'shaearer':
                    this.shearerSonObj.add(plane)
                    break;
                case 'gasPump':
                    this.gasPumpPlaneObjs.push(plane)
                    break;
                case 'beltConveyor':
                    this.beltConveyorPlaneObjs.push(plane)
                    break;
                case 'fan':
                    this.fanPlaneObjs.push(plane)
                    break;
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
    /**
     * 生成外框线条
     * @param obj 
     * @param color 
     */
    addOutLine(obj: any, color: string | number, opacity?: number) {
        let geometry = obj.geometry.clone();
        let edges = new Bol3d.EdgesGeometry(geometry);
        let line = new Bol3d.LineSegments(edges, new Bol3d.LineBasicMaterial({ color: color }));
        // (line as any).scale.copy(obj.scale.clone());
        // (line as any).position.copy(obj.position.clone());
        // (line as any).rotation.copy(obj.rotation.clone());
        obj.add(line)
        this.container.addBloom(line)
        if (opacity) {
            line.material.transparent = true
            line.material.opacity = opacity
        }
        // return line;
    }
    /**
     * 生成网状地面
     */
    addLand() {
        const texture = new Bol3d.TextureLoader().load(this.PRO_ENV + "3d/land.png")
        const geometry = new Bol3d.PlaneGeometry(2000, 2000);
        const material = new Bol3d.MeshBasicMaterial({ side: Bol3d.DoubleSide, map: texture, transparent: true });
        this.landObj = new Bol3d.Mesh(geometry, material);
        (this.landObj as any).position.set(0, -30, 0);
        (this.landObj as any).rotation.x = -Math.PI / 2;
        this.landObj.renderOrder = 100;
        this.landObj.visible = false;
        this.container.attach(this.landObj);

        texture.wrapS = texture.wrapT = Bol3d.RepeatWrapping
        texture.repeat.y = texture.repeat.x = 10
    }
    /**
     * 添加点光源
     */
    addPointLight() {
        this.fjPoint = new Bol3d.PointLight(0xff4800, 3.5, 150);
        this.fjPoint.position.set(612.14, 90, -180.72);
        this.fjPoint.visible = false;
        this.container.attach(this.fjPoint);

        this.fjPoint1 = new Bol3d.PointLight(0x8dcbff, 3.5, 150);
        this.fjPoint1.position.set(614.07, 90, 61.62);
        this.fjPoint1.visible = false;
        this.container.attach(this.fjPoint1);
    }
}
