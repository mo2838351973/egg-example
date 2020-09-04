// app/controller/search.js
exports.index = async ctx => {
    const type = ctx.query.type;
    const q = ctx.query.q || 'nodejs';
  
    if (type === 'bing') {
      ctx.redirect(`http://cn.bing.com/search?q=${q}`);
    } else {
      ctx.redirect(`https://www.google.co.kr/search?q=${q}`);
    }
  };

  exports.uppercase = async ctx => {
    ctx.body = `search: ${ctx.query.name}`;
  };
  
  