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
                safelist: [
                            /^navbar/,
                            /^container/,
                            /^row/,
                            /^col/,
                            /^btn/,
                            /^dropdown/,
                            /^nav/,
                            /^bg-/,
                            /^text-/,
                            /^d-/,
                            /^flex/,
                          ]

              }),
            ]
          : []),
      ],
    },
  },
}));
