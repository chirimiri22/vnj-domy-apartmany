import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/vnj-domy-apartmany",
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    origin: "http://localhost:3000",
  },
  preview: {
    port: 3000,
  },
  envPrefix: "REACT_APP_",
});
