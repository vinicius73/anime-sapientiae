const path = require('path')
const fs = require('fs')
const sourceFileName = path.join(__dirname, 'quotes.text')
const destFileName = path.join(__dirname, 'src/.quotes.json')

const readFile = () => new Promise((resolve, reject) => {
  fs.readFile(sourceFileName, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      reject(err)
      return
    }

    resolve(data)
  })
})

const writeFile = lines => {
  const data = JSON.stringify(lines)
  return new Promise((resolve, reject) => {
    fs.writeFile(destFileName, data, 'utf8', err => {
      if (err) {
        reject(err)
        return
      }

      resolve()
    })
  })
}

readFile()
  .then(data => data.split(`\n`))
  .then(writeFile)
  .then(() => {
    console.log(`created: ${destFileName}`) // eslint-disable-line no-console
  })
