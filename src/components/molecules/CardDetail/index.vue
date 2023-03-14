<script setup>
import { useRoute } from "vue-router";
import database from "@db/hotels.json";
import Button from "@atoms/Button/index.vue";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <article class="card">
    <h1 class="card__title">Looks like you have good taste</h1>
    <img
      :src="database[id].image"
      :alt="database[id].title"
      class="card__image"
    />
    <h2 class="card__hotelTitle">
      {{ database[id].title }}
    </h2>
    <p class="card__location">
      This <strong class="card__emphasis"> wonderful</strong> hotel is located
      in {{ database[id].location }}
    </p>
    <p class="card__description">{{ database[id].description }}</p>
    <div class="card__box">
      <p class="card__price">
        Charge per day: <span>${{ database[id].price }}</span>
      </p>
      <p class="card__rate">
        Rating:
        <span>
          {{ database[id].rate }}
        </span>
      </p>
    </div>
    <Button
      :to="database[id].link"
      label="Visit the hotel's official website"
    />
  </article>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    gap: 4rem;
  }

  &__title {
    @include h1;
  }

  &__image {
    width: 100%;
    height: 70rem;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  &__hotelTitle {
    @include h2;
  }

  &__location,
  &__price,
  &__rate {
    width: 100%;
    border: 0.1rem solid var(--borderBlack);
    border-radius: 1.5rem;
    padding: 2rem 0;
    text-align: center;
    @include default-text;
  }

  &__emphasis {
    text-decoration: underline wavy var(--cyan) 0.2rem;
    transition: ease-in-out 0.1s;
  }

  &__description {
    @include default-text;
  }

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  &__price,
  &__rate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 15rem;
  }
}
</style>
