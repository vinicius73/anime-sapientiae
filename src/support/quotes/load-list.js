const url = `${process.env.BASE_URL}quotes.json`

const loadQuotes = () => fetch(url, {cache: 'force-cache'})
  .then(response => response.json())

export default loadQuotes
