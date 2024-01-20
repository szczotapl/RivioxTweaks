<script setup>
import downtext from './components/downtext.vue'
import items from './components/items.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="./assets/logo.ico" />

    <div class="wrapper">
      <downtext msg="RivioxTweaks" />
    </div>
  </header>

  <main>
    <items/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>