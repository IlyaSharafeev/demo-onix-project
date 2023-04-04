<template lang="pug">
div.w-screen.h-screen
  Header
  .grid(class='dark:border-gray-700 dark:bg-[#171515] md:grid-cols-2 pr-4 pl-4 sm:pr-24 sm:pl-24 min-h-screen')
    CharityCard(v-for="(card, key) in CHARITY_ORGANISATIONS" :key="key" :card="card")
    PopupInfo
</template>

<script lang="ts" setup>
import {CHARITY_ORGANISATIONS} from "~/data/CHARITY_ORGANISATIONS";
</script>

<style scoped lang="scss"></style>
