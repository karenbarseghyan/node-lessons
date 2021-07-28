const fs = require("fs")
const zlib = require("zlib")
const path = require("path")


let pathFunc = function getRandomString(length) {
    length = Math.floor(Math.random() * 20);
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
let paths = pathFunc();
console.log(paths);
fs.mkdir(path.join(__dirname, `${paths}`), (err) => {
    if(err) {
        throw(err)
    }
    console.log("dir created");

})

const input = fs.createReadStream(`./dir1/test.txt`)
const output = fs.createWriteStream(`.//${paths}/test.gzip`)

input.pipe(zlib.createGzip()).pipe(output)



