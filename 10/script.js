const asyncTimeout = (timeout) => new Promise(res => {
    setTimeout(() => {
        res();
    },timeout);
});

/*
* FIXME как-то ты перемудрил. Задача элементарно решается через цикл for/of.
*  Либо на худой конец через рекурсию.
*   Подсказка: функцию и так возвращает промис, можно сделать ее async
*  */
function promiseStack(arr) {
    return new Promise((res, rej) => {
      /*
      * FIXME index - плохое название. За что отвечает эта переменная — не понятно.
      *   Что бы понять нужно погрузиться в логику кода ниже
      *  */
      let index = 0;
  
      const executeNext = () => {
        if (index >= arr.length) {
          res();
          return;
        }
  
        const current = arr[index];
        index++;
  
        Promise.resolve(current())
          .then(executeNext)
          .catch(rej);
      };
  
      executeNext();
    });
  }

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
]);
