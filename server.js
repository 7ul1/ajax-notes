// 1. 引入express
// const { response } = require('express');
const { request, response } = require('express');
const express = require('express');
// const { request } = require('http');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.get('/server', (request, response) => {
    // 设置响应
    // response.send('HELLO EXPRESS');
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('HELLO AJAX -2');

})

// all 可以接受任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应
    // response.send('HELLO EXPRESS');
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('HELLO AJAX POST');

})

app.all('/json-server', (request, response) => {
    // 设置响应
    // response.send('HELLO EXPRESS');
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 相应一个数据
    const data = {
        name: 'atguli'
    }
    // 对对象进行字符串的转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);

})

// 针对 IE缓存
app.get('/ie', (request, response) => {
    // 设置响应
    // response.send('HELLO EXPRESS');
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // // 响应头
    // response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('HELLO IE - 5');

})

// 延时
app.all('/delay', (request, response) => {
    // 设置响应
    // response.send('HELLO EXPRESS');
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        // 设置响应体
        response.send('延时相应');
    }, 1000);
    // // 响应头
    // response.setHeader('Access-Control-Allow-Headers', '*');


})

// jquery
app.all('/jquery-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'sb' }
    // response.send('hello jquery ajax');

    response.send(JSON.stringify(data));

})


// axios
app.all('/axios-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'sb' }
    // response.send('hello jquery ajax');

    response.send(JSON.stringify(data));

})

// fetch
app.all('/fetch-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'sb' }
    // response.send('hello jquery ajax');

    response.send(JSON.stringify(data));

})

// jsonp
app.all('/jsonp-server', (request, response) => {

    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', '*');
    // const data = { name: 'sb' }
    // // response.send('hello jquery ajax');
    // response.send(JSON.stringify(data));

    // response.send('console.log("Hello Word")');
    const data = {
        name: '小样'
    };
    // 转换字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);

})


// 用户名检测是否存在
app.all('/check-username', (request, response) => {

    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', '*');
    // const data = { name: 'sb' }
    // // response.send('hello jquery ajax');
    // response.send(JSON.stringify(data));

    // response.send('console.log("Hello Word")');
    const data = {
        exist: 1,
        msg: '用户名已存在'
    };
    // 转换字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);

})

app.all('/jquery-jsonp-server', (request, response) => {

    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', '*');
    // const data = { name: 'sb' }
    // // response.send('hello jquery ajax');
    // response.send(JSON.stringify(data));

    // response.send('console.log("Hello Word")');
    const data = {
        name: 'Hello',
        city: 'BeiJing'
    };
    // 转换字符串
    let str = JSON.stringify(data);
    // 接收 callback 参数
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);

})

app.all('/cors-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello Cors')
})

// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动,8000端口监听中....");
});