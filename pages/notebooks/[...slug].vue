<template>
    <div>

        <Head>
            <Title>{{ post.title }}</Title>
            <Meta name="description" :content="post.description" />
        </Head>
        <Nav :showsearch="false" />
        <main>
            <Notebook :post="post" v-if="isNotebook(post.type)" />
            <Huggingface :post="post" v-if="post.type == 'huggingface'" />
        </main>
        <Foot />
    </div>
</template>

<script setup>

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
</script>


