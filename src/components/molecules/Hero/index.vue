<script setup>
import Text from "@atoms/Text/index.vue";
import banner from "/images/hero-banner.png";

const headline = defineProps({
  title: {
    type: String,
    default: "Find your perfect place to stay",
  },
  text: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  video: {
    type: String,
    default: "https://www.youtube.com/watch?v=09839DpTctU&ab_channel=Eagles",
  },
  image: {
    type: String,
    default: banner,
  },
});
</script>
<template>
  <article class="hero">
    <div class="hero__container">
      <h1 class="hero__title">{{ title }}</h1>
      <Text :content="text" />
      <div class="hero__video">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <use href="#play-video" xlinkHref="#play-video" />
        </svg>
        <a :href="video" target="_blank" class="hero__link">Watch video</a>
      </div>
    </div>
    <img :src="image" alt="" class="hero__image" />
  </article>
</template>
<style lang="scss" scoped>
.hero {
  background-color: var(--opacityGreen);
  border-radius: 0rem 0rem 2.5rem 2.5rem;
  max-width: 50rem;
  -webkit-transition: max-width 0.5s ease-in-out;
  transition: max-width 0.5s ease-in-out;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 0rem 5rem 5rem 0rem;
    max-width: fit-content;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    gap: 3rem;

    @media screen and (min-width: 1024px) {
      padding: 6rem;
      gap: 4rem;
    }
  }

  &__title {
    @include h1;
  }

  &__video {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
  }

  &__link {
    @include regular-label;
    font-weight: bold;

    &:hover {
      text-decoration: underline wavy var(--cyan) 0.2rem;
      transition: ease-in-out 0.1s;
    }
  }

  &__image {
    width: 100%;
    border-radius: 0rem 0rem 2.5rem 2.5rem;
    height: 100%;

    @media screen and (min-width: 1024px) {
      border-radius: 0rem 5rem 5rem 0rem;
    }
  }
}
</style>
