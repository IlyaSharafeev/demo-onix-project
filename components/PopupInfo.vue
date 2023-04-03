<template>
  <!-- Overlay element -->
    <div id="overlay" @click="$hideModal" ref="overlay"
         class="fixed hidden z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"></div>

  <!-- The dialog -->
    <div id="dialog" ref="dialog"
         class="bg-white dark:bg-gray-600 hidden text-center text-gray-900 dark:text-white fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
        <h1 class="text-2xl font-semibold" id="title-modal">Dialog Title</h1>
        <div class="py-5 border-t border-b border-gray-300">
            <p id="description-modal"></p>
        </div>
        <div class="flex justify-between">
            <!-- This button is used to close the dialog -->
            <button id="close" @click="$hideModal"
                    class="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md uppercase">
                {{$t("button_close")}}
            </button>
            <a id="popup-donate-button" href="" target="_blank">
                <button
                        class="px-5 py-2 bg-green-400 hover:bg-green-700 text-white cursor-pointer rounded-md uppercase">
                    {{$t("button_donate")}}
                </button>
            </a>
        </div>
    </div>
</template>

<script setup>
const {$hideModal} = useNuxtApp()

const overlay = ref(null);
const dialog = ref(null);
</script>

<style scoped>

</style>
