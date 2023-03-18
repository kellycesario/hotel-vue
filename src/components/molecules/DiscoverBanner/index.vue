<script setup>
import Button from "@atoms/Button/index.vue";
import Text from "@atoms/Text/index.vue";
import discover from "/images/discover.png";
</script>

<template>
  <section class="discover">
    <article class="discover__container">
      <img :src="discover" alt="" class="discover__image" />
      <div class="discover__box">
        <h2 class="discover__title">Discover our History</h2>
        <Text
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's."
        />
        <Text
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum
      is simply dummy text of the printing and typesetting industry."
        />
        <Button label="Explore More" to="#/about-us" />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.discover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__container {
    display: flex;
    flex-direction: column;
    background-color: var(--lightGreen);
    border-radius: 1.6rem;
    margin: 2rem 2rem;
    max-width: 45rem;

    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr, 2fr);
      grid-template-rows: 1fr;
      max-width: 100%;
    }
  }

  &__image {
    width: 100%;
    border-radius: 1.6rem 1.6rem 0rem 0rem;
    padding: 0;
    object-fit: contain;

    @media screen and (min-width: 1024px) {
      grid-area: 1 / 1 / 2 / 2;
      object-fit: cover;
      height: 100%;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 2rem;
    @media screen and (min-width: 1024px) {
      grid-area: 1 / 2 / 2 / 3;
      padding: 8rem 4rem;
    }
  }

  &__title {
    @include h2;
  }
}
</style>
