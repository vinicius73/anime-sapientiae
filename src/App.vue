<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
:root {
  --main-color-dark: #1a2420;
  --main-color-green: #009586;
  --main-color-dark-blue: #2c3e50;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--main-color-dark-blue);
  color: var(--main-color-green)
}

#app {
  padding: 0 0.5rem;
}
</style>
