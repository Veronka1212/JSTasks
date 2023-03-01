// "?"

function checkAge(age) {
    return (age > 18) ? true : confirm('reject');
}

// "||"
function checkAge2(age) {
    return (age > 18) || confirm('reject');
}

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    return a < b ? a : b;
}

//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x, n) {
    let pow = x;
    for (let i = 1; i < n; i++) {
        pow *= x;
    }
    return pow;
}

let x = prompt("Enter number", '');
let n = prompt("Enter n", '');

if (n < 1) {
    alert('Only natural numbers!');
} else {
    alert(pow(x, n));
}