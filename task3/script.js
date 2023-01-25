var a1 = +prompt('Введите 1-е число')
var a2 = +prompt('Введите 2-е число')
var a3 = +prompt('Введите 3-е число')

if ((a1 > a2) && (a1 < a3) || (a1 < a2) && (a1 > a3)) {
    alert(a1);
} else if ((a2 > a1) && (a2 < a3) || (a2 < a1) && (a2 > a3)) {
    alert(a2);
} else if ((a3 > a1) && (a3 < a2) || (a3 < a1) && (a3 > a2)) {
    alert(a3);
}