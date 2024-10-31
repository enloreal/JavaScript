// FIXME На основе прошлой задачи проведи рефакторинг самостоятельно
const asyncTimeout = (timeout) => new Promise(res => {
    setTimeout(() => {
        res();
    },timeout);
  });
  
  function promiseStack(promises, count = 1) {
    return new Promise((resolve, reject) => {
      const results = [];
      let running = 0;
      let index = 0;
  
      const executeNext = () => {
        if (running < count && index < promises.length) {
          running++;
          promises[index]()
            .then((result) => {
              results[index] = result;
              running--;
              if (index < promises.length) {
                executeNext();
              }
              if (running === 0 && index === promises.length) {
                resolve(results);
              }
            })
            .catch(reject);
          index++;
          executeNext();
        }
      };
  
      executeNext();
    });
  }
  
  promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
  ], 2);
  