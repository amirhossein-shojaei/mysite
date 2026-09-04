import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/mysite/',
  plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['favicon.svg'], manifest: { name: 'Amirhossein Shojaei | Full-Stack Developer', short_name: 'Amirhossein', description: 'Professional portfolio of Amirhossein Shojaei.', theme_color: '#101318', background_color: '#101318', display: 'standalone', start_url: '/mysite/', scope: '/mysite/', icons: [{ src: 'pwa-192.svg', sizes: '192x192', type: 'image/svg+xml' }, { src: 'pwa-512.svg', sizes: '512x512', type: 'image/svg+xml' }] }, workbox: { navigateFallbackDenylist: [/^\/api\//] } })]
})
