const asyncTimeout = (timeout) => new Promise(res => {
    setTimeout(() => {
        res();
    },timeout);
});

function promiseStack(arr) {
    return new Promise((res, rej) => {
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
