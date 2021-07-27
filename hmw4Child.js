/*
process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ });
}, 1000);*/


const factorial = () => {
    let fact = 1;
    for (let i = 1; i <= 50; i++) {
        fact *= i;
    };
    return fact;
};

process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

process.on('message', (msg) => {
    const result = factorial();
    process.send(result);
});
