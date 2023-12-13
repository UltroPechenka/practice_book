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

function getFirstWeekDay(year, month) {
    let firstDay = new Date(year, month, 1);
    return firstDay.getDay();
}

function getLastWeekDay(year, month) {
    let lastDay = new Date(year, month + 1, 0);
    return lastDay.getDay();
}

let lastDay = getLastDay(2023, 2);
let numbersArray = range(lastDay);

function normalize(arr, left, right) {
    return Array.from({ length: left }).fill('').concat(arr, Array.from({ length: right }).fill(''));
}
function chunk(arr, n) {
    return Array.from({ length: Math.ceil(arr.length / n) }, (_, index) =>
        arr.slice(index * n, (index + 1) * n)
    );
}

let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay = getLastWeekDay(year, month);

let res = chunk(normalize(numbersArray, firstWeekDay, 6 - lastWeekDay), 7);
console.log(res);
