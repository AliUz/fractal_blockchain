import 'should-sinon'
import filterTreeHelper from '../../../lib/helpers/filterTreeHelper'
import mockTreeData from '../../fixtures/trees'

describe('helpers', () => {
  describe('filterTreeHelper', () => {
    let mockIndicatorIdsQuery = [299, 303, 2, 4]

    it('should return correct length of filtered categories by indicator id', () => {
      const filteredMockTreeData = filterTreeHelper(mockTreeData, mockIndicatorIdsQuery)
      filteredMockTreeData.should.have.length(2)
    })
  })
})
