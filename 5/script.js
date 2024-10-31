function pipe(...fns) {
    // FIXME тут форматирование поехало, должно быть так https://monosnap.com/file/CFvuIJAhZjr9RNbu4qwA6OQr5xgnC0
    return function(initialArg) {
      return fns.reduceRight((acc, fn) => fn(acc), initialArg);
    };
  }


const fillUser = pipe (
    (user) => ({ ...user, lastName: "Pass" }),
    (user) => ({ ...user, age: 29 }),
    (user) => ({ ...user, city: "Boston" }),
);

/*
* FIXME функция работает, а начального аргумента нет - непорядок.
*   Добавь обработку пограничного сценария
* */
console.log(fillUser());
