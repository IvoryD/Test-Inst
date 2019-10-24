console.log("Сумма диапазона");

function range(start, end, step) {
    var array = [];

    if (step == null) {
        step = 1;
    }


    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++)
        sum += array[i];



    return sum;
}

console.log(sum(range(1, 10)));
// -> 55
console.log(range(5, 2, -1));
// ->[5, 4, 3, 2]