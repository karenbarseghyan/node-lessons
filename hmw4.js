/// child_process.spawn

// let cp = require('child_process');
// let progs =
//     {
//         list: "ls",
//         copy: "cp",
//         folder: "mkdir"
//     }
//  let child = cp.spawn(progs.list);
// child.stdout.on('data', (data)=>{
//     console.log(`data:\n${data}`)
// })

const { fork } = require('child_process');

const forked = fork('hmw4Child.js');

forked.on('message', (msg) => {
    console.log('Message from child', msg);
});

forked.send({ hello: 'world' });