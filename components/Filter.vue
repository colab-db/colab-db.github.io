<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 flex z-40">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="
                  ml-auto
                  relative
                  max-w-xs
                  w-full
                  h-full
                  bg-white
                  shadow-xl
                  py-4
                  pb-12
                  flex flex-col
                  overflow-y-auto
                ">
                <div class="px-4 flex items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" class="
                      -mr-2
                      w-10
                      h-10
                      bg-white
                      p-2
                      rounded-md
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    " @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <div class="mt-4 border-t border-gray-200">
                  <h3 class="sr-only">Categories</h3>
                  <ul role="list" class="font-medium text-gray-900 px-2 py-3">
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

                  <Disclosure as="div" v-for="section in filters" :key="section.id"
                    class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton class="
                          px-2
                          py-3
                          bg-white
                          w-full
                          flex
                          items-center
                          justify-between
                          text-gray-400
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
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                          class="flex items-center">
                          <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                            :value="option.value" type="checkbox" :checked="option.checked" class="
                              h-4
                              w-4
                              border-gray-300
                              rounded
                              text-indigo-600
                              focus:ring-indigo-500
                            " />
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="ml-3 min-w-0 flex-1 text-gray-500">
                            {{ option.label }}
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto px-4 sm:px-6 lg:px-8">
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
      py3Dmol: { count: 3, checked: false },
      alphafold: { count: 3, checked: false },
      torch: { count: 3, checked: false },
      amber: { count: 3, checked: false },
      openmm: { count: 3, checked: false },
      rdkit: { count: 3, checked: false },
      pymatgen: { count: 3, checked: false },
      rosetta: { count: 3, checked: false },
    },
  },
  category: {
    name: "Category",
    open: true,
    options: {
      biology: { count: 3, checked: true },
      chemistry: { count: 3, checked: true },
      materials: { count: 3, checked: true },
      physics: { count: 3, checked: true },
    },
  },
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
  return s
})

onMounted(() => {
  emit('update:filters', selected.value)
})

const mobileFiltersOpen = ref(false);
</script>