
const Koa = require("koa");
const BodyParser = require("koa-bodyparser");

const app = new Koa();




// Use the bodyparser middlware
app.use(BodyParser());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
