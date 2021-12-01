const http = require('http');
const uuidv4 = require('uuid/v4');

//create a server object:
const server = http.createServer(function (req, res) {
  if (req.url == '/html'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html><html><head></head><body><h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1><p> - Martin Fowler</p></body></html>'); //write a response to the client
    res.end();
  }else if(req.url == '/json'){
    const jsonObject = {
      "slideshow": {
        "author": "Yours Truly",
        "date": "date of publication",
        "slides": [
          {
            "title": "Wake up to WonderWidgets!",
            "type": "all"
          },
          {
            "items": [
              "Why <em>WonderWidgets</em> are great",
              "Who <em>buys</em> WonderWidgets"
            ],
            "title": "Overview",
            "type": "all"
          }
        ],
        "title": "Sample Slide Show"
      }
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(jsonObject)); //write a response to the client
    res.end();
  } else if(req.url == '/uuid'){
    let uuidno = uuidv4();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({'uuid':uuidno})); //write a response to the client
    res.end();
  } else if(req.url == '/status/100'){
    res.writeHead(100, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({statusCode:100,statusMessage:'Continue'}));
    res.end();
  } else if(req.url == '/status/200'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({statusCode:200,statusMessage:'Ok'}));
    res.end();
  }else if(req.url == '/status/300'){
    res.writeHead(300, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({statusCode:300,statusMessage:'Multiple Choices'}));
    res.end();
  }else if(req.url == '/status/400'){
    res.writeHead(400, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({statusCode:400,statusMessage:'Bad Request'}));
    res.end();
  }else if(req.url == '/status/500'){
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({statusCode:500,statusMessage:'Internal Server Error'}));
    res.end();
  }
  else {
    arrUrlTxt=req.url.split('/');
    let numDelay = parseInt(arrUrlTxt[2]);
    
    if(arrUrlTxt[1] === 'delay' && typeof numDelay==='number'){
      setTimeout(() => {
        res.write('Delay Time for '+arrUrlTxt[2]+' seconds');
        res.end();
      }, arrUrlTxt[2] * 1000);
    }else{
      res.write('Hello World');
      res.end();
    }
  }
   
});


server.listen(8080); //the server object listens on port 8080