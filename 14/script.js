// REVIEW исправил на получение по id. Вынес расчёт обьёма сферы в отдельную функцию
let form = document.getElementById("formId")

let radius = form.elements.radius;
let volume = form.elements.volume;
let val = 0;

function calcValue(radius) {
  return 0.75 * 3.14 * Math.pow(radius, 3)
}

form.onsubmit = (event) => {
  event.preventDefault();
  volume.value = calcValue(radius.value);
}
