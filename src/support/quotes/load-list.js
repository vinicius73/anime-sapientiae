const loadQuotes = () => (import(/* webpackChunkName: "quotes-json" */ '../../.quotes.json'))
  .then(result => result.default)

export default loadQuotes
