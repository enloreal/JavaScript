// REVIEW Если я правильно понял твоё задание "для закрепления материала, сделай из чистой функции myMap, грязную функцию", я делал мутацию массива, чтобы функция стала грязной

// REVIEW Убрал мутацию, попытался сделать грязной с помощью измнения внешней переменной + побочного эффекта.

let myMapUses = 0;

Array.prototype.myMap = function(callback) {

  const result = [];

  for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
  }

  myMapUses++; // превращение функции в грязную с помощью изменения глобальной переменной.
  console.log(`[${arr}] -> [${result}] by myMap has done!`) // превращение функции в грязную с помощью побочного эффекта - вывода результата дополнительно в консоль.
  return result;

};

const arr = [1, 2, 3];
const doubled = arr.myMap(item => item * 2);
console.log(doubled); // [2, 4, 6]
console.log(arr); // [1, 2, 3]
console.log(myMapUses) 