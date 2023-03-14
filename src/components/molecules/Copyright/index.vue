<script setup>
import Svg from "@ions/Svg/index.vue";
import Text from "@atoms/Text/index.vue";
</script>

<template>
  <article class="copy">
    <Text
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    />
    <Text content="Hotel Vue - All Rights Reserved ©" />
    <div class="copy__icons">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="Come visit our facebook page"
      >
        <svg width="56" height="56" viewBox="0 0 56 56">
          <use href="#facebook" xlinkHref="#facebook" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Come visit our instagram page"
      >
        <svg width="56" height="56" viewBox="0 0 56 56">
          <use href="#instagram" xlinkHref="#instagram" />
        </svg>
      </a>

      <a
        href="https://www.google.com.br/"
        target="_blank"
        aria-label="Come visit our google reviews"
      >
        <svg width="56" height="56" viewBox="0 0 56 56">
          <use href="#google" xlinkHref="#google" />
        </svg>
      </a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.copy {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  &__icons {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 1.5rem;
  }
}
</style>
