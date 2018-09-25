import sinon from 'sinon'
import 'should-sinon'
import validateFilteredTree from '../../../lib/helpers/validateFilteredTree'
import filterTreeHelper from '../../../lib/helpers/filterTreeHelper'
import mockTreeData from '../../fixtures/trees'

describe('helpers', () => {
  describe('validateFilteredTree', () => {
    let sandbox
    let mockIndicatorIdsQuery = ['299', '303', '2', '4']
    let mockNonExistentIndicatorIdsQuery = ['299', '303', '2', '4', '99999999']

    beforeEach(() => {
      sandbox = sinon.createSandbox()
    })

    afterEach(() => {
      sandbox.restore()
    })

    it('should return true for correct length of filtered indicators', () => {
      const filteredMockTreeData = filterTreeHelper(mockTreeData, mockIndicatorIdsQuery)
      const res = validateFilteredTree(filteredMockTreeData, mockIndicatorIdsQuery)
      res.should.be.true()
    })

    it('should return false for incorrect length of filtered indicators', () => {
      const filteredMockTreeData = filterTreeHelper(mockTreeData, mockIndicatorIdsQuery)
      const res = validateFilteredTree(filteredMockTreeData, mockNonExistentIndicatorIdsQuery)
      res.should.be.false()
    })
  })
})
