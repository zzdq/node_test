const express = require('express');
const server = express();

const https = require('https');
const formidable = require("formidable"); // 
const path = require("path");

// 请求域名配置
const options = {
  hostname: 'api.muxiaoguo.cn', // 域名
  port: 443, // 端口
  path: '/api/Gushici', // 入口
  method: 'GET'
}

server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*') // 跨域最重要的一步 设置响应头
  next(); // 执行next函数执行后续代码
})

server.get('/h5/api/antiepidemic/antiepidemicMaskCollection/isCollectable', (req, res) => {
  const sendReq = https.request(options, sendRes => {
    sendRes.setEncoding('utf8'); // 设置编码
    sendRes.on('data', d => {
      console.log(d);
      res.send({
        code: 0,
        d: JSON.parse(d),
        data: {
          "departLimitMark": 1,
          "nonWorkedAppleyMark": 0,
          "workedAppleyMark": 0,
          "workedAppleyDate": "2021-11-08",
          "nonWorkedAppleyDate": null
        }
      })
    })
  })

  sendReq.on('error', error => {
    console.error(error)
    res.send({
      code: 0,
      data: {}
    })
  })

  sendReq.end()
});

server.post('/upload', (req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.multiples = false;
    form.uploadDir = path.join(__dirname, "file");
    form.parse(req, function (err, fields, files) {
      res.end(JSON.stringify({ fields, files }))
    })
  }
});

server.get('/test3', (req, res) => {
  res.send({
    code: 0,
    data: 'hello3'
  })
});

// 启动服务器
server.listen(8090, error => {
  if (error) {
    console.log('启动失败', error);
  } else {
    console.log('启动成功');
  }
})