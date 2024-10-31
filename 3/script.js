/*
* Ай-ай-ай https://monosnap.com/file/cq67fLc59Dqz5qGCkkNjHRfAmxp54a
* Решай сам! Использование чата в целях обучения это очень плохая идея
*/
function setInObj(arr, value, obj) {
    let current = obj;
    
    // FIXME старайся использовать for/in и for/of циклы. for/i считаемся устаревшим
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
  /*
  * FIXME сделай функцию чистой, js-это больше функциональный язык,
  *   по этому принципы ФП необходимо соблюдать
  *  */
  setInObj(["user", "name"], "Sam", obj);
  console.log(obj);
