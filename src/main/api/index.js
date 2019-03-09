const Koa = require('koa')
const app = new Koa()
const _ = require('koa-route')
const BodyParser = require("koa-bodyparser");
import TicTacToe from "./controller"

app.use(BodyParser());
app.use(_.get('/', TicTacToe.GET.hello))
app.use(_.post('/move', TicTacToe.POST.move))






if (!module.parent) {
  app.listen(3000)
}
module.exports = app
