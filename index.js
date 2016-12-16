const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')('public'));

// response
app.use(async ctx => {
    await new Promise((resolve, reject) => setTimeout(() => {
        console.log(`timeout`);
        resolve();
    }, 2000));
    ctx.body = 'Hello Koa';
});

app.listen(3000);