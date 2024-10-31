// FIXME получай по id - это самый надежный способ. Id уникальный элемент в рамках страницы
let form = document.forms.calcForm;

let radius = form.elements.radius;
let volume = form.elements.volume;
let val = 0;

form.onsubmit = (event) => {
  event.preventDefault();
  // FIXME вычисление объема явно самостоятельная операция
  volume.value = 0.75 * 3.14 * (radius.value)**3;
}