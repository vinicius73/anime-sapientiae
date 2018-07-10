<script>
export default {
  name: 'quote',
  props: {
    quote: String
  }
}
</script>

<template>
  <p>{{ quote }}</p>
</template>

<style lang="scss" scoped>
  p {
    font-size: 1.5rem;
    padding: 1rem;
    color: #fff;
    background-color: var(--main-color-green);
  }
</style>
