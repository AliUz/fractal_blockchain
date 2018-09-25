import 'should-sinon'
import request from 'supertest'
import server from '../../../lib/server'

describe('routes', () => {
  describe('trees', () => {
    let mockIndicatorIdsQuery = ['299', '303', '2', '4']
    describe('GET /input?indicator_ids=[:indicator_ids]', () => {
      it('should return a filtered tree given an array of indicator ids', () => {
        const indicatorIdsQuery = `indicator_ids[]=${mockIndicatorIdsQuery.join('&indicator_ids[]=')}`
        return request(server)
          .get(`/tree/input?${indicatorIdsQuery}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((res) => {
            const body = res.body
            body.should.be.an.Object()
            body.should.have.length(2)
            body[0].sub_themes.should.have.length(2)
            body[0].sub_themes[0].categories.should.have.length(1)
            body[0].sub_themes[0].categories[0].indicators[0].should.have.property('id', 299)
            body[0].sub_themes[0].categories[0].indicators[0].should.have.property('name', 'Total')
          })
      })

      it('should return error against wrong base currency', () => {
        return request(server)
          .get(`/tree/input`)
          .expect(404)
          .then(res => {
            const body = res.body
            body.name.should.equal('Error')
            body.message.should.equal('MISSING_INDICATORS')
          })
      })
    })
  })
})
