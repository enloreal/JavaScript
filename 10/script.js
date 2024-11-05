const asyncTimeout = (timeout) => new Promise(res => {
  setTimeout(() => {
      res();
  }, timeout);
});

// REVIEW сократил функцию, сделал через for/of
async function promiseStack(arr) {
  for (const task of arr) {
      await task();
  }
}

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
]);

