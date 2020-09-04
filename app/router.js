// app/router.js
module.exports = app => {
    const { router, controller, middlewares } = app;
    const gzip = app.middleware.gzip({ threshold: 1024 });
    router.get('/', controller.home.index);
    router.get('/home', controller.home.index);
    router.get('/news', controller.news.list);
    // router.get('/user/:id', controller.user.info);//参数parame
    router.post('/form', controller.form.post);//提交表单
    router.post('/user', controller.user);//表单校验
    router.redirect('/', '/home/index', 302);//重定向
    router.get('/search/index', controller.search.index);//外部重定向 
    router.get('s', '/search/uppercase', middlewares.uppercase(), controller.search.uppercase);
    router.post('createPost', '/api/posts', controller.post.create);
    router.get('/name', gzip, app.controller.name.index);
    

};
