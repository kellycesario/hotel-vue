<script setup>
import Button from "@atoms/Button/index.vue"
import { onMounted, ref } from "vue"

const showModal = ref(shouldShowModal())
let deferredPrompt = null

function shouldShowModal() {
  if (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone
  ) {
    return false
  }
  return localStorage.getItem("showModal") !== "false"
}

const closeModal = () => {
  showModal.value = false
  localStorage.setItem("showModal", "false")
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
        localStorage.setItem("showModal", "false")
      } else {
        console.log("User dismissed the install prompt")
      }
      deferredPrompt = null
      closeModal()
    })
  }
}

onMounted(() => {
  window.addEventListener("appinstalled", () => {
    localStorage.setItem("showModal", "false")
    showModal.value = false
  })

  if (showModal.value) {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      deferredPrompt = e
      showModal.value = true
    })
  }
})

const isCrossPlatformBrowser = !(isSafari() || isSamsungInternet())

function isSafari() {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return userAgent.includes("safari") && !userAgent.includes("chrome")
}

function isSamsungInternet() {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return userAgent.includes("samsung")
}
</script>

<template>
  <article v-if="showModal" class="modal">
    <div v-if="isCrossPlatformBrowser" class="modal__content">
      <p>Install the app to get the best experience!</p>
      <div class="modal__buttons">
        <Button isButton @click="installApp" label="Install App" />
        <Button isButton @click="closeModal" label="Close" />
      </div>
    </div>

    <div v-else class="modal__content">
      <p v-if="isSafari()">Instructions for Safari...</p>
      <p v-else-if="isSamsungInternet()">Instructions for Samsung Internet...</p>
      <p v-else>
        To install the app manually, follow these instructions for your browser...
      </p>
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
