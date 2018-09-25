import express from 'express'
import genericResponseHandler from '../responseHandler'
import treeController from '../controllers/tree'

const trees = express.Router()
/**
 * @params req.params.queryText {String} Array of indicator ids
 */
trees.get('/input', (req, res, next) => {
  const query = req.query
  const indicatorIds = query.indicator_ids
  treeController.filterTreeByIndicators(indicatorIds)
    .then(filteredTree => genericResponseHandler(res, 200, filteredTree))
    .catch(next)
})

export default trees
