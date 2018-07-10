<script>
import { loadRandom } from '../support/quotes'
import Quote from '../components/quote.vue'

export default {
  name: 'home',
  components: { Quote },
  data: () => ({
    isLoading: true,
    quote: ''
  }),
  methods: {
    loadQuote () {
      loadRandom()
        .then(quote => {
          this.quote = quote
        })
    }
  },
  mounted () {
    this.loadQuote()
  }
}
</script>

<template>
  <div id="home" class="app-content">
    <div class="content">
      <Quote v-bind="{ quote }" />
    </div>
    <footer>
      <button type="button" @click="loadQuote">Nova</button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .content {
    flex: 1;
  }
}

footer {
  margin-bottom: 1rem;
}

button {
  border: none;
  padding: 1rem;
  display: block;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--main-color-dark);
}
</style>
