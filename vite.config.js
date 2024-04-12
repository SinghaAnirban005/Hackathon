// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     manifest: true,
//     rollupOptions: {
//       input: './src/main.jsx',
//     },
//   },
//   server: {
//     proxy: {
//       "/api": "http://localhost:3000/", // the address that u serve in the backend 
//     },
//   },
// })


export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
});
