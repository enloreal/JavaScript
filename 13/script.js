// DONE
const table = document.getElementById('sampleTable');

// REVIEW теперь количество получаем динамически
let flag = document.getElementById("body").children.length;


// REVIEW разбил функцию на две: создание и вставка строки
function createRow(rowNum) {
    const tdFirst = document.createElement('td');
    const tdSecond = document.createElement('td');
    const tr = document.createElement('tr');
    
    tdFirst.innerHTML = `Row${rowNum} cell${1}`;
    tdSecond.innerHTML = `Row${rowNum} cell${2}`;
    
    tr.appendChild(tdFirst);
    tr.appendChild(tdSecond);
    
    return tr;
}


function insertRow() {
    flag++;
    const newRow = createRow(flag);
    table.appendChild(newRow);
}
