<script setup>
import Header from './components/header.vue';
import homePage from './components/homePage.vue';
import LoTrinh from './components/LoTrinh.vue';
import DanhMuc from './components/DanhMuc.vue';
import HocPhan from './components/HocPhan.vue';
import GioiThieu from './components/GioiThieu.vue';
import Blog from './components/Blog.vue';
import Footer from './components/footer.vue';

import { onMounted } from 'vue'; 

onMounted(() => {
  feather.replace(); 
});
</script>
<template>
  <Header />
  <homePage />
  <LoTrinh />
  <DanhMuc />
  <HocPhan />
  <GioiThieu />
  <Blog />
  <Footer />
</template>
