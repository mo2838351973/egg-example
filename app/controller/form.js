// app/controller/user.js
exports.post = async ctx => {
    ctx.body = `body: ${JSON.stringify(ctx.request.body)}`;
  };