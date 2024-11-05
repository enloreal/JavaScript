//REVIEW сделал функцию "грязной" посредством удаления копии и изменения исхоного массива
Array.prototype.myMap = function(callback) {

    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i], i, this);
    }

    return this;

};
  
  const arr = [1, 2, 3];
  const doubled = arr.myMap(item => item * 2);
  console.log(doubled); // [2, 4, 6]
  console.log(arr); // [2, 4, 6]