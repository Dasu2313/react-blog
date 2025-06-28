import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://dasu2313.github.io/react-blog',
  // server: {
  //   historyApiFallback: true,
  //   proxy: {
  //     '/api': {
  //       target: 'https://blog-platform.kata.academy',
  //       changeOrigin: true,
  //       secure: true,
  //       rewrite: (path) => path.replace(/^\/api/, '/api'),
  //     },
  //   },
  // },
});
