import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react(), checker({ typescript: true })],
    server: {
        host: 'local.dev.internal.prolab.az',
    },
    resolve: {
        alias: {
            '@components': new URL('./src/components', import.meta.url)
                .pathname,
            '@config': new URL('./src/config', import.meta.url).pathname,
            '@hooks': new URL('./src/hooks', import.meta.url).pathname,
            '@pages': new URL('./src/pages', import.meta.url).pathname,
            '@store': new URL('./src/store', import.meta.url).pathname,
            '@utils': new URL('./src/utils', import.meta.url).pathname,
            '@mockData': new URL('./src/mockData.ts', import.meta.url).pathname,
            '@assets': new URL('./src/assets', import.meta.url).pathname,
        },
    },
});
