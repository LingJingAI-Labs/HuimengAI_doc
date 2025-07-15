<template>
  <div class="wechat-qr-container">
    <div class="wechat-icon" @mouseenter="showQR = true" @mouseleave="showQR = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wechat"
        viewBox="0 0 16 16">
        <path
          d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
        <path
          d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
      </svg>
    </div>
    <div v-if="showQR" class="qr-popup">
      <img src="/QRcode.png" alt="微信二维码" class="qr-image" />
      <p class="qr-text">扫码添加客服微信</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showQR = ref(false)
</script>

<style scoped>
.wechat-qr-container {
  position: relative;
  display: inline-block;
}

.wechat-icon {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  padding: 8px;
  border-radius: 4px;
}

.wechat-icon:hover {
  color: var(--vp-c-brand-1);
}

.qr-popup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  box-shadow: var(--vp-shadow-3);
  z-index: 1000;
  min-width: 200px;
  text-align: center;
  margin-top: 8px;
}

.qr-popup::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid var(--vp-c-divider);
}

.qr-popup::after {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--vp-c-bg-elv);
}

.qr-image {
  width: 150px;
  height: 150px;
  border-radius: 4px;
  margin: 0 auto 8px auto;
  display: block;
}

.qr-text {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>