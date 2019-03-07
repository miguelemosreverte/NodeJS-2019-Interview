/* global describe, before, beforeEach, after, it */
const app = require('../main/api/index');
const supertest = require('supertest')
const should = require('should')

const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')
const moves = db.get('moves')
moves.find({}).then(async (docs) => {

  console.log(await db.listCollections())
  console.log("MOVES", docs)
})


describe('moves API', () => {
  const testmoves = { name: 'Marcus', city: 'Stockholm, Sweden' }
  let request = {}
  let server = {}

  before(() => { server = app.listen(9000) })
  after(() => { server.close() })

  beforeEach(async () => {
    await moves.remove({})
    request = supertest(server)
  })

  const throwIfError = (err, res) => { if (err) throw err }

  it('returns JSON for existing moves', async () => {
    const moves = await moves.insert(testmoves)
    request
      .get(`/moves/${moves._id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/Marcus/)
      .expect(res => res.body.city.should.equal('Stockholm, Sweden'))
      .expect(200)
      .end(throwIfError)
  })

  it('content type is json', async () => {
    const moves = await moves.insert(testmoves)
    request
      .get(`/moves/`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end(throwIfError)
  })

  it('status is 200', async () => {
    const moves = await moves.insert(testmoves)
    request
      .get(`/moves/${moves._id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end(throwIfError)
  })

  it('city is correct', async () => {
    const moves = await moves.insert(testmoves)
    request
      .get(`/moves/${moves._id}`)
      .set('Accept', 'application/json')
      .expect(res => res.body.city.should.equal('Stockholm, Sweden'))
      .end(throwIfError)
  })

  it('name is correct', async () => {
    const moves = await moves.insert(testmoves)
    request
      .get(`/moves/${moves._id}`)
      .set('Accept', 'application/json')
      .expect(/Marcus/)
      .end(throwIfError)
  })
})
