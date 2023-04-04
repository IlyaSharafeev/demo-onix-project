<template lang="pug">
.lang-menu(@click="showListLanguages = !showListLanguages", ref="menu", v-if="locale" )
  .lang-menu__selected-lang(class="dark:text-white")
    span.fi(:class="{'fi-gb': locale === 'en', 'fi-ua': locale === 'ua'}")
    | {{titleDropdown}}
  ul.lang-menu__list-languages(v-if="showListLanguages" class="dark:bg-[#1c1c1c] dark:text-white bg-white")
    li.lang-menu__list-languages-item(@click="changeLanguage('en')" class="hover:bg-[#e2e2e2] dark:hover:bg-[#3e3e3e]")
      span.fi.fi-gb.lang-menu__list-languages-item-flag
      span.lang-menu__list-languages-item-text English
    li.lang-menu__list-languages-item(@click="changeLanguage('ua')" class="hover:bg-[#e2e2e2] dark:hover:bg-[#3e3e3e]")
      span.fi.fi-ua.lang-menu__list-languages-item-flag
      span.lang-menu__list-languages-item-text Українська
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()

const titleDropdown = ref("");
const titleFlag = ref("");
const showListLanguages = ref(false);
const menu = ref(null);

const changeLanguage = (lang: string) => {
    switch (lang) {
        case 'en':
            titleDropdown.value = "English";
            titleFlag.value = "gb";
            setLocale("en");
            localStorage.setItem("lang", titleFlag.value);
            break;
        case 'ua':
            titleDropdown.value = "Українська";
            titleFlag.value = "ua";
            setLocale("ua");
            localStorage.setItem("lang", titleFlag.value);
            break;
    }
}

changeLanguage(locale.value);

onClickOutside(menu, () => showListLanguages.value = false)
</script>

<style scoped lang="scss">
.lang-menu {
    position: relative;

  .lang-menu__selected-lang {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    line-height: 2;
    cursor: pointer;
  }

  .lang-menu__list-languages {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 30px;
    right: 0;
    width: 150px;
    border-radius: 5px;
    box-shadow: 0 1px 10px rgba(0,0,0,0.2);

    .lang-menu__list-languages-item {
      list-style: none;
      text-align: left;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      padding: 5px 10px;

      .lang-menu__list-languages-item-text {
        text-decoration: none;
        width: 125px;
        padding: 5px 10px;
        display: block;
      }
    }
  }
}
</style>
