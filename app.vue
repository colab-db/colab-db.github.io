<template>
	<div class="dark:bg-[#0c0c0c] dark:text-white">
		<NuxtPage />
	</div>
</template>


<script setup>

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Colab DB` : 'Colab DB';
	}
})

</script>