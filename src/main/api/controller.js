
import * as R from 'ramda'
const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')
const moves = db.collection('moves')



const TicTacToe = {
  "GET": {
    hello: async data =>  ({"hello": "world", data}),
    get: async data => {
        const moves = db.get('moves')
        const user = await moves.findOne({_id: id})
        ctx.body = user
        ctx.status = 200
      }
  },
  "POST":{
    move: async data => {
        return await moves.insert(data)
    },
  }
};


const Koa_HTTP = {
  "GET":  fun => async ctx => {
        ctx.body = await fun(ctx.params) // URL params, like :id
        ctx.status = 200
  },
  "POST": fun => async ctx => {
        ctx.body = await fun(ctx.request.body) // your POST params
        ctx.status = 200
  }
}

export default R.mergeWith(
  R.map //(Koa_HTTP, TicTacToe) => R.map(Koa_HTTP)(TicTacToe)
  , Koa_HTTP
  , TicTacToe)
