let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function range(count) {
    return Array.from({ length: count }, (_, index) => index + 1);
}

function getLastDay(year, month) {
    let nextMonth = new Date(year, month + 1, 0);
    return nextMonth.getDate();
}

let lastDay = getLastDay(year, month);
let numbersArray = range(lastDay);

console.log(numbersArray);
