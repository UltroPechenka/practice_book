function createTable(parent, arr) {
    for (let row of arr) {
        let tr = document.createElement('tr');
        for (let cell of row) {
            let td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        }
        parent.appendChild(tr);
    }
}

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
    return new Date(year, month, 1).getDay();
}

function getLastWeekDay(year, month) {
    let lastDay = getLastDay(year, month);
    return new Date(year, month, lastDay).getDay();
}

function normalize(arr, left, right) {
    return [...Array(left).fill(''), ...arr, ...Array(right).fill('')];
}

function chunk(arr, n) {
    return Array.from({ length: Math.ceil(arr.length / n) }, (_, index) =>
        arr.slice(index * n, (index + 1) * n)
    );
}

let arr = range(getLastDay(year, month));
let firstWeekDay = getFirstWeekDay(year, month);
let lastWeekDay = getLastWeekDay(year, month);
let numbersArray = normalize(arr, firstWeekDay, 6 - lastWeekDay);
let nums = chunk(numbersArray, 7);

createTable(body, nums);
