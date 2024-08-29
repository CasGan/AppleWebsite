import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "cassey-gan",
    project: "javascript-react-mn"
  })],

  build: {
    sourcemap: true
  }
})