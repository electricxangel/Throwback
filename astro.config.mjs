// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://electricxangel.github.io',
    base: '/throwback',
    fonts: [{
        provider: fontProviders.local(),
        name: "Bungee-regular",
        cssVariable: "--font-bungee-regular",
        options: {
            variants: [{
                src: ['./src/fonts/Bungee-regular.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }]
});
