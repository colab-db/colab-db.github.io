<template>
    <div
        class="h-screen w-screen fixed bg-opacity-50 bg-gray-800  top-0 left-0 z-50 flex justify-center items-center pt-24">


        <div id="confirmation modal" tabindex="-1" aria-hidden="false"
            class=" overflow-y-auto overflow-x-hidden z-50 justify-center items-center  md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div class="flex justify-between mb-4 rounded-t sm:mb-5">
                        <div class="text-2xl md:text-3xl dark:text-white">
                            <h3 class="font-semibold rainbow-text">
                                Don't forget to submit your pull request
                            </h3>
                        </div>
                        <div>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="confirmation_modal" @click="$emit('closemodal')">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                    </div>
                    <div class="prose text-gray-600">
                        <p>We use GitHub to manage new entries and submitting this form will create a Pull Request
                            that our team can review.
                            <br />
                            After submitting your entry, you will need to sign in to
                            your Github Account and click the "Create Pull Request" button in the tab we opened for you.
                        </p>
                        <img class="mx-auto" src="
                            https://docs.github.com/assets/cb-26223/images/help/pull_requests/pullrequest-send.png"
                            alt="">
                        <p class="pb-2">
                            Once approved, your entry will be added to the list.

                        </p>

                    </div>
                    <div class="flex justify-center items-center">
                        <button type="submit" class="
                      relative
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      p-0.5
                      overflow-hidden
                      text-base
                      font-medium
                      
                      rounded-lg
                      group
                      bg-gradient-to-br
                      from-purple-500
                      to-pink-500
                      hover:from-purple-600 group-hover:to-pink-600
                      hover:text-white
                      text-white
                      focus:ring-4 focus:outline-none focus:ring-purple-200
                      dark:focus:ring-purple-800
                    ">
                            <span class="
                        w-full
                        px-5
                        py-2.5
                        transition-all
                        ease-in
                        duration-75
                        rounded-md
                      " @click="$emit('closereset')">
                                Close and reset form
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>