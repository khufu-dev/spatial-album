import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webSpatial from "@webspatial/vite-plugin";
import { createHtmlPlugin } from "vite-plugin-html";
import process from "node:process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webSpatial(),
    createHtmlPlugin({ inject: { data: { XR_ENV: process.env.XR_ENV } } }),
  ],
  server: {
    open: true,
  },
});
