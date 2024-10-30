function pipe(...fns) {
    return function(initialArg) {
      return fns.reduceRight((acc, fn) => fn(acc), initialArg);
    };
  }


const fillUser = pipe (
    (user) => ({ ...user, lastName: "Pass" }),
    (user) => ({ ...user, age: 29 }),
    (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser());
