import DefaultTheme from 'vitepress/theme'
import { Underline } from '@theojs/lumen'
import WechatQRCode from '../components/WechatQRCode.vue'
import AnimatedLogo from '../components/AnimatedLogo.vue'
import Layout from './Layout.vue'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp: ({ app }) => {
        app.component('Home', Underline)
        app.component('WechatQRCode', WechatQRCode)
        app.component('AnimatedLogo', AnimatedLogo)
    }
}