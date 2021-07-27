const fs = require("fs")

const stream = fs.createReadStream('./main.txt', {
    highWaterMark: 9
})
const output = fs.createWriteStream("./hell.html")
stream.pipe(output);

stream.on('data', chunk => {
    console.log(chunk);
})

stream.on('error', (err)=> {
    console.log(err);
})


/*stream.on('close', ()=> {
    console.log("hi");
})*/

stream.on('end', ()=> {
    console.log("input end");
})

stream.on('finish', ()=> {
    console.log(" input finish");
})

output.on('end', ()=> {
    console.log("output end");
})

output.on('finish', ()=> {
    console.log("output finish");
})