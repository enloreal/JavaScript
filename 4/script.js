// FIXME функция myMap должна вернуть новый массив, а не изменять текущий
Array.prototype.myMap = function(callback) {

    for (let i = 0; i < this.length; i++) {
      //   тут происходит мутация текущего массива
      this[i] = callback(this[i], i, this);
    }

    // возвращается тот же массив, а должен вернуться новый
    return this;

};
  
  const arr = [1, 2, 3];
  const doubled = arr.myMap(item => item * 2);
  console.log(doubled); // [2, 4, 6]
  console.log(arr); // [1, 2, 3]