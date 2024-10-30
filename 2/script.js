function shallowEquals(obj1, obj2) {
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" })); // true
  console.log(shallowEquals({ a: 0 }, { a: undefined })); // false
  console.log(shallowEquals({ a: {} }, { a: {} })); // false
  console.log(shallowEquals({ a: [] }, { a: [] })); // false
  console.log(shallowEquals({ a: () => {} }, { a: () => {} })); // false