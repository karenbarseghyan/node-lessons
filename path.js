const path = require('path')

// console.log(path.join('data', 'new2.txt'))
const fs = require('fs');

fs.writeFile('./another2.txt', 'C:\\Users\\Karen\\Desktop\\hmw16', (err, data)=> {
    if(err) console.log(err);
    console.log('ok');
})

fs.readFile('./another2.txt', (err, data)=> {
    if (path.isAbsolute(data.toString())){
        console.log('ok');
    }

    if(err) console.log(err);
    console.log('data', data.toString());
})


