

module.exports = {
    keys : `1234`,//<此处改为你自己的 Cookie 安全字符串>
    security : {
        csrf: false //「除非清楚的确认后果，否则不建议擅自关闭安全插件提供的功能。」
      },
    // 添加 view 配置
    view : {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    },
    // 添加 news 的配置项
    news : {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
    
    // robot's configurations
    robot : {
        ua: [
            /curl/i,
            /Baiduspider/i,
        ],
    },
    // 配置需要的中间件，数组顺序即为中间件的加载顺序
    middleware : [
        'robot', // add middleware robot
        'gzip' 
    ],
  
    // 配置 gzip 中间件的配置
    gzip: {
        threshold: 1024, // 小于 1k 的响应体不压缩
    },
    
    sequelize: {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'egg-sequelize-doc-default',
        password: '12345678',
      }
  };