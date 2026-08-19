// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Bungee-regular",
        cssVariable: "--font-bungee-regular",
        options: {
            variants: [{
                src: ['../src/fonts/Bungee-regular.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
});
