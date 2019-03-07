const Koa = require('koa')
const app = new Koa()
const routes = require('koa-route')

const monk = require('monk')
const db = monk('mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview')

app.use(routes.get('/user/:id', async (ctx, id) => {
  const moves = db.get('moves')
  const user = await moves.findOne({_id: id})
  ctx.body = user
  ctx.status = 200
}))

if (!module.parent) { app.listen(3000) }

module.exports = app
