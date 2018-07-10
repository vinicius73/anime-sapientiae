const url = `quotes.json`

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
  const timeout = 14400000 // 4h

  setInterval(() => {
    if (Notification.permission === 'granted' && !!self.registration) {
      loadQuote()
        .then(showNotification)
    }
  }, timeout)
})
