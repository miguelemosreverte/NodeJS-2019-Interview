import * as R from 'ramda'
import _ from 'frisby'
const app = require('../main/api/index');


describe('moves API', async () =>  {

    before(() => app.listen(3000))
/*
    it('GET / returns {"hello":"world"}', () =>
     _
      .get('http://localhost:3000/')
      .expect('json', 'hello', 'world')
    )
*/
    it('POST /move {"player":"1", coord:{x:0, y:0}} returns same when inserted on mongoDB', () =>
     _
     .post('http://localhost:3000/move',
       {player:"Miguel", coord:{x:0, y:0}},
       {json:true})
      .expect('json', 'player', 'Miguel')
    )

/*  it('returns JSON for existing moves', async () => {
    const moves = await moves.insert(testmoves)
    console.log(moves)
    request
      .get(`/moves/${moves._id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(/Marcus/)
      .expect(res => res.body.city.should.equal('Stockholm, Sweden'))
      .expect(200)
      .end(throwIfError)
  })

  /*it('content type is json', async () => {
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
  })*/

})
