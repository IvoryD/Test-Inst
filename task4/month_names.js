console.log("Название месяцев");

var month = function () {
    var names = ["January",
        "Februrary",
        "March",
        "April",
        "May",
        "June",
        "Jule",
        "August",
        "September",
        "October",
        "November",
        "December"]

    return {
        name(number) {
            return names[number];
        },

        number(name) {
            return names.indexOf(name);
        }
    };
}();

console.log(month.name(2));
// -> March
console.log(month.number("November"));
// -> 10
