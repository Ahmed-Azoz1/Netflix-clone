import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'



const manifestForPlugin = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: 'Netflix-Clone',
    short_name: 'Netflix-Clone',
    theme_color: '#ffffff',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait',
    icons: [
        {
            src: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
        },
        {
            src: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
        },
        {
            src: '/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
        },
        {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
        }
    ],
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react(),VitePWA(manifestForPlugin)],
})


// // import dotenv package
// import dotenv from 'dotenv';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // run package config
// dotenv.config();
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// // define process env
//   define: {
//     'process.env': process.env
//   }
// });
