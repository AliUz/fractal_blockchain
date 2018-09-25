import fetchTreeWithRetry from '../services/fetchTreeWithRetry'
import filterTreeHelper from '../helpers/filterTreeHelper'
import validateFilteredTree from '../helpers/validateFilteredTree'

function filterTreeByIndicators (indicatorIds = []) {
  if (!indicatorIds.length) {
    return Promise.reject(new Error('MISSING_INDICATORS'))
  }
  const url = 'https://kf6xwyykee.execute-api.us-east-1.amazonaws.com/production/tree/input'
  const options = Object.assign({ }, { uri: url }, { 'json': true })
  const retryAttempts = 5
  return fetchTreeWithRetry(url, options, retryAttempts)
    .then(tree => filterTreeHelper(tree, indicatorIds))
    .then(filteredTree => {
      if (!validateFilteredTree(filteredTree, indicatorIds)) {
        return Promise.reject(new Error('REQUESTED TREE DOES NOT EXIST'))
      }
      return filteredTree
    })
}

export default { filterTreeByIndicators }
