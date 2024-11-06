// REVIEW сделал рефакторинг самостоятельно
const asyncTimeout = (timeout) => new Promise(res => {
  setTimeout(() => {
      res();
  }, timeout);
});

// DONE
async function promiseStack(arr, limit = 1) {
  const tasks = [];

  /* README как-то усложнил. Тут можно просто отрезать по лимиту нужный массив,
  *   запускать его через Promise.all и затем передавать оставшийся массив в рекурсию promiseStack
  * */
  for (const task of arr) {
    const promise = task().then(() => tasks.splice(tasks.indexOf(promise), 1));
    tasks.push(promise);

    if (tasks.length >= limit) {
      await Promise.race(tasks);
    }
  }

  await Promise.all(tasks);
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

  