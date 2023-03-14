<script setup>
const card = defineProps({
  image: String,
  location: String,
  title: String,
  price: Number,
  rate: Number,
  id: String
});
</script>

<template>
  <RouterLink :to="'/hotels/' + id" target="_blank">
    <article class="card">
      <img :src="image" alt="" class="card__image" />
      <p class="card__location">{{ location }}</p>
      <h3 class="card__title">{{ title }}</h3>
      <div class="card__box">
        <p class="card__price">${{ price }} Par Night</p>
        <p class="card__rate">{{ rate }}</p>
      </div>
    </article>
  </RouterLink>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--offWhite);
  border-radius: 1.6rem;
  min-height: 48rem;

  &__image {
    border-radius: 1.6rem 1.6rem 0rem 0rem;
    mix-blend-mode: normal;
    object-fit: cover;
    height: 30.2rem;
    width: 100%;
  }

  &__location {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--green);
    padding-left: 1.6rem;
    margin: 2.4rem 0 0.8rem;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    color: var(--darkGray);
    padding-left: 1.6rem;
  }

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5.7rem 0 1.6rem;
    margin: 2.4rem 0 3.8rem;
  }

  &__price,
  &__rate {
    @include regular-label;
  }

  &:hover {
    box-shadow: 0rem 0rem 2rem var(--borderBlack);
  }
}
</style>
