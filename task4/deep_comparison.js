console.log("Глубокое сравнение");

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof a !== "object" || a == null || typeof b !== "object") {
        return false;
    }

    var propertiesInA = 0;
    var propertiesInB = 0;

    for (var property in a) {
        propertiesInA += 1;
    }

    for (var property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA == propertiesInB;
}


var obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// -> true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// -> false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// -> true