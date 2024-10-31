function fromArrayToObj(arr) {
    let result = {};
    // FIXME пустая строка
    arr.map(obj => {
        result[obj.name] = obj.value;
    })

    return result;
}

console.log(fromArrayToObj([
    { name: "width", value: 100 }, 
    { name: "height", value: 50 }, 
    { name: "wow", value: 220 },
]));


// FIXME поправь форматирование в функции согласно предыдущих замечаний
function fromObjToArray(obj) {
    let arr = [];
    // FIXME переменная key не объявлена
    for (key in obj) {
        arr.push({name: key, value: obj[key]});
    }
    return arr;

}

console.log(fromObjToArray({width: 100, height: 50}));
