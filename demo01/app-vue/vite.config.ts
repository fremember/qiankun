import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: '/app-vue', // 和基座中配置的activeRule一致
    plugins: [
        vue(),
        qiankun('app-vue', { // 配置qiankun插件
            useDevMode: true
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        port: 3001
    }
})
