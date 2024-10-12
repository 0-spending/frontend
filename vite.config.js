import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA 모드에서 경로 문제를 해결하기 위한 설정
    historyApiFallback: true,
    cors:true, // 방화벽설정
  },
})


