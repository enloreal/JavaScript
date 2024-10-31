// FIXME плохое решение, оно тебе не дает гарантии, что ты получишь именно форму с id form1
let form = document.forms[0];

let fname = form.elements.fname;
let lname = form.elements.lname;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log(fname.value);
  console.log(lname.value);
}