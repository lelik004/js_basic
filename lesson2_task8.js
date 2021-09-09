var val = 2, pow = 8;
var res = val;
var n = 1;

function power(val, n) {
    if (pow > 0) {
        res *= val;
        n += 1;
        if (pow > n)
            power(val, n)

    }
    else if (pow < 0) {
        pow *= -1
        res = 1 / power(val, n)
    }
    else {
        res = 1
    }
    return res;
}

alert(`Задание №8
Число ${val} в степени ${pow} равно ${power(val, n)}`);