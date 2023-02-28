import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
