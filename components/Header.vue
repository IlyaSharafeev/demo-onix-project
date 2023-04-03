<script lang="ts" setup>
</script>

<template lang="pug">
nav.bg-white.border-gray-200.shadow-xl(class='dark:bg-gray-900')
  .max-w-screen-xl.flex.flex-wrap.items-center.justify-between.mx-auto.p-4
      SwitcherThemes
      LanguagesDropdown
</template>

<style scoped>
.logo img {
    width: 100px;

}

.lang-menu .lang-menu__selected-lang {
    display: flex;
    gap: 10px;
    line-height: 2;
    cursor: pointer;
}

.lang-menu ul {
    margin: 0;
    padding: 0;
    display: block;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 30px;
    right: 0;
    width: 125px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
}


.lang-menu ul li {
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

.lang-menu ul li a {
    text-decoration: none;
    width: 125px;
    padding: 5px 10px;
    display: block;
}

.lang-menu ul li:hover {
    background-color: #f2f2f2;
}

.lang-menu ul li a:before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
}

.lang-menu:hover ul {
    display: block;
}
</style>
