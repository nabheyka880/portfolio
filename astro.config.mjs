import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    site: "https://nabheyka.work.vercel.app",
    fonts: [{
        provider: fontProviders.bunny(),
        name: "Comic Relief",
        cssVariable: "--font-comic-relief"
    }]
});