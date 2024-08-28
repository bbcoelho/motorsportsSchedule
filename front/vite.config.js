import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Motorsports Schedule',
      short_name: 'MSS',
      description: 'Motorsports events schedule all in one place',
      theme_color: '#3367D6',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})

// WITH REGISTER TYPE
// export default defineConfig({
//     plugins: [
//         VitePWA({
//             manifest: {
//                 "short_name": "MSS",
//                 "name": "Motorsports Schedule",
//                 "icons": [
//                     {
//                         "src": "/src/images/icons-vector.svg",
//                         "type": "image/svg+xml",
//                         "sizes": "256x256"
//                     },
//                     {
//                         "src": "/src/images/icons-192.png",
//                         "type": "image/png",
//                         "sizes": "192x192"
//                     },
//                     {
//                         "src": "/src/images/icons-512.png",
//                         "type": "image/png",
//                         "sizes": "512x512"
//                     }
//                 ],
//                 "background_color": "#3367D6",
//                 "display": "standalone",
//                 "scope": "/",
//                 "theme_color": "#3367D6",
//                 "description": "Motorsports events schedule all in one place"
//             },
//             registerType: 'autoUpdate',
//             devOptions: {
//                 enabled: true
//             }
//         })
//     ]
// })