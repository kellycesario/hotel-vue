<script setup>
import Button from "@atoms/Button/index.vue"
import { onMounted, ref } from "vue"

const showModal = ref(false)
let deferredPrompt = null

const closeModal = () => {
  showModal.value = false
}

const installApp = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      deferredPrompt = null
      closeModal()
    })
  }
}

onMounted(() => {
  if (
    !window.matchMedia("(display-mode: standalone)").matches &&
    !window.navigator.standalone
  ) {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      deferredPrompt = e
      showModal.value = true
    })
  }
})
</script>

<template>
  <article v-if="showModal" class="modal">
    <div class="modal__content">
      <p>Install the app to get the best experience!</p>
      <div class="modal__buttons">
        <Button isButton @click="installApp" label="Install App" />
        <Button isButton @click="closeModal" label="Close" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: var(--darkGray);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;
    padding: 0.2rem;
    background-color: var(--offWhite);
    border: 2px solid var(--green);
    text-align: center;
    width: 80%;
    height: 50%;
    @include default-text;
  }

  &__buttons {
    display: flex;
    gap: 2rem;
  }
}
</style>
