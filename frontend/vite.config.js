import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import purgecss from "@fullhuman/postcss-purgecss";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: "/",
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        ...(command === "build"
          ? [
              purgecss({
                content: ["./index.html", "./src/**/*.jsx", "./src/Navbar.css"],
                safelist: {
                  // Itt adhatsz meg olyan osztályokat, amiket nem szabad eltávolítani,
                  // mert pl. dinamikusan, string-ként vannak összeállítva a JS-ben.
                  // Például:
                  // standard: ['random-class-name'],
                  // deep: [/-(sm|md|lg|xl)$/], // Regex alapú
                },
              }),
            ]
          : []),
      ],
    },
  },
}));
