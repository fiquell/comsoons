import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig(function ({ command }) {
  const config = {
    plugins: [react(), imagetools()],
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };

  if (command !== "serve") {
    config.base = "/comsoons/";
  }

  return config;
});
