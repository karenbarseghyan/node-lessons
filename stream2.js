// const http = require('http')
//
// http.createServer((req,res)=> {
//     res.end("hello");
// }).listen(8080)


const fs = require("fs")
const zlib = require("zlib")

const input = fs.createReadStream('./hell.html')
const output = fs.createWriteStream("hello.gzip")

input.pipe(zlib.createGzip()).pipe(output)
/*const input = fs.createReadStream('hello.gzip')
const output = fs.createWriteStream("unzip.txt")

input.pipe(zlib.createUnzip()).pipe(output)*/
