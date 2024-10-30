Array.prototype.myMap = function(callback) {

    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;

};
  
  const arr = [1, 2, 3];
  const doubled = arr.myMap(item => item * 2);
  console.log(doubled); // [2, 4, 6]
