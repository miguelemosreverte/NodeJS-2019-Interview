
import * as R from 'ramda'
const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')
const collection = db.collection('moves')
import {validateMoveWithDefaultRules} from '../kernel/rules'
import winCondition from '../kernel/winConditions'



const TicTacToe = {
  "GET": {
    hello: async data =>  ({"hello": "world", data}),
    get: async data => {
        const user = await collection.findOne({_id: id})
        ctx.body = user
        ctx.status = 200
      }
  },
  "POST":{
    move: async ({moves, move}) => {
        const validators = validateMoveWithDefaultRules({moves, move})
        const fails = R.filter(validation => !validation )(validators)

        if (!R.isEmpty(fails)) {
          return fails
        }
        const conditionals = winCondition({moves, move})
        return await collection.insert(conditionals)
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
