<script setup>
import Header from './components/header.vue';
import homePage from './components/homePage.vue';
import LoTrinh from './components/LoTrinh.vue';

import { onMounted } from 'vue'; 

onMounted(() => {
  feather.replace(); 
});
</script>

<template>
  <Header />
  <homePage />
  <LoTrinh />
</template>
