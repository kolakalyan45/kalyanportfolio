import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,      // <-- add this line to expose to network
    port: 4000,      // optional, your dev port
  },
  build: {
    outDir: "dist",
  },
});
