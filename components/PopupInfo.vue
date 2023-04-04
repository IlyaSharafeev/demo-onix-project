<template lang="pug">
#overlay.fixed.hidden.z-40.w-screen.h-screen.inset-0.bg-gray-900.bg-opacity-60(@click='$hideModal' ref='overlay')
#dialog.bg-white.hidden.text-center.text-gray-900.fixed.z-50.w-96.rounded-md.px-8.py-6.space-y-5.drop-shadow-lg(ref='dialog' class='dark:bg-gray-600 dark:text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')
  h1#title-modal.text-2xl.font-semibold Dialog Title
  .py-5.border-t.border-b.border-gray-300
    p#description-modal
  .flex.justify-between
    button#close.px-5.py-2.bg-indigo-500.text-white.cursor-pointer.rounded-md.uppercase(@click='$hideModal' class='hover:bg-indigo-700')
      | {{$t("button_close")}}
    a#popup-donate-button(href='#' target='_blank')
      button.px-5.py-2.bg-green-400.text-white.cursor-pointer.rounded-md.uppercase(class='hover:bg-green-700')
        | {{$t("button_donate")}}
</template>

<script lang="ts" setup>
const {$hideModal} = useNuxtApp()

const overlay = ref(null);
const dialog = ref(null);
</script>

<style scoped lang="scss"></style>
