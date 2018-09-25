import rp from 'request-promise-native'

const fetchTreeWithRetry = async (url, options, n) => {
  for (let i = 0; i < n; i++) {
    try {
      const res = await rp.get(url, options)
      return res
    } catch (err) {
      console.log(`Retry number ${i + 1} failed, ${n - i - 1} retries left`)
      const isLastAttempt = i + 1 === n
      if (isLastAttempt) {
        console.log('All retry attempts have failed. Aborting request.')
        throw new Error('MAX_RETRY_EXCEEDED')
      }
    }
  }
}

export default fetchTreeWithRetry
