import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    strategies: 'generateSW',
    registerType: 'autoUpdate',

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    workbox: {
      runtimeCaching: [{
        urlPattern: "https://motorsportsschedule.onrender.com/",
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "api-cache",
          cacheableResponse: {
            statuses: [0, 200]
          },
        }
      }]
    },

    manifest: {
      name: 'Motorsports Schedule',
      short_name: '⏰',
      description: 'Motorsports events schedule all in one place',
      theme_color: '#c70027',
      icons: [
        {
          "src": "pwa-64x64.png",
          "sizes": "64x64",
          "type": "image/png"
        },
        {
          "src": "pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        },
        {
          "src": "maskable-icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})