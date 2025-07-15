<template>
  <div class="animated-logo">
    <svg class="logo-svg" viewBox="0 0 10438 4621" xmlns="http://www.w3.org/2000/svg">
      <!-- 定义渐变和滤镜 -->
      <defs>
        <!-- 动态渐变1 -->
        <linearGradient id="paint0_linear_animated" x1="3488.55" y1="216.122" x2="7487.29" y2="1129.71" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00DAED">
            <animate attributeName="stop-color" 
                     values="#00DAED;#01EFB4;#00DAED" 
                     dur="3s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="1" stop-color="#01EFB4">
            <animate attributeName="stop-color" 
                     values="#01EFB4;#00DAED;#01EFB4" 
                     dur="3s" 
                     repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        
        <!-- 动态渐变2 -->
        <linearGradient id="paint1_linear_animated" x1="10338.2" y1="1174.64" x2="8300.39" y2="1748.91" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00DAED">
            <animate attributeName="stop-color" 
                     values="#00DAED;#00EEB9;#00DAED" 
                     dur="2.5s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="1" stop-color="#00EEB9">
            <animate attributeName="stop-color" 
                     values="#00EEB9;#00DAED;#00EEB9" 
                     dur="2.5s" 
                     repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        
        <!-- 动态渐变3 -->
        <linearGradient id="paint2_linear_animated" x1="4222.38" y1="-1208.05" x2="1257.9" y2="3750.08" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00D4FF">
            <animate attributeName="stop-color" 
                     values="#00D4FF;#00FF88;#00D4FF" 
                     dur="4s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="1" stop-color="#00FF88">
            <animate attributeName="stop-color" 
                     values="#00FF88;#00D4FF;#00FF88" 
                     dur="4s" 
                     repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        
        <!-- 动态渐变4 -->
        <linearGradient id="paint3_linear_animated" x1="1517.91" y1="3646.06" x2="10896.8" y2="1444.38" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00FF88">
            <animate attributeName="stop-color" 
                     values="#00FF88;#00D4FF;#00FF88" 
                     dur="3.5s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="1" stop-color="#00D4FF">
            <animate attributeName="stop-color" 
                     values="#00D4FF;#00FF88;#00D4FF" 
                     dur="3.5s" 
                     repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        
        <!-- 流动光效渐变 -->
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="transparent"/>
          <stop offset="30%" stop-color="#ffffff" stop-opacity="0.6"/>
          <stop offset="70%" stop-color="#ffffff" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="transparent"/>
          <animateTransform attributeName="gradientTransform" 
                           type="translate" 
                           values="-100 0;10500 0;-100 0" 
                           dur="4s" 
                           repeatCount="indefinite"/>
        </linearGradient>
        
        <!-- 发光滤镜 -->
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
        
        <!-- 脉冲滤镜 -->
        <filter id="pulse" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur">
            <animate attributeName="stdDeviation" 
                     values="4;8;4" 
                     dur="2s" 
                     repeatCount="indefinite"/>
          </feGaussianBlur>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- 主要路径组 -->
      <g filter="url(#glow)">
        <!-- 路径1 -->
         <path d="M2782.03 232.563C2782.92 231.827 2784.68 231.084 2787.28 230.341C3656.05 -135.678 4968 13.7556 5525.8 140.761C6084.72 268.023 7805.19 730.044 7805.19 730.044L7022.37 1181.24C6872.5 1133.33 6573.48 1043.4 6187.74 923.602C5627.82 749.71 5088.05 504.316 4516.36 374.218C3692.87 186.818 2864.88 208.251 2787.28 230.341C2785.53 231.08 2783.78 231.82 2782.03 232.563Z" 
               fill="url(#paint0_linear_animated)">
           <animateTransform attributeName="transform" 
                            type="scale" 
                            values="1;1.08;1" 
                            dur="3s" 
                            repeatCount="indefinite"/>
         </path>
         
         <!-- 路径2 -->
         <path d="M9824.97 1820.08C9390.08 1941.61 8562.13 1768.84 8300.39 1688.31L8929.24 1259.47C8929.24 1259.47 9299.21 1397.22 9799.93 1329.73C10103.8 1278.83 10403 1001.95 10415.2 892.734C10572.6 1641.35 9834.12 1820.08 9824.97 1820.08Z" 
               fill="url(#paint1_linear_animated)">
           <animateTransform attributeName="transform" 
                            type="scale" 
                            values="1;1.01;1" 
                            dur="2.5s" 
                            repeatCount="indefinite"/>
         </path>
         
         <!-- 路径3 -->
         <path d="M1507.93 4189.29L0 3115.69C0 1640.53 1867.99 664.929 2687.51 375.391L4041.8 484.145C1393.11 2575.56 1234.75 3798.66 1507.93 4189.29Z" 
               fill="url(#paint2_linear_animated)">
           <animateTransform attributeName="transform" 
                            type="scale" 
                            values="1;1.06;1" 
                            dur="4s" 
                            repeatCount="indefinite"/>
         </path>
         
         <!-- 路径4 -->
         <path d="M5530.7 2361.15C2889.01 4315.4 1821.46 4007.7 1617.89 3609.58C1487.12 6306.21 6080.24 2948.15 8712.69 1213.43C9457.65 685.097 10185.6 827.887 10416.3 891.15C9908.28 10.2282 8832.8 -81.6469 5530.7 2361.15Z" 
               fill="url(#paint3_linear_animated)">
           <animateTransform attributeName="transform" 
                            type="scale" 
                            values="1;1.04;1" 
                            dur="3.5s" 
                            repeatCount="indefinite"/>
         </path>
      </g>
      
      <!-- 流动光效覆盖层 -->
      <g opacity="0.4">
        <path d="M2782.03 232.563C2782.92 231.827 2784.68 231.084 2787.28 230.341C3656.05 -135.678 4968 13.7556 5525.8 140.761C6084.72 268.023 7805.19 730.044 7805.19 730.044L7022.37 1181.24C6872.5 1133.33 6573.48 1043.4 6187.74 923.602C5627.82 749.71 5088.05 504.316 4516.36 374.218C3692.87 186.818 2864.88 208.251 2787.28 230.341C2785.53 231.08 2783.78 231.82 2782.03 232.563Z" 
              fill="url(#flowGradient)"/>
        <path d="M9824.97 1820.08C9390.08 1941.61 8562.13 1768.84 8300.39 1688.31L8929.24 1259.47C8929.24 1259.47 9299.21 1397.22 9799.93 1329.73C10103.8 1278.83 10403 1001.95 10415.2 892.734C10572.6 1641.35 9834.12 1820.08 9824.97 1820.08Z" 
              fill="url(#flowGradient)"/>
        <path d="M1507.93 4189.29L0 3115.69C0 1640.53 1867.99 664.929 2687.51 375.391L4041.8 484.145C1393.11 2575.56 1234.75 3798.66 1507.93 4189.29Z" 
              fill="url(#flowGradient)"/>
        <path d="M5530.7 2361.15C2889.01 4315.4 1821.46 4007.7 1617.89 3609.58C1487.12 6306.21 6080.24 2948.15 8712.69 1213.43C9457.65 685.097 10185.6 827.887 10416.3 891.15C9908.28 10.2282 8832.8 -81.6469 5530.7 2361.15Z" 
              fill="url(#flowGradient)"/>
      </g>
      
      <!-- 流动光点 -->
      <circle r="15" fill="#ffffff" filter="url(#pulse)" opacity="0.8">
        <animateMotion dur="6s" repeatCount="indefinite">
          <path d="M2782 232 Q4000 500 5525 140 Q6500 200 7805 730 Q7000 1000 6187 923 Q4500 700 2782 232"/>
        </animateMotion>
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <!-- 第二个光点 -->
      <circle r="12" fill="#00DAED" filter="url(#pulse)" opacity="0.6">
        <animateMotion dur="8s" repeatCount="indefinite" begin="3s">
          <path d="M9824 1820 Q9000 1500 8300 1688 Q8900 1300 9799 1329 Q10200 1100 10415 892"/>
        </animateMotion>
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      
      <!-- 第三个光点 -->
      <circle r="10" fill="#00FF88" filter="url(#pulse)" opacity="0.7">
        <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s">
          <path d="M1507 4189 Q1000 3500 0 3115 Q1000 2000 2687 375 Q3000 400 4041 484"/>
        </animateMotion>
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
</template>

<script setup>
// 无需额外的脚本逻辑，所有动画都通过SVG动画实现
</script>

<style scoped>
.animated-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 25px;
  overflow: visible;
  transition: all 0.3s ease;
}

.logo-svg {
  width: 450px;
  height: 200px;
  filter: drop-shadow(0 0 20px rgba(0, 218, 237, 0.3));
  transition: all 0.3s ease;
  overflow: visible;
}

.animated-logo:hover .logo-svg {
  filter: drop-shadow(0 0 40px rgba(0, 218, 237, 0.6));
  transform: scale(1.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .animated-logo {
    height: 200px;
    padding: 20px;
  }
  
  .logo-svg {
    width: 360px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .animated-logo {
    height: 160px;
    padding: 15px;
  }
  
  .logo-svg {
    width: 300px;
    height: 135px;
  }
}

@media (max-width: 360px) {
  .animated-logo {
    height: 140px;
    padding: 10px;
  }
  
  .logo-svg {
    width: 260px;
    height: 117px;
  }
}
</style>