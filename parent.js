const { fork } = require('child_process');

const forked1 = fork('child1');
const forked2 = fork('child2');

forked1.on('message', (msg1) => {
    console.log('Message from child', msg1);
});
forked2.on('message', (msg2) => {
    console.log('Message from child', msg2);
});

forked1.send("start");
forked2.send("start");