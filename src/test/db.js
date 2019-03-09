import * as R from 'ramda'

/* global describe, before, beforeEach, after, it */
const app = require('../main/api/index');
const supertest = require('supertest')
const should = require('should')



const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')
const moves = db.collection('moves')

describe('DB', async () =>  {

  let request = {}
  let server = {}
  before(() => { server = app.listen(9000) })
  after(() => { server.close() })
  beforeEach(async () => {
    await moves.remove({})
    request = supertest(server)
  })

  it('insert move', async () => {
    const testMove = {player: "Miguel", coord: {x: 0, y:0}}

    /*console.log(result)
    console.log("testMove--", testMove)
    console.log(await moves.insert(testMove))

    console.log("testMove--", testMove)
    const result = await moves.findOne()
    console.log("testMove--", testMove)
    console.log(R.equals(R.omit(["_id"], result)))
    console.log(R.omit(["_id"], result))
    console.log("testMove--", testMove)*/
    return false
  })

})
