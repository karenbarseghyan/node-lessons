// import {readFile} from 'fs'

const fs = require('files/fs');

fs.readFile('./new.txt', (err, data)=> {
    if(err) console.log(err);
    console.log('data', data.toString());
})

fs.writeFile('./another.txt', 'hello world', (err, data)=> {
    if(err) console.log(err);
    console.log('ok');
})