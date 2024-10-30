class MySet {
    constructor(initialArray) {
      if (!Array.isArray(initialArray)) {
          throw new TypeError(("MySet only accepts an array as input."));
        
      }
      this.data = {};
      this.size = 0;
  
      for (const item of initialArray) {
        this.add(item);
      }
    }
  
    add(item) {
      if (!this.has(item)) {
        this.data[item] = true;
        this.size++;
      }
      return this;
    }
  
    has(item) {
      return this.data.hasOwnProperty(item);
    }
  
    delete(item) {
      if (this.has(item)) {
        delete this.data[item];
        this.size--;
        return true;
      }
      return false;
    }
  
    clear() {
      this.data = {};
      this.size = 0;
    }
  }
  
  
  const mySet = new MySet([1,2,3,4]);
  console.log(mySet); // MySet { data: { '0': true, '1': true, '2': true, '3': true }, size: 4 }
  console.log(mySet.size); // 4
  console.log(mySet.has(6)); // false
  
  mySet.add(4);
  console.log(mySet); // MySet { data: { '0': true, '1': true, '2': true, '3': true, '4': true }, size: 5 }
  
  mySet.delete(2);
  console.log(mySet); // MySet { data: { '0': true, '1': true, '3': true, '4': true }, size: 4 }
  
  mySet.clear();
  console.log(mySet); // MySet { data: {}, size: 0 }
  