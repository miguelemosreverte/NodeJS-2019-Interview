import * as R from 'ramda'
import _ from 'frisby'
const app = require('../main/api/index');

const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')
const moves = db.collection('moves')

describe('moves API', async () =>  {

    before(() => app.listen(3000))

    it('POST /move inputOutOfRange', async () => {
      const moves = []
      const move = {player:"Miguel", coord:{x:-1, y:4}}
      //await moves.insert(moves)
      return _
       .post('http://localhost:3000/move',
         {moves, move})
        .expect('json', 'inputOutOfRange', false)

    })

    it('POST /move try to move same player twice', async () => {
      const moves = [  {player:"Miguel", coord:{x:0, y:1}} ]
      const move = {player:"Miguel", coord:{x:0, y:0}}
      //await moves.insert(moves)
      return _
       .post('http://localhost:3000/move',
         {moves, move})
        .expect('json', 'samePlayerCantMoveTwice', false)

    })

    it('POST /move try to place on top of already placed', async () => {
      const moves = [
        {player:"Miguel", coord:{x:0, y:1}},
        {player:"Franco", coord:{x:0, y:0}},
      ]
      const move = {player:"Miguel", coord:{x:0, y:0}}
      //await moves.insert(moves)
      return _
       .post('http://localhost:3000/move',
         {moves, move})
        .expect('json', 'cannotPlaceOnTopOfPlaced', false)

    })



    it('POST /move win', async () => {
      const moves = [
        {player:"Miguel", coord:{x:0, y:1}},
        {player:"Franco", coord:{x:-1, y:0}},
        {player:"Miguel", coord:{x:0, y:0}},
        {player:"Franco", coord:{x:-1, y:-1}},
      ]
      const move = {player:"Miguel", coord:{x:0, y:-1}}
      return _
       .post('http://localhost:3000/move',
         {moves, move})
        .expect('json', 'win', true)

    })



})
