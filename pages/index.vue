<script lang="ts" setup>
import {CHARITY_ORGANISATIONS} from "~/data/CHARITY_ORGANISATIONS";
</script>

<template lang="pug">
div
  Header
  .grid.border.border-gray-200.shadow-sm(class='dark:border-gray-700 dark:bg-[#171515] md:grid-cols-2 pr-4 pl-4 sm:pr-24 sm:pl-24')
    CharityCard(v-for="(card, key) in CHARITY_ORGANISATIONS" :key="key" :card="card")
    PopupInfo
</template>

<style scoped lang="scss"></style>
