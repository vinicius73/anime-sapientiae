<script>
import { loadRandom } from '../support/quotes'
import Quote from '../components/quote.vue'
import BtnMore from '../components/btn-more.vue'

export default {
  name: 'home',
  components: { Quote, BtnMore },
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
      <button class="new" type="button" @click="loadQuote">
        Nova <i class="fas fa-sync-alt"></i>
      </button>
      <BtnMore class="more" />
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
  display: flex;
  flex-direction: row;
  .new {
    flex: 1;
  }
}
.new {
  text-transform: uppercase;
}
</style>
