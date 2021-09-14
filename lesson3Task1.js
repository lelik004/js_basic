var n = 1;
var countDiv = 1;

while (n <= 100) {
    if ((n == 2) || (n == 3) || (n == 5)) {
        console.log(n);
    }
    else if ((n % 2 == 0) || (n % 3 == 0) || (n % 5 == 0) || (n % 7 == 0)) {
        countDiv += 1;
    };
    if ((countDiv < 2) && (n > 7)) {
        console.log(n)
    }
    countDiv = 1;
    n += 1
}