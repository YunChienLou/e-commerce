<template>
  <div class="tdContainer">
    <div class="preloader-2" id="preloader-2">
      <div class="preloader-wrap">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
        <span class="line line-4"></span>
        <span class="line line-5"></span>
        <span class="line line-6"></span>
        <span class="line line-7"></span>
        <span class="line line-8"></span>
        <span class="line line-9"></span>
        <div class="tdLoading">Loading</div>
      </div>
    </div>
    <canvas id="three"></canvas>
    <div class="hovertitle">
      <div class="title stack ob1 h1" style="--stacks: 3">
        <span style="--index: 0">Tesla Modal III</span>
        <span style="--index: 1">Tesla Modal III</span>
        <span style="--index: 2">Tesla Modal III</span>
      </div>
      <ul class="titleSpecs">
        <li class="ob2">
          <p class="h4">Range (WLTP)</p>
          <p class="h6">485 KM</p>
        </li>
        <li class="ob3">
          <p class="h4">Top Speed</p>
          <p class="h6">225 KM/HR</p>
        </li>
        <li class="ob4">
          <p class="h4">0-100 KM/HR</p>
          <p class="h6">6.1 Sec</p>
        </li>
      </ul>
      <span class="indicator">
        scroll down to see more<br /><font-awesome-icon :icon="['fas', 'angle-down']"/>

      </span>
      <div class="info">
        <p class="h4">Information</p>
        <p class="h6">
          Model 3 comes with the option of dual motor all-wheel drive, 20”
          Überturbine Wheels and Performance Brakes for total control in all
          weather conditions.
        </p>
      </div>
      <div class="ctrl">
        <button id="goInside" class="btn btn-teslaRed">Interior</button>
        <button
          id="goOutside"
          class="btn btn-teslaRed"
          @click="moveCam(30, 50, 0)"
        >
          Exterior
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      camPos: {
        x: -400,
        y: 150,
        z: -400,
      },
    };
  },
  mounted() {
    this.initThree();
    this.titleAnimation();
  },
  methods: {
    titleAnimation() {
      ScrollTrigger.matchMedia({
        all: () => {
          gsap.from(".ob1", {
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              invalidateOnResize: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
            x: -400,
            duration: 2,
            opacity: 0,
            ease: "power4.out",
          });
          gsap.from(".ob2", {
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              invalidateOnResize: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
            x: -400,
            duration: 2,
            opacity: 0,
            ease: "power4.out",
            delay: 0.5,
          });
          gsap.from(".ob3", {
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              invalidateOnResize: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
            x: -400,
            duration: 2,
            opacity: 0,
            ease: "power4.out",
            delay: 1,
          });
          gsap.from(".ob4", {
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              invalidateOnResize: true,
              toggleActions: "play none none reverse",
              // markers: true,
            },
            x: -400,
            duration: 2,
            opacity: 0,
            ease: "power4.out",
            delay: 1.5,
          });
        },
      });
    },
    moveCam(x, y, z) {
      this.camPos.x = x;
      this.camPos.y = y;
      this.camPos.z = z;
    },
    initThree() {
      // 建立場景
      const scene = new THREE.Scene();
      // 煙霧
      // scene.fog = new THREE.FogExp2(0x333333,0.005);
      // 背景顏色
      scene.background = new THREE.Color("#111111");
      //建立渲染器
      const canvas = document.querySelector("#three");
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.shadowMap.enable = true;
      //建立相機
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1500
      );
      // camera.position.y = 100;
      camera.position.set(this.camPos.x, this.camPos.y, this.camPos.z); // 相機位置
      camera.lookAt(scene.position); // 相機焦點
      // 建立LOADING MANAGER
      const loadingManager = new THREE.LoadingManager( () => {
      const loadingScreen = document.getElementById( 'preloader-2' );
      loadingScreen.classList.add( 'fade-out' );
      // optional: remove loader from DOM via event listener
      loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
      
      } );
      //建立物體模型
      const gltfLoader = new GLTFLoader(loadingManager);
      gltfLoader.load("/e-commerce/tesla_2018_model_3/scene.gltf", (gltf) => {
        gltf.scene.traverse(function (node) {
          if (node.isMesh) {
            node.castShadow = true;
          }
        });
        var model = gltf.scene;
        model.position.set(0, 0, 0);
        scene.add(model);
      });
      // 光源設定
      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      //光源等位置
      dirLight.position.set(-10, 50, -50);
      //可以产生阴影
      dirLight.castShadow = true;
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      scene.add(dirLight);
      //AmbientLight
      const ambientLight = new THREE.AmbientLight(0x404040, 1);
      ambientLight.position.set(0, 200, 0);
      ambientLight.castShadow = true;
      scene.add(ambientLight);

      // 設置點光源 PointLight 1
      let pointLight = new THREE.PointLight(0x404040);
      pointLight.position.set(200, 20, -200);
      pointLight.castShadow = true;
      scene.add(pointLight);

      // 設置點光源 PointLight 2
      let pointLight2 = new THREE.PointLight(0x404040);
      pointLight2.position.set(-200, 20, 300);
      pointLight2.castShadow = true;
      scene.add(pointLight2);

      // 設置聚光燈 SpotLight
      let spotLight = new THREE.SpotLight(0xffffff, 0.2);
      spotLight.position.set(300, 100, -200);
      spotLight.castShadow = true;
      scene.add(spotLight);
      let spotLight2 = new THREE.SpotLight(0xffffff, 0.2);
      spotLight2.position.set(-300, 100, -200);
      spotLight2.castShadow = true;
      scene.add(spotLight2);

      // 創建地板
      let floorGeometry = new THREE.PlaneGeometry(1500, 1000, 1, 1);
      let floorMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
      });
      // 
      let floorMaterial2 = new THREE.MeshPhongMaterial({
        color: 0x333333,
      });

      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -0.5 * Math.PI;
      floor.receiveShadow = true;
      floor.position.y = -70;
      scene.add(floor);

      let floor2 = new THREE.Mesh(floorGeometry, floorMaterial2);
      floor2.position.z = 500;
      floor2.rotation.x = -1 * Math.PI;
      floor2.receiveShadow = true;
      scene.add(floor2);
      // 操作功能
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.maxDistance = 600;
      controls.maxPolarAngle = 1.5;
      controls.enableZoom = false;
      // // THREE.AxesHelper
      // let axes = new THREE.AxesHelper(500); // 參數為座標軸長度
      // scene.add(axes);
      function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
      }
      animate();
      function Cam() {
        const insideCam = document.getElementById("goInside");
        insideCam.addEventListener("click", () => {
          // camera.position.set(30, 50, 30);
          gsap.to(camera.position, {
            x: 30,
            y: 50,
            z: 30,
            duration: 2,
            ease: "expo.out",
          });
        });
        const outsideCam = document.getElementById("goOutside");
        outsideCam.addEventListener("click", () => {
          // camera.position.set(-400, 150, -400);
          gsap.to(camera.position, {
            x: -400,
            y: 150,
            z: -400,
            duration: 3,
            ease: "expo.out",
          });
        });
      }
      Cam();
      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        var width = window.innerWidth;
        var height = window.innerHeight;
        var canvasPixelWidth = canvas.width / window.devicePixelRatio;
        var canvasPixelHeight = canvas.height / window.devicePixelRatio;

        const needResize =
          canvasPixelWidth !== width || canvasPixelHeight !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }
      function onTransitionEnd( event ) {
        event.target.remove();
      }
    },
  },
};
</script>

