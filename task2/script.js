var time = +prompt('Введите время')

// if (time > 0 && time <=6) {
//     alert(time + ' часа ночи. ');
// } else if (time <= 10 && 7 <= time) {
//     alert(time + ' часов утра. ');
// } else if (time <= 17  && 11 <= time) {
//     alert(time + ' часа дня. ');
// } else if (time <= 23  && 18 <= time) {
//     alert(time + ' часов вечера. ');
// } else {
//     alert('Что-то пошло не так.');
// }

switch (time) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert(time + ' час(а) ночи. ')
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert(time + ' часов утра. ')
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert(time + ' часов дня. ')
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    alert(time + ' часов вечера. ')
    break;

    default:
    alert('Что-то пошло не так.')
        break;
}