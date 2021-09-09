var a = 14, b = -33, res;
if (a >= 0 && b >= 0) {
    res = a - b;
}
else if (a < 0 && b < 0) {
    res = a * b;
}
else {
    res = a + b;
}
alert(`Задание №3\n${res}`);
