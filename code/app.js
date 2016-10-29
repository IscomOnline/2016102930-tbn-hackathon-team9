var request = require('request');
var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var views = require('koa-views');     //npm install koa-views@4.1.0

var app = koa();
var router = new Router();

app.use(views(__dirname + '/public',{
  map : {
    html : 'underscore'
  }
}));

router.get('/',function *(){
  yield this.render('app',{});
});

router.get('/find',function *(){
  var name = this.request.query.name;
  console.log(name);
  this.redirect('/');
});
// request('http://api.tbn.org.tw/api/rows?ez=%E8%9D%B4%E8%9D%B6%E9%A1%9E&name=%E7%81%B0&type=json', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     // console.log(body) // Show the HTML for the Google homepage.
//     console.log(JSON.parse(body));
//     // console.log(response);
//     // console.log(body);
//   }
// });

app.use(router.middleware());
app.listen(3000);
