function setInObj(arr, value, obj) {
    let current = obj;
    
    for (let i = 0; i < arr.length - 1; i++) {
      const key = arr[i];

      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    }

    current[arr[arr.length - 1]] = value;
    return obj;
  }

  const obj = {};
  setInObj(["user", "name"], "Sam", obj);
  console.log(obj);
