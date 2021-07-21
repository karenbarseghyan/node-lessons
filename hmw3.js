const fs = require('fs');
const readline = require('readline');
const path = require('path')
// const csvToJson = require('csvtojson');


const rl = readline.createInterface({
    input: fs.createReadStream('C:\\Users\\Karen\\Desktop\\nn\\addresses.csv'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

const change = (file, extension) => {
    const basename = path.basename(file, path.extname(file))
    return path.join(path.dirname(file), basename + extension)
}
change('C:\\Users\\Karen\\Desktop\\nn\\addresses.csv','.json')
/*csvToJson()
    .fromFile(path.join(__dirname, 'addresses.csv'))
    .then(jsonObj => {
        console.log(jsonObj);
        fs.writeFileSync(path.join(__dirname, 'addresses.json'), JSON.stringify(jsonObj, null, 2));
    });*/

// fs.readFile('C:\\Users\\Karen\\Desktop\\nn\\addresses.csv', (err, data)=> {
//     const basename = path.basename('./addresses','.csv');
//     fs.writeFile(`C:\\Users\\Karen\\Desktop\\nn\\${basename}.json`, `${file()}`, (err, data)=> {
//         if(err) console.log(err);
//         console.log('JSON created');
//     })
// })


