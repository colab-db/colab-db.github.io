<template>
    <article class="
          lg:pt-20
          pt-10
          relative
          flex
          items-start
          lg:space-x-10
          px-[5%]
          lg:px-[10%]
          w-full
        ">
        <div class="w-full">
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

            <Comments />
        </div>

        <div class="w-2/3">
            <NuxtLink :to="props.post.url" class="
                      relative
                      inline-flex
                      items-center
                      justify-center
                      p-0.5
                      overflow-hidden
                      text-sm
                      font-medium
                      text-gray-900
                      rounded-lg
                      group
                      w-full
                      bg-gradient-to-br
                      from-purple-500
                      to-pink-500
                      hover:from-purple-600 hover:to-pink-600
                      hover:text-white
                      dark:text-white
                      focus:ring-4 focus:outline-none focus:ring-purple-200
                      dark:focus:ring-purple-800
                      my-3
                    ">
                <span class="
                        relative
                        px-5
                        py-2.5
                        transition-all
                        text-center
                        ease-in
                        duration-75
                        w-full
                        text-white
                        dark:bg-gray-900
                        rounded-md
                      ">
                    Launch
                </span>
            </NuxtLink>

            <img v-if="props.post.image != undefined" :src="props.post.image" :alt="props.post.title"
                class="max-h-48 mx-auto" />

            <!-- <github-button :href="'https://github.com/' + props.post.git"
                        data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star"
                        data-size="large" data-show-count="true" :aria-label="'Star' + props.post.github + '  on GitHub'">Star
                    </github-button> -->

            <div class="w-full px-4 py-4 rounded-lg border-2">
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
        </div>
    </article>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import GithubButton from "vue-github-button";
const props = defineProps(['post'])
</script>