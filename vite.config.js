import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// 路径别名
	resolve: {
		alias: {
			'@': path.resolve(path.resolve(), './src'),
		},
	},

	// 开启 less 预处理器
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
});
