<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="custom-social-links">
        <WechatQRCode />
      </div>
    </template>
    <template #home-hero-image>
      <AnimatedLogo />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import WechatQRCode from '../components/WechatQRCode.vue'
import AnimatedLogo from '../components/AnimatedLogo.vue'

const { Layout } = DefaultTheme
</script>

<style scoped>
.custom-social-links {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

@media (max-width: 768px) {
  .custom-social-links {
    display: none;
  }
}
</style>