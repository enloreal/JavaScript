// FIXME избегай использования стрелочных функций там, где не требуется сохранение контекста
const asyncTimeout = (timeout) => new Promise(res => {
    // FIXME зачем тут объявлять избыточную функцию обертку?
    setTimeout(() => {
        res();
    }, timeout);
});


setTimeout(() => console.log(3), 2000);

console.log(1);

asyncTimeout(1000).then(() => console.log(2));
