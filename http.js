const http  = require('http')
const port  = 3000
http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('HEllo priya\n')
}).listen(port)
console.log(`Server running at http.//localhost:${port}/events`)