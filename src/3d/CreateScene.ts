import * as Bol3d from './main'
import '@/assets/css/3d_index.css'
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
                    // "3d/models/main/FJ.glb",
                    // "3d/models/main/JXKD.glb",
                    // "3d/models/main/KYJ.glb",
                    // "3d/models/main/PDYSJ.glb",
                    // "3d/models/main/WSB.glb",
                    // "3d/models/main/CMJ.glb",
                    "3d/models/main/dh-c.glb",
                    // "3d/models/main/JMJ.glb",
                    // "3d/models/main/YSKC.glb",
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
    };
}
