import 'should-sinon'
import filterSubThemeCategory from '../../../lib/helpers/filterSubThemeCategory'
import mockCategoryData from '../../fixtures/categories'

describe('helpers', () => {
  describe('filterSubThemeCategory', () => {
    let mockIndicatorIdsQuery = [299, 303, 2, 4]

    it('should return correct length of filtered categories by indicator id', () => {
      const filteredMockCategoryData = filterSubThemeCategory(mockCategoryData, mockIndicatorIdsQuery).categories
      filteredMockCategoryData[0].indicators.should.have.length(1)
      filteredMockCategoryData[0].indicators[0].should.have.property('name', 'Total')
      filteredMockCategoryData[0].indicators[0].should.have.property('id', 299)
    })
  })
})
