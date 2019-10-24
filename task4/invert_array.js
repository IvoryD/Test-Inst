console.log("Обращаем массив вспять");

function reverseArray(array) {
    var newArray = [];

    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

function reverseArrayInPlace(array) {

    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var x = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = x;
    }

    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// -> ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// -> [5, 4, 3, 2, 1]