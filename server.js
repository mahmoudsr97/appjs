const { appendFile } = require("fs");
const http = require("http")
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    if(req.url == '/home'){
        res.statusCode = 200;
        res.write('Welcome Home')
        res.end()
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.write('about page..')
        res.end()
    }
    else if(req.url == '/contacts'){
        res.statusCode = 200;
        res.write('contacts page..')
        res.end()
    }
    else {
        res.statusCode = 404;
        res.write('Error 404')
        res.end()
    }

})
server.listen(5000,()=>{console.log('Running up...')})