class MySet {

  // REVIEW Обьявил переменные в теле класса (вынес из конструктора)
  data = {};
  size = 0;  
  
  constructor(initialArray) {
    if (!Array.isArray(initialArray)) {
      throw new TypeError("MySet only accepts an array as input.");
    }

    // REVIEW переделал в forEach
    initialArray.forEach(item => this.add(item));
  }

  add(item) {
    // REVIEW сторожевой пост
    if (this.has(item)) return this;
    this.data[item] = true;
    this.size++;
    return this;
  }

  has(item) {
    return this.data.hasOwnProperty(item);
  }

  delete(item) {
    // REVIEW сторожевой пост
    if (!this.has(item)) return false;
    delete this.data[item];
    this.size--;
    return true;
  }

  clear() {
    this.data = {};
    this.size = 0;
  }

  // REVIEW добавил метод values
  values() {
    return Object.keys(this.data);
  }
}

const mySet = new MySet([1, 2, 3, 4]);
console.log(mySet); // MySet { data: { '1': true, '2': true, '3': true, '4': true }, size: 4 }
console.log(mySet.size); // 4
console.log(mySet.has(6)); // false

console.log(mySet.values()); // [ '1', '2', '3', '4' ]

mySet.add(4);
console.log(mySet); // MySet { data: { '1': true, '2': true, '3': true, '4': true }, size: 4 }

mySet.add(5);
console.log(mySet); // MySet { data: { '1': true, '2': true, '3': true, '4': true, '5': true }, size: 5 }

mySet.delete(2);
console.log(mySet); // MySet { data: { '1': true, '3': true, '4': true, '5': true }, size: 4 }

mySet.clear();
console.log(mySet); // MySet { data: {}, size: 0 }

  