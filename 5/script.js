// DONE
// REVIEW Добавил обработку пограничного сценария (теперь, если не передается начальный аргумент, то выкидывает ошибку)

function pipe(...fns) {
  return function(initialArg) {
      if (initialArg === undefined) {
          throw new Error("Необходим начальный аргумент!");
      }
      return fns.reduceRight((acc, fn) => fn(acc), initialArg);
  };
}


const fillUser = pipe (
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser({firstname : "Eugene"}));
