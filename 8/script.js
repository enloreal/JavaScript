function fromArrayToObj(arr) {
    let result = {};
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



function fromObjToArray(obj) {
    let arr = [];

    for (key in obj) {
        arr.push({name: key, value: obj[key]});
    }
    return arr;

}

console.log(fromObjToArray({width: 100, height: 50}));
