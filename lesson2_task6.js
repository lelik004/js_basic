var arg1 = 2, arg2 = 345;
var operation = 'Сложение';
var res;

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'Сложение':
            res = addition(arg1, arg2);
            break;

        case 'Вычитание':
            res = subtraction(arg1, arg2);
            break;

        case 'Умножение':
            res = multiplication(arg1, arg2);
            break;

        case 'Деление':
            res = division(arg1, arg2);
            break;
    }
}

mathOperation(arg1, arg2, operation)

alert(`Задание №6
Результат ${operation} ${arg1} и ${arg2} равен ${res}`)