<script setup>
import Card from "@molecules/Card/index.vue";
import database from "@db/hotels.json";
import Text from "@atoms/Text/index.vue";
import Button from "@atoms/Button/index.vue";

const cards = defineProps({
  title: {
    type: String,
    default: "Our Most Popular Hotels",
  },
  text: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  label: {
    type: String,
    default: "View All",
  },
  to: {
    type: String,
    default: "#/hotels",
  },
  startIndex: {
    type: String,
    default: "0",
  },
  endIndex: {
    type: String,
    default: "3",
  },
});

</script>

<template>
  <section class="cards">
    <h2 class="cards__title">{{ title }}</h2>
    <article class="cards__headline">
      <Text :content="text" />
      <Button :label="label" :to="to" />
    </article>
    <article class="cards__container">
      <Card
        v-for="data in database.slice(startIndex, endIndex)"
        :key="data.id"
        :location="data.location"
        :title="data.title"
        :price="data.price"
        :rate="data.rate"
        :image="data.image"
        :id="data.id"
      />
    </article>
  </section>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    gap: 4rem;
    padding: 4rem;
  }

  &__headline {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: end;
      align-items: center;
    }
  }

  &__title {
    @include h2;
  }

  &__container {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
