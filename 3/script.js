// DONE
function setInObj(arr, value, obj) {
  const copyObj = {...obj};
  let current = copyObj;
  
  // REVIEW заменил for/i на for/of


  for (let key of arr) {
    if (arr.indexOf(key) === arr.length-1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  }

  return copyObj;
}

const obj = {};

// REVIEW сделал функцию чистой посредством создания копии исходного массива

setInObj(["user", "name"], "Sam", obj);
console.log(setInObj(["user", "name"], "Sam", obj));
