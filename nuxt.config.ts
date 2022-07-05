import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['OtherComponents', 'QuillEditor'].includes(tag),
		}
	},
	build: {
		extractCSS: true,
		transpile: ['@headlessui/vue'],
	},
	target: "static",
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3,
			},
		},
		highlight: {
			theme: "dracula-soft",
		},
	},
});
