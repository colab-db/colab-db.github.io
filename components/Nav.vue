<template>
  <header class="sticky top-0  bg-white border-b  z-50">
    <div class="container mx-auto  flex items-center justify-between h-20 px-3  lg:px-12 md:px-0">
      <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl hidden lg:block">
        <span class="rainbow-text">Colab DB</span>
      </NuxtLink>

      <div class="flex shadow-sm w-full px-3 max-w-xl flex-auto" v-if="showsearch">
        <label class="relative flex-1">
          <!-- :class="isSearchOpen ? 'flex' : 'hidden md:flex'"  v-model="searchModel"-->
          <input type="text" ref="searchEl" aria-label="Search" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="block bg-gray-200/40 dark:bg-secondary-dark/50 w-full py-1 px-3 h-10 text-base leading-6 placeholder-gray-400 dark:placeholder-secondary-light transition duration-150 ease-in-out appearance-none md:pr-10 rounded-lg focus:ring-3 focus:ring-sky-dark focus:ring-opacity-50 focus:outline-none focus:placeholder-sky-darkest focus:dark:placeholder-secondary-lightest sm:flex-1"
            placeholder="Search notebooks (name, category, software, etc.)">
          <span
            class="absolute hidden px-2 text-gray opacity-50 bg-gray-200 dark:bg-secondary-dark rounded-md md:inline-block text-md top-2 bottom-2 right-2">/</span>
        </label>
      </div>


      <nav class="flex items-center space-x-7 text-gray-600">
        <template v-for="(n, i) in links" :key="`navLink-${i}`">
          <NuxtLink :to="n.link" class="inline-block nav-link hover:text-primary group">
            <div class="flex items-center space-x-2">
              <Icon :icon="n.icon" class="w-4 h-4" />
              <span class="font-medium"> {{ n.name }}</span>
            </div>
            <div class="
              h-0.5
              w-full
              bg-primary
              mt-1
              -translate-y-full
              scale-0
              group-hover:scale-100 group-hover:translate-y-full
              transition-all
            "></div>
          </NuxtLink>
        </template>
      </nav>
    </div>
  </header>
</template>



<script setup>
import { computed, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Icon } from "@iconify/vue";


const links = [
  {
    name: "Notebooks",
    icon: "carbon:blog",
    link: "/",
  },
  {
    name: "Submit",
    icon: "ion:send-outline",
    link: "/submit",
  },
];



defineProps({ 'modelValue': String, 'showsearch': Boolean })
defineEmits(['update:modelValue'])

const searchEl = ref(null);

function focusSearchInput() {
  searchEl.value.focus()
}

onMounted(() => {
  useEventListener('keypress', (event) => {
    if (event.key === '/' && !(event.target instanceof HTMLInputElement)) {
      event.preventDefault()
      focusSearchInput()
    }
  })
}
)
</script>


<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  @apply text-primary;
}
</style>
