<template lang="pug">
figure.flex.flex-col.items-center.justify-center.m-4.shadow-xl.text-center.bg-white.border-b.border-gray-200.cursor-pointer(class='dark:bg-gray-800 dark:border-gray-700 hover:shadow-gray-600/50 hover:scale-105 p-4 sm:p-8' @click="$showModal($t(card.title), $t(card.description), card.href)")
  blockquote.max-w-2xl.mx-auto.mb-4.text-gray-500(class='lg:mb-8 dark:text-gray-400')
            h3.text-lg.font-semibold.text-gray-900.line-clamp-1.border-solid.border-b.border-stone-500(class='dark:text-white pb-1.5 text-base md:text-lg' :title="$t(card.title)") {{$t(card.title)}}
            p.my-4.line-clamp-4.text-xs(class="md:text-sm") {{$t(card.description)}}
  figcaption.flex.items-center.justify-center.space-x-3.w-6.h-6
            img(src="@/assets/img/icon-info.svg")
</template>

<script lang="ts" setup>
const { $showModal } = useNuxtApp()

defineProps({
    card: { type: Object, required: true },
})
</script>

<style scoped lang="scss">
.line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
