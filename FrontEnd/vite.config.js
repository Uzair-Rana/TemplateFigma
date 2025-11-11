import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ no tailwind import here
export default defineConfig({
    plugins: [react(),],
});
