
let tableBody = document.getElementById('tableBody');

for (let i = 1; i <= 5; i++) {

    let row = document.createElement('tr');

    let th = document.createElement('th');
    th.textContent = i;
    row.appendChild(th);

    for (let j = 1; j <= 5; j++) {

        let td = document.createElement('td');

        row.appendChild(td);
    }

    tableBody.appendChild(row);
}
