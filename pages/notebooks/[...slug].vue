<template>
    <div>

        <Head>
            <Title>{{ post.title }}</Title>
            <Meta name="description" :content="post.description" />

        </Head>

        <Nav />
        <main>
            <Notebook :post="post" v-if="isNotebook(post.type)" />
            <Huggingface :post="post" v-if="post.type == 'huggingface'" />
        </main>
        <Foot />
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import GithubButton from "vue-github-button";

const slug = useRoute().params.slug.toString().replace(/,/g, "/");
const nbtypes = ["binder", "colab", "jupyter"]
const { data: post } = await useAsyncData(slug, () => {
    return queryContent("/notebooks/" + slug).findOne();
});

function isNotebook(t) {
    if (typeof t === "string") {
        return nbtypes.includes(t)
    } else {
        return t.some(t => nbtypes.includes(t))
    }
}

// useHead({
//     title: post.title,
//     viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//     charset: 'utf-8',
//     meta: [
//         { name: 'description', content: "test" }
//     ]
// })
</script>

<style scoped>
/* .blog-link {
  @apply prose-a: text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
} */
</style>

