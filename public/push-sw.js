const url = `/quotes.json`

const loadQuote = () => fetch(url, {cache: 'force-cache'})
  .then(response => response.json())
  .then(list => {
    return list[Math.floor(Math.random() * list.length)]
  })

const showNotification = quote => {
  self.registration.showNotification('Nova frase', {
    body: quote,
    vibrate: [300, 150, 400],
    tag: 'new-quote',
    data: {
      dateOfArrival: Date.now()
    }
  })
}

self.addEventListener('activate', event => {
  setInterval(() => {
    if (Notification.permission === 'granted' && !!self.registration) {
      loadQuote()
        .then(showNotification)
    }
  }, ((1000 * 60) * 60) * 6)
})
