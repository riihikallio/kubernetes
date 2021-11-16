var http = require('http');
var Eta = require('eta')
var path = require('path');


Eta.configure({
  views: path.join(__dirname, 'templates'),
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let body = await Eta.renderFile('index', { async: true });
  console.log(body)
  res.end(body);
 }).listen(8080);

console.log('Server started in port 8080');