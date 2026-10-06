import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const fragmentShader = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform vec3 u_color_bg;
  uniform vec3 u_color_fluid;
  uniform vec3 u_color_fluid_deep; // 1. Объявляем новый цвет в коде шейдера

  float getFluidNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(fract(sin(dot(i + vec2(0.0,0.0), vec2(127.1,311.7))) * 43758.5453123),
                   fract(sin(dot(i + vec2(1.0,0.0), vec2(127.1,311.7))) * 43758.5453123), u.x),
               mix(fract(sin(dot(i + vec2(0.0,1.0), vec2(127.1,311.7))) * 43758.5453123),
                   fract(sin(dot(i + vec2(1.0,1.0), vec2(127.1,311.7))) * 43758.5453123), u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 4; ++i) {
      v += a * getFluidNoise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = gl_FragCoord.xy / u_resolution.y;

    vec2 mouseUV = u_mouse / u_resolution.y;
    float mouse_dist = distance(uv, mouseUV);
    float mouse_influence = smoothstep(0.35, 0.0, mouse_dist) * 0.25;

    vec2 q = vec2(0.0);
    q.x = fbm(uv * 2.2 + u_time * 0.06);
    q.y = fbm(uv * 1.8 + u_time * 0.04);

    vec2 r = vec2(0.0);
    r.x = fbm(uv * 2.5 + q * 1.5 + vec2(u_time * 0.03, u_time * 0.05) + mouse_influence);
    r.y = fbm(uv * 2.0 + q * 1.2 + vec2(u_time * 0.04, u_time * 0.02));

    float mask = fbm(uv * 1.5 + r * 1.8);

    float base_wave = sin(uv.y * 3.0 + mask * 4.0) * 0.2 + 0.3;
    float dist_from_stream = abs(st.x - base_wave);
    
    float stream = smoothstep(0.25, 0.02, dist_from_stream);
    stream *= smoothstep(0.2, 0.7, mask);

    float grain = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.03;

    // --- 2. ДВУХЭТАПНОЕ СМЕШИВАНИЕ ДЛЯ ПЛАВНОГО ОБЪЕМА ---
    // Сначала создаем красивый градиент внутри самих чернил: от темного к яркому
    vec3 ink_gradient = mix(u_color_fluid_deep, u_color_fluid, smoothstep(0.1, 0.8, stream));
    
    // Затем накладываем этот градиент чернил на подложку фона #191919
    vec3 final_color = mix(u_color_bg, ink_gradient, clamp(stream, 0.0, 1.0));
    final_color += grain;

    gl_FragColor = vec4(final_color, 1.0);
  }
`;

export default function LiquidBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const uniforms = {
    u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
    u_mouse: { value: new THREE.Vector2(container.clientWidth / 2, container.clientHeight / 2) },
    u_time: { value: 0 },
    u_color_bg: { value: new THREE.Color('#191919') },
    u_color_fluid: { value: new THREE.Color('#e08777') },
    u_color_fluid_deep: { value: new THREE.Color('#a76e64') } 
    };


    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const targetMouse = new THREE.Vector2(container.clientWidth / 2, container.clientHeight / 2);
    const currentMouse = new THREE.Vector2(container.clientWidth / 2, container.clientHeight / 2);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = rect.height - (e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Заменяем THREE.Clock на стандартный высокоточный таймер
    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      uniforms.u_mouse.value.copy(currentMouse);

      uniforms.u_time.value = (performance.now() - startTime) * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
}
