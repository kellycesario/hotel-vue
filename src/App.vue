<script setup>
import Svg from "@ions/Svg/index.vue";
import Header from "@organisms/Header/index.vue";
import Footer from "@organisms/Footer/index.vue";
import Modal from "@molecules/Modal/index.vue";
</script>

<template>
  <section class="layout">
    <Svg />
    <Header />
    <RouterView />
    <Footer />
    <Modal />
  </section>
</template>

<style lang="scss" scoped>
.layout {
  @include layout;
}
</style>
