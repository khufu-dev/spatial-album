import { defineConfig } from "npm:vite";
import react from "npm:@vitejs/plugin-react";
import webSpatial from "npm:@webspatial/vite-plugin";
import { createHtmlPlugin } from "npm:vite-plugin-html";
import process from "node:process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webSpatial(),
    createHtmlPlugin({
      inject: {
        data: {
          XR_ENV: process.env.XR_ENV,
        },
      },
    }),
  ],
});
