import 'should-sinon'
import filterSubThemes from '../../../lib/helpers/filterSubThemes'
import mockTreeData from '../../fixtures/trees'

describe('helpers', () => {
  describe('filterSubThemes', () => {
    let mockIndicatorIdsQuery = [299, 303, 2, 4]

    it('should return correct length of filtered sub themes by indicator id', () => {
      const filteredMockSubThemeData = filterSubThemes(mockTreeData, mockIndicatorIdsQuery)
      filteredMockSubThemeData.should.have.length(3)
      filteredMockSubThemeData[0].sub_themes.should.have.length(2)
      filteredMockSubThemeData[0].sub_themes[0].categories.should.have.length(1)
      filteredMockSubThemeData[0].sub_themes[0].categories[0].should.have.property('name', 'Area')
      filteredMockSubThemeData[0].sub_themes[0].categories[0].should.have.property('id', 1)
      filteredMockSubThemeData[0].sub_themes[0].categories[0].indicators.should.have.length(1)
      filteredMockSubThemeData[0].sub_themes[0].categories[0].indicators[0].should.have.property('name', 'Total')
      filteredMockSubThemeData[0].sub_themes[0].categories[0].indicators[0].should.have.property('id', 299)
    })
  })
})
