const {EventEmitter} = require('events');

const logger = new EventEmitter();

const users = [];
const messages = [];

logger.on('message', (...msg)=> {
    messages.push(msg);
    console.log(`New message [${msg}]`);
})

logger.on('login', (...name)=> {
    users.push(name);
    console.log(`New user [${name}]`);
})

logger.on('getUsers', ()=> {
    users[0].forEach((item)=>console.log(item));
})

logger.on('getMessages', ()=> {
    messages[0].forEach((item)=>console.log(item));
})

logger.emit('message','Hello World', 'Good-By');
logger.emit('login','Karen', "Ruben");
logger.emit('getUsers');
logger.emit('getMessages');

const argv = require('minimist')(process.argv.slice(2));
console.log(argv);