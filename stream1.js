const fs = require("fs")

const stream = fs.createReadStream('./main.txt', {
    highWaterMark: 8,
    encoding: 'UTF-8'
})


let out = '';
stream.on ('data', (d) => {
    console.log(d);
    out += d;
})

stream.on('end', ()=> console.log(out));

