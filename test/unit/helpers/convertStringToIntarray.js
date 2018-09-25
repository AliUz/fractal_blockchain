import 'should-sinon'
import convertStringToIntarray from '../../../lib/helpers/convertStringToIntarray'

describe('helpers', () => {
  describe('stringToIntArray', () => {
    let mockIndicatorIdsQuery = ['299', '303', '2', '4']

    it('should return an array of integers', () => {
      const intArray = convertStringToIntarray(mockIndicatorIdsQuery)
      intArray.should.matchEach(num => num.should.be.a.Number())
    })
  })
})
