<template>
    <article class="
          lg:pt-20
          pt-10
          relative
          flex
          items-start
          lg:space-x-10
          px-[5%]
          w-full
        ">
        <div class="w-1/3">
            <ClientOnly>
                <ContentRenderer class="
                prose
                lg:prose-base
                prose-sm prose-slate
                blog-link
                pr-7
                w-full
              " :value="props.post">
                    <template #empty>
                        <p>No content found.</p>
                    </template>
                </ContentRenderer>
            </ClientOnly>
            <img v-if="props.post.image != undefined" :src="props.post.image" :alt="props.post.title"
                class="max-h-48 mx-auto" />

            <div class="w-full px-4 py-4 rounded-lg border-2">

                <a :href="'https://hf.space/' + props.post.git"
                    class="flex items-center space-x-2 hover:text-indigo-600 mb-4">
                    <img src="/huggingface.svg" alt="Huggingface Logo" class="w-6 h-6">
                    <span>{{ props.post.git }}</span>

                </a>
                <h4 class="text-lg font-semibold">Creators</h4>
                <div class="flex flex-col space-y-2">
                    <template v-for="(creator, k) in props.post.creator" :key="`creator-${k}`">
                        <div class="flex space-x-2 items-center">
                            <a class="
                      text-base text-gray-600
                      hover:text-primary-900
                      underline underline-offset-4
                      decoration-wavy decoration-primary/40
                      hover:decoration-primary
                      transition-all
                    ">
                                {{ creator.name }}
                            </a>
                            <Icon icon="ant-design:github-filled" class="text-gray-500 w-5 h-5" />
                            <Icon icon="ant-design:twitter" class="text-blue-500 w-5 h-5" />
                            <Icon icon="academicons:orcid" class="text-green-500 w-5 h-5" />
                        </div>
                    </template>
                </div>

                <h4 class="text-lg font-semibold mt-3">Tags</h4>
                <div class="flex items-center space-x-2">
                    <template v-for="(t, k) in props.post.tags" :key="`creator-${k}`">
                        <span class="
                    bg-blue-100
                    text-blue-800 text-sm
                    font-medium
                    px-2.5
                    py-0.5
                    m-1
                    rounded
                    dark:bg-blue-200 dark:text-blue-800
                    whitespace-nowrap
                  ">{{ t }}</span>
                    </template>
                </div>

                <h4 class="text-lg font-semibold mt-3">Used software</h4>
                <div class="flex items-center space-x-2">
                    <template v-for="(software, k) in props.post.used_software" :key="`software-${k}`">
                        <span class="
                    bg-blue-100
                    text-blue-800 text-sm
                    font-medium
                    px-2.5
                    py-0.5
                    m-1
                    rounded
                    dark:bg-blue-200 dark:text-blue-800
                    whitespace-nowrap
                  ">
                            {{ software }}</span>
                    </template>
                </div>
            </div>


            <Comments />
        </div>

        <div class="w-2/3 border-2 rounded-xl">
            <iframe :src="'https://hf.space/embed/' + props.post.git + '/'" frameBorder="0" title="Gradio app"
                class="container p-0 h-screen flex-grow space-iframe" allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media;
            fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi;
            oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock;
            xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin
            allow-scripts allow-downloads"></iframe>


        </div>
    </article>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import GithubButton from "vue-github-button";
const props = defineProps(['post'])
</script>