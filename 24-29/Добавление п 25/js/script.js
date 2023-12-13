let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

function createCell(row, value, className) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(className);
    row.appendChild(td);
    return td;
  }

  add.addEventListener('click', function() {
    let tr = document.createElement('tr');
  
    createCell(tr, name.value, 'name');
    createCell(tr, price.value, 'price');
    createCell(tr, amount.value, 'amount');
  
    let cost = price.value * amount.value;
    let costCell = createCell(tr, cost, 'cost');
  
    createCell(tr, 'удалить', 'remove');
  
    tr.querySelector('.remove').addEventListener('click', function() {
      table.removeChild(tr);
    });
  
    table.appendChild(tr);
  });
  