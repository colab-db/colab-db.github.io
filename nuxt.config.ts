import { defineNuxtConfig } from "nuxt";

import data from './routes.json'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	// vue: {
	// 	compilerOptions: {
	// 		isCustomElement: (tag) => ['OtherComponents', 'QuillEditor'].includes(tag),
	// 	}
	// },
	target: "static",
	generate: {
		crawler: true,
		routes: data['routes']
	},
	target: "static",
        generate:{
	  crawler:true,
		routes:['/notebooks/colabfold','/notebooks/colabfold_advanced','/notebooks/dmasifcolab', '/notebooks/proteinmpnn', '/notebooks/rdkit-etkdg']
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
