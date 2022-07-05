<template>
    <footer class="w-full text-center my-8">
        <span class="text-center text-sm text-gray-600 mb-2">built by</span>
        <div class="flex justify-center items-center">
            <div class="flex items-center space-x-5">

                <a href="https://twitter.com/simonduerr"
                    class="text-gray-500 hover:text-gray-900 flex items-center space-x-2">
                    <Icon icon="ant-design:twitter" class="w-5 h-5" />
                    <span>Simon Dürr</span>
                </a>
                <a href="https://github.com/kjappelbaum"
                    class="text-gray-500 hover:text-gray-900 flex items-center space-x-2">
                    <Icon icon="ant-design:github-filled" class="w-5 h-5" />
                    <span>Kevin Jablonka</span>
                </a>
            </div>
        </div>
    </footer>
</template>

 <script setup>
 import { Icon } from "@iconify/vue";
 </script>