<template>
  <div class="bg-white">

    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-50" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
            leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enter-from="translate-x-full" enter-to="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                  leave-to="translate-x-full">
                  <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                    <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                      enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                      leave-to="opacity-0">
                      <div class="absolute top-0 right-0 mr-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button type="button"
                          class="rounded-md text-gray-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-black"
                          @click="mobileFiltersOpen = false">
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-10 w-10" aria-hidden="true" />
                        </button>
                      </div>
                    </TransitionChild>
                    <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div class="px-4 sm:px-6 font-bold text-xl">
                        Select filters
                      </div>
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <section aria-labelledby="category-heading" class="pt-6 pb-24">
                          <h2 id="category-heading" class="sr-only">Categories</h2>

                          <div class="text-lg">
                            <!-- Filters -->
                            <div class="">
                              <h3 class="sr-only">Categories</h3>
                              <ul role="list" class="
                  text-base
                  font-medium
                  text-gray-900
                  space-y-4
                  pb-6
                  border-b border-gray-200
                ">
                                <li v-for="(category, key) in subCategories" :key="key" class="flex items-center">
                                  <div @click="selectedType = key" class=""
                                    :class="selectedType == key ? 'text-indigo-500' : 'cursor-pointer'">
                                    {{ category.name }}
                                  </div>
                                  <div class="flex" v-if="selectedType == key">
                                    <span @click="selectedType = ''"
                                      class="cursor-pointer bg-multiselect-remove bg-center bg-no-repeat w-4 h-4 ml-1 opacity-50 hover:opacity-75">

                                    </span>
                                  </div>
                                </li>
                              </ul>

                              <Disclosure as="div" :defaultOpen="section.open" v-for="(section, secKey) in filters"
                                :key="secKey" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                  <DisclosureButton class="
                      py-3
                      bg-white
                      w-full
                      flex
                      items-center
                      justify-between
                      text-base text-gray-400
                      hover:text-gray-500
                    ">
                                    <span class="font-medium text-gray-900">
                                      {{ section.name }}
                                    </span>
                                    <span class="ml-6 flex items-center">
                                      <PlusSmIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                      <MinusSmIcon v-else class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                  <div class="space-y-4">
                                    <div v-for="(option, key, optionIdx) in section.options" :key="key"
                                      class="flex items-center">
                                      <input :id="`filter-${secKey}-${optionIdx}`" :name="`${secKey}[]`" :value="key"
                                        type="checkbox" :checked="option.checked"
                                        v-model="filters[secKey].options[key].checked" class="
                          h-4
                          w-4
                          border-gray-300
                          rounded
                          text-indigo-600
                          focus:ring-indigo-500
                        " />
                                      <label :for="`filter-${secKey}-${optionIdx}`"
                                        class="ml-3 text-base text-gray-600">

                                        {{ key }}
                                      </label>
                                    </div>
                                  </div>
                                </DisclosurePanel>
                              </Disclosure>
                            </div>
                            <button @click="updateSelectionMobile(selected)" class="relative w-full inline-flex items-center justify-center p-0.5
              overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500
              to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white
              focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white w-full dark:bg-gray-900
              rounded-md group-hover:bg-opacity-0 "> Update</span></button>
                          </div>
                        </section>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto px-4 sm:px-6 lg:px-6">
        <div class="
            relative
            z-10
            flex
            items-baseline
            justify-between
            pt-2
            pb-6
            border-b border-gray-200
          ">
          <h1 class="text-xl font-extrabold tracking-tight text-gray-900">
            Filter
          </h1>

        </div>

        <section aria-labelledby="category-heading" class="pt-6 pb-24">
          <h2 id="category-heading" class="sr-only">Categories</h2>

          <div class="">
            <!-- Filters -->
            <div class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="
                  text-sm
                  font-medium
                  text-gray-900
                  space-y-4
                  pb-6
                  border-b border-gray-200
                ">
                <li v-for="(category, key) in subCategories" :key="key" class="flex items-center">
                  <button @click="selectedType = key" class=""
                    :class="selectedType == key ? 'text-indigo-500' : 'cursor-pointer'">
                    {{ category.name }} <span class="bg-gray-200 p-1 rounded-full mx-1">{{ category.count }}</span>
                  </button>
                  <div class="flex" v-if="selectedType == key">
                    <button @click="selectedType = ''"
                      class="cursor-pointer bg-multiselect-remove bg-center bg-no-repeat w-4 h-4 ml-1 opacity-50 hover:opacity-75">

                    </button>
                  </div>
                </li>
              </ul>

              <Disclosure as="div" :defaultOpen="section.open" v-for="(section, secKey) in filters" :key="secKey"
                class="border-b border-gray-200 py-6" v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton class="
                      py-3
                      bg-white
                      w-full
                      flex
                      items-center
                      justify-between
                      text-sm text-gray-400
                      hover:text-gray-500
                    ">
                    <span class="font-medium text-gray-900">
                      {{ section.name }}
                    </span>
                    <span class="ml-6 flex items-center">
                      <PlusSmIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusSmIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, key, optionIdx) in section.options" :key="key" class="flex items-center">
                      <input :id="`filter-${secKey}-${optionIdx}`" :name="`${secKey}[]`" :value="key" type="checkbox"
                        :checked="option.checked" v-model="filters[secKey].options[key].checked" class="
                          h-4
                          w-4
                          border-gray-300
                          rounded
                          text-indigo-600
                          focus:ring-indigo-500
                        " />
                      <label :for="`filter-${secKey}-${optionIdx}`" class="ml-3 text-sm text-gray-600">

                        {{ key }}
                      </label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <button @click="emit('update:filters', selected)" class="relative w-full inline-flex items-center justify-center p-0.5
              overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500
              to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white
              focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 ">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white w-full dark:bg-gray-900
              rounded-md group-hover:bg-opacity-0 "> Update</span></button>
          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<script setup>