<style scoped>
.preloader-wrap{
  position: absolute;
  z-index: 2;
  margin: auto 0;
  top: 50%;
  width: 100%;
  height: 50%;
}
.preloader-2{
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: 1s opacity;
  z-index: 2;
  background: rgb(0, 0, 0);
}

.tdLoading {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
}
.preloader-2.fade-out {
    opacity: 0;
}

.preloader-2 .line {
  width: 1px;
  height: 12px;
  background: #fff;
  margin: 0 1px;
  display: inline-block;
  animation: opacity-2 1000ms infinite ease-in-out;
}

.preloader-2 .line-1 { animation-delay: 800ms; }
.preloader-2 .line-2 { animation-delay: 600ms; }
.preloader-2 .line-3 { animation-delay: 400ms; }
.preloader-2 .line-4 { animation-delay: 200ms; }
.preloader-2 .line-6 { animation-delay: 200ms; }
.preloader-2 .line-7 { animation-delay: 400ms; }
.preloader-2 .line-8 { animation-delay: 600ms; }
.preloader-2 .line-9 { animation-delay: 800ms; }

@keyframes opacity-1 { 
  0% { 
    opacity: 1;
  }
  50% { 
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }  
}

@keyframes opacity-2 { 
  0% { 
    opacity: 1;
    height: 15px;
  }
  50% { 
    opacity: 0;
    height: 12px;
  }
  100% { 
    opacity: 1;
    height: 15px;
  }  
}
</style>
