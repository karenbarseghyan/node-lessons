// const http = require('http')
//
// http.createServer((req,res)=> {
//     res.end("hello");
// }).listen(8080)


const fs = require("fs")
const zlib = require("zlib")

const input = fs.createReadStream('./hello.html')
const output = fs.createWriteStream("hello.gzip")

input.pipe(zlib.createGzip()).pipe(output)
