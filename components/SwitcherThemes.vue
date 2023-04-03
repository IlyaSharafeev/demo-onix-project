<template lang="pug">
label.relative.inline-flex.items-center.cursor-pointer
  input.sr-only.peer(type='checkbox' value='' :checked="isChecked" @click="switchTheme")
  .w-11.h-6.bg-gray-200.rounded-full.peer(class="peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600")
  span.ml-3.text-sm.font-medium.text-gray-900(class='dark:text-gray-300')
</template>

<script lang="ts" setup>
const isChecked = ref(true);

const switchTheme = () => {
    isChecked.value = !isChecked;
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    }
}
</script>

<style scoped>

</style>
