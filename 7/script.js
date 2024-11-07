// REVIEW Изменил хранение данных в виде массиве + в value возвращаются числа, а не строки.
class MySet {

   data = [];
  size = 0;  
  
  constructor(initialArray) {
    if (!Array.isArray(initialArray)) {
      throw new TypeError("MySet only accepts an array as input.");
    }

    initialArray.forEach(item => this.add(item));
  }

  add(item) {
    if (this.has(item)) return this;
    this.data.push(item);
    this.size++;
    return this;
  }

  has(item) {
    return this.data.includes(item);
  }

  delete(item) {
    const index = this.data.indexOf(item);
    if (index === -1) return false;
    this.data.splice(index, 1);
    this.size--;
    return true;
  }

  clear() {
    this.data = [];
    this.size = 0;
  }

  values() {
    return this.data;
  }
}

const mySet = new MySet([1, 2, 3, 4]);
console.log(mySet); // MySet { data: [ 1, 2, 3, 4 ], size: 4 }
console.log(mySet.size); // 4
console.log(mySet.has(6)); // false

console.log(mySet.values()); // [ 1, 2, 3, 4 ]

mySet.add(4);
console.log(mySet); // MySet { data: [ 1, 2, 3, 4 ], size: 4 }

mySet.add(5);
console.log(mySet); // MySet { data: [ 1, 2, 3, 4, 5 ], size: 5 }

mySet.delete(2);
console.log(mySet); // MySet { data: [ 1, 2, 3, 4 ], size: 4 }

mySet.clear();
console.log(mySet); // MySet { data: [], size: 0 }

  