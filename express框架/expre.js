// 1. 引入express
// const { response } = require('express');
const express = require('express');
// const { request } = require('http');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/server', (request, response) => {
    // 设置响应
    response.send('HELLO EXPRESS');

    // // 设置响应头 设置允许跨域
    // response.setHeader('Access-Control-Allow-Origin', '*');

    // // 设置响应体
    // response.send('HELLO AJAX');

})

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动,8000端口监听中....");
});

