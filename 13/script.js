const table = document.getElementById('sampleTable');
/*
* FIXME а если количество строк будет динамическим с бека приходить?
*  Нужно вычислить это значение на основе количества строк в таблице
* */
let flag = 3;


/*
* FIXME функция нарушает принцип единственной ответственности.
*  Он создает и вставляет строку. А теперь представь что нужно
*  создание строки переиспользовать в другой функции. Как быть?
* */
function insert_Row() {
  const tdFirst = document.createElement('td');
  const tdSecond = document.createElement('td');
  const tr = document.createElement('tr');
  tdFirst.innerHTML = `Row${flag} cell${flag}`
  tdSecond.innerHTML = `Row${flag} cell${flag}`

  tr.appendChild(tdFirst);
  tr.appendChild(tdSecond);

  table.appendChild(tr);

  flag++;
}