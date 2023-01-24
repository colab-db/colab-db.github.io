<template>
  <div class="min-h-screen">

    <Head>
      <Title>Interactive Notebooks</Title>
      <Meta name="description"
        content="Colab DB curates high quality jupyter notebooks on Google Colab and other platforms" />

    </Head>

    <Nav :showsearch="true" v-model="searchQuery" />

    <main class="container mx-auto lg:px-12 md:px-4">
      <section class="pt-6 md:pt-20">
        <h1 class="
            lg:text-3xl
            text-lg
            py-2
            leading-normal
            font-semibold
            text-center
          ">
          Public notebooks hosted on Binder, Colab or Huggingface
        </h1>
        <h1 class="
            lg:text-5xl
            text-2xl text-center
            leading-normal
            font-bold
            rainbow-text
            mb-2
            pb-2
          ">
          Biology. Chemistry. Machine Learning.
        </h1>
      </section>
      <section class="px-[0%] lg:pt-20 pt-14 flex">
        <div class="w-1/5 hidden lg:block">
          <Filter ref="filtercomponent" @update:filters="updateFilters" />
        </div>
        <div class="w-full lg:w-4/5 ">
          <FilterBar @update:sort="updateSort" @update:showmobilefilters="showMenu"
            :len-notebooks="filteredNotebooks.length" :q="searchQuery"></FilterBar>
          <div class="grid grid-cols-1 grid-flow-row lg:grid-cols-3 lg:gap-3 px-3 md:px-0">

            <div v-if="filteredNotebooks.length == 0" class="flex items-center flex-col bg-gray-100 py-4">
              <Icon icon="iconoir:file-not-found" class="text-gray-500 w-12 h-12" />
              <div class="text-xl font-bold pt-4">Sorry</div>
              <div class="text-center font-medium pb-6">
                No notebooks found
              </div>

            </div>
            <template v-for="(b, i) in filteredNotebooks" :key="i">
              <div class="pb-12 rounded-lg border-2 h-auto relative">
                <NuxtLink :to="b._path" class="p-4">
                  <img class="
                    lg:h-48
                    md:h-36
                    w-full
                    object-contain object-center
                    rounded-t-lg
                    -mt-1
                  " :src="previewImage(b)" alt="blog" />
                </NuxtLink>
                <div class="px-4">
                  <NuxtLink :to="`${b._path}`" class="">
                    <h2 class="text-xl pt-4 font-semibold rainbow-text">
                      {{ b.title }}
                    </h2>

                    <p class="text-sm py-3">{{ b.description }}</p>
                    <!-- Loop over files inside the content dir -->
                  </NuxtLink>
                  <div class="flex flex-wrap space-x-1">
                    <span v-for="t in b.tags" class="
                      bg-blue-100
                      text-blue-800 text-sm
                      font-medium
                      px-2.5
                      py-0.5
                      m-1
                      rounded
                      dark:bg-blue-200 dark:text-blue-800
                      whitespace-nowrap
                    " :key="t">{{ t }}</span>
                  </div>
                  <div class="absolute bottom-0 w-full -mx-6 px-4 py-2">

                    <div class="flex items-center justify-between space-x-2">
                      <NuxtLink :to="'https://github.com/' + b.git" class="p-0.5">
                        <Icon icon="ant-design:github-filled" class="text-gray-500 w-7 h-7" />
                      </NuxtLink>
                      <div class="flex justify-end space-x-2">


                        <div class="flex items-center text-xs space-x-2">

                          <Icon icon="ant-design:star" class="text-gray-500 w-5 h-5" />
                          <span>{{ getLikesStars(b._id) }} </span>
                        </div>
                        <div class="flex items-center text-xs space-x-2">

                          <Icon icon="ant-design:comment" class="text-gray-500 w-5 h-5" />
                          <span v-if="b.n_comments > 0">{{ b.n_comments }} </span>
                          <span v-else>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </section>
      <Foot />
    </main>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, reactive, computed, toRaw } from 'vue'

import Fuse from 'fuse.js/dist/fuse.basic.esm'
import metadata from '../content/metadata.json'

const fuseOptions = {
  threshold: 0.5,
  ignoreLocation: true,
  keys: [
    'title',
    'category',
    'creator.name',
    'creator.github',
    'description',
    'type',
    'git',
    'tags',
    'used_software',
  ]
}

function getLikesStars(id) {
  id = id.replace("content:notebooks:", "").replace(".md", "")
  let stars = metadata.find(x => x.id === id)['stars'];
  let likes = metadata.find(x => x.id === id)['likes'];
  if (stars > likes && stars > 0) {
    return stars
  } else if (likes > stars && likes > 0) {
    return likes
  } else {
    return 0
  }
}
const searchQuery = ref("")
const filters = reactive({
  category: [],
  software: [],
  type: '',
  sort: "Newest"
})
const { data: notebooks } = await useAsyncData("colabs", () =>
  queryContent("notebooks").find()
);

notebooks.value.forEach((nb, i) => {
  let id = nb._id.replace("content:notebooks:", "").replace(".md", "")
  let m = metadata.find(x => x.id === id)
  notebooks.value[i].likes = m.likes
  notebooks.value[i].stars = m.stars
  notebooks.value[i].added = m.added
  notebooks.value[i].n_comments = m.n_comments


})
console.log(notebooks.value)
const fuse = computed(() => {
  //const fuseIndex = Fuse.createIndex(fuseOptions.keys, notebooks)

  return new Fuse(toRaw(notebooks.value), fuseOptions) //, fuseIndex)
})


function updateFilters(f) {
  filters.category = f.category;
  filters.software = f.software;
  filters.type = f.type;
}
function updateSort(f) {
  filters.sort = f;
}
const filtercomponent = ref();
function showMenu() {
  filtercomponent.value.showMenu()
}
const filteredNotebooks = computed(() => {
  if (notebooks.value.length == 0) {
    return []
  }
  let nbs = null
  if (searchQuery.value != "") {
    nbs = fuse.value.search(toRaw(searchQuery.value)).map(r => r.item)
  } else {
    nbs = notebooks.value
  }

  nbs.sort(function (a, b) {
    if (filters.sort === "Most stars") {

      let stars_a = a.stars > a.likes ? a.stars : a.likes
      let stars_b = b.stars > b.likes ? b.stars : b.likes
      return stars_b - stars_a
    } else if (filters.sort === "Most comments") {
      return b.n_comments - a.n_comments
    } else if (filters.sort === "Newest") {
      return b.added - a.added
    } else {
      return 0
    }

  })

  if (filters.type != "") {
    nbs = nbs.filter(function (nb) {
      if (typeof (nb.type) == "string") {
        return nb.type == filters.type
      } else {
        return nb.type.includes(filters.type)
      }
    })
  }
  if (filters.software.length > 0) {
    nbs = nbs.filter(nb => filters.software.some(c => nb.used_software.includes(c)))
  }
  nbs = nbs.filter(nb => filters.category.includes(nb.category))
  return nbs
})

function previewImage(b) {
  if (b.image != undefined) {
    return b.image;
  }
  try {
    url = new URL(b.image);
    return b.image;
  } catch (_) {
    if (b.type == "colab") {
      return "/colab.svg";
    }
    else if (b.type == "binder") {
      return "/binder.svg";
    } else if (b.type == "huggingface") {
      return "/huggingface.svg"
    }
    return "jupyter.svg"
  }
}

</script>


