import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => ['OtherComponents', 'QuillEditor'].includes(tag),
		}
	},
	target: "static",
        generate:{
	  crawler:true,
		routes:['/notebooks/colabfold']
	},
	build: {
		extractCSS: true,
		transpile: ['@headlessui/vue'],
	},
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
