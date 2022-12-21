import * as Bol3d from './main'

export class CreateScene {
    container: any
    PRO_ENV: string
    /**
     * @param publicUrl 3d static resource path
     */
    constructor(publicUrl: string) {
        this.PRO_ENV = publicUrl
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
                },
                onLoad: () => {
                    this.addMouseEevent()
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
    }

}