import { ref, reactive, computed, onMounted } from "vue";

const emit = defineEmits(['update:filters'])

import metadata from "../content/metadata.json"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/vue/solid";

const selectedType = ref("");
let mobileFiltersOpen = ref(false);



const subCategories = {
  colab: { name: "Google Colab", count: 0 },
  huggingface: { name: "Huggingface Spaces", count: 0 },
  binder: { name: "Binder/Jupyter", count: 0 },
};
const filters = reactive({
  software: {
    name: "Used software",
    open: false,
    options: {
      py3Dmol: { count: 0, checked: false },
    },
  },
  category: {
    name: "Category",
    open: true,
    options: {
      biology: { count: 0, checked: true },
      chemistry: { count: 0, checked: true },
      materials: { count: 0, checked: true },
      physics: { count: 0, checked: true },
    },
  },
});
metadata.forEach((item) => {
  item.type.forEach((type) => {
    if (type in subCategories) {
      subCategories[type].count += 1;
    }
  });
  item.used_software.forEach((software) => {
    if (software in filters.software.options) {
      filters.software.options[software].count += 1
    } else {
      filters.software.options[software] = { count: 1, checked: false }
    }
  });
  filters.category.options[item.category].count += 1
});


const selected = computed(() => {
  let s = {
    category: [],
    software: [],
    type: selectedType
  }
  for (const [secKey, section] of Object.entries(filters)) {
    for (const [key, option] of Object.entries(section.options)) {
      if (option.checked) {
        s[secKey].push(key);
      }
    }
  }
  emit('update:filters', s)
  console.log(selectedType)
  return s
})

onMounted(() => {
  emit('update:filters', selected.value)
})

function showMenu() {
  mobileFiltersOpen.value = true;
}

defineExpose({
  showMenu,
});

function updateSelectionMobile(selection) {

  mobileFiltersOpen.value = false;
  emit('update:filters', selection.value)
}
</script>