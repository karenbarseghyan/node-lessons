const fs = require("fs")

const stream = fs.createReadStream('./main.txt', {
    highWaterMark: 100,
    encoding: "utf-8"
})
const output = fs.createWriteStream("./writeMe.txt")
stream.pipe(output);

// stream.on('data', chunk => {
//     output.write(chunk)
//     console.log("writeStream");
// })





