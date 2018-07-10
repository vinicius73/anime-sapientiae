import { random, size } from 'lodash-es'
import loadQuotes from './load-list'

const loadRandom = () => loadQuotes()
  .then(list => {
    const index = random(0, size(list) - 1)
    return list[index]
  })

export default loadRandom
