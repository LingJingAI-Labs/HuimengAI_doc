<template>
  <div class="animated-logo">
    <svg class="logo-svg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- 核心路径：无穷符号 -->
        <path id="infinity-path" d="M 200 100 C 250 100 300 40 340 40 S 390 100 340 160 S 250 100 200 100 S 100 40 60 40 S 10 100 60 160 S 150 100 200 100 Z" />

        <!-- 路径发光滤镜 -->
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- 粒子渐变 - 橙色能量 -->
        <radialGradient id="particle-orange">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="40%" stop-color="#FF6600" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>

        <!-- 粒子渐变 - 蓝色科技 -->
        <radialGradient id="particle-blue">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="40%" stop-color="#00CCFF" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>

        <!-- 轨道渐变 -->
        <linearGradient id="track-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FF6600" stop-opacity="0.1" />
          <stop offset="50%" stop-color="#FF4500" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#FF6600" stop-opacity="0.1" />
        </linearGradient>
      </defs>

      <!-- 背景轨道 -->
      <use href="#infinity-path" fill="none" stroke="url(#track-gradient)" stroke-width="12" stroke-linecap="round" />
      <use href="#infinity-path" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" />

      <!-- 粒子组：应用发光滤镜 -->
      <g filter="url(#glow)">
        <!-- 主粒子流 (橙色) -->
        <circle r="6" fill="url(#particle-orange)">
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>
        
        <!-- 拖尾粒子 1 -->
        <circle r="5" fill="url(#particle-orange)" opacity="0.8">
          <animateMotion dur="3s" begin="-0.1s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>

        <!-- 拖尾粒子 2 -->
        <circle r="4" fill="url(#particle-orange)" opacity="0.6">
          <animateMotion dur="3s" begin="-0.2s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>

        <!-- 拖尾粒子 3 -->
        <circle r="3" fill="url(#particle-orange)" opacity="0.4">
          <animateMotion dur="3s" begin="-0.3s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>

        <!-- 反向粒子流 (蓝色 - 增加对比和科技感) -->
        <circle r="4" fill="url(#particle-blue)">
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>

        <circle r="3" fill="url(#particle-blue)" opacity="0.7">
          <animateMotion dur="4s" begin="-0.15s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>

        <!-- 慢速大粒子 (氛围) -->
        <circle r="8" fill="url(#particle-orange)" opacity="0.2">
           <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#infinity-path" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  </div>
</template>

<script setup>
// 灵境AI 无穷粒子特效组件
</script>

<style scoped>
.animated-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  padding: 10px;
}

.logo-svg {
  width: 100%;
  height: 100%;
  max-width: 600px;
  /* 整体轻微浮动 */
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>
