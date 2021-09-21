var object = {};
var num = 485;

function makeSimple(num) {
    var hund, tens, unit;
    unit = num % 10;
    tens = ((num - unit) / 10) % 10;
    hund = (num - unit - tens * 10) / 100;

    object['единицы'] = unit;
    object['десятки'] = tens;
    object['сотни'] = hund;
    return console.log(object);
}

if (num <= 999) {
    makeSimple(num);
}
else {
    console.log(`Число ${num} больше 999`)
}

