import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: ".github/workflows/build.yml",
  server: {
    port: 3000, // Replace with your desired port number
  },
  plugins: [react()],
});
