const asyncTimeout = (timeout) => new Promise(res => {
    setTimeout(() => {
        res();
    }, timeout);
});


setTimeout(() => console.log(3), 2000);

console.log(1);

asyncTimeout(1000).then(() => console.log(2));
