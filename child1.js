const factorial = () => {
    let fact = 1;
    for (let i = 1; i <= 50; i++) {
        fact *= i;
    };
    return fact;
};

process.on('message', (msg1) => {
    console.log('Message from parent:', msg1);
});

process.on('message', (msg) => {
    const result = factorial();
    process.send(result);
});