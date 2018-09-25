import sinon from 'sinon'
import 'should-sinon'
import treeController from '../../../lib/controllers/tree'
import rp from 'request-promise-native'
import mockTreeData from '../../fixtures/trees'

describe('controllers', () => {
  describe('tree', () => {
    let sandbox
    let emptyMockTreeData = []
    let mockIndicatorIdsQuery = ['299', '303', '2', '4']
    let mockNonExistentIndicatorIdsQuery = ['299', '303', '2', '4', '99999999']

    beforeEach(() => {
      sandbox = sinon.createSandbox()
    })

    afterEach(() => {
      sandbox.restore()
    })

    it('should return a pruned tree with specified indicators', () => {
      sandbox.stub(rp, 'get').resolves(mockTreeData)
      return treeController
        .filterTreeByIndicators(mockIndicatorIdsQuery)
        .then(res => {
          res.should.have.length(2)
          res[0].sub_themes[0].categories[0].name.should.equal('Area')
          res[0].sub_themes[0].categories[0].should.have.property('indicators')
          res[0].sub_themes[0].categories[0].indicators.should.have.length(1)
          res[0].sub_themes[0].categories[0].indicators[0].id.should.equal(299)
          res[0].sub_themes[0].categories[0].indicators[0].name.should.equal('Total')
          res[0].sub_themes[1].categories[0].name.should.equal('Population')
          res[0].sub_themes[1].categories[0].should.have.property('indicators')
          res[0].sub_themes[1].categories[0].indicators.should.have.length(1)
          res[0].sub_themes[1].categories[0].indicators[0].id.should.equal(303)
          res[0].sub_themes[1].categories[0].indicators[0].name.should.equal('Total')
        })
    })

    it('should be rejected for empty indicator array', () => {
      sandbox.stub(rp, 'get').resolves(emptyMockTreeData)
      return treeController
        .filterTreeByIndicators(mockIndicatorIdsQuery)
        .should.be.rejectedWith({ message: 'REQUESTED TREE DOES NOT EXIST' })
    })

    it('should be rejected for tree that does not exist', () => {
      sandbox.stub(rp, 'get').resolves(emptyMockTreeData)
      return treeController
        .filterTreeByIndicators(mockNonExistentIndicatorIdsQuery)
        .should.be.rejectedWith({ message: 'REQUESTED TREE DOES NOT EXIST' })
    })

    it('should be rejected after all request retry attempts have been exhausted', () => {
      sandbox.stub(rp, 'get').rejects()
      return treeController
        .filterTreeByIndicators(mockIndicatorIdsQuery)
        .should.be.rejectedWith({ message: 'MAX_RETRY_EXCEEDED' })
    })
  })
})
