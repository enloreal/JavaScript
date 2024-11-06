// DONE
// REVIEW изменил способ получения таблицы, чтобы точно получать именно её, с id form1
let form = document.getElementById("form1");

let fname = form.elements.fname;
let lname = form.elements.lname;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(fname.value);
  console.log(lname.value);
}
