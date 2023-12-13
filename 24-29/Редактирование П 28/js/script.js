let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

function createCell(row, value, className) {
  let td = document.createElement('td');
  td.textContent = value;
  td.classList.add(className);
  row.appendChild(td);
  return td;
}

function allowEdit(td) {
  td.addEventListener('dblclick', function () {
    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = td.textContent;

    td.innerHTML = '';
    td.appendChild(editInput);

    editInput.focus();

    editInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        td.textContent = editInput.value;

        allowEdit(td);
      }
    });

    editInput.addEventListener('blur', function () {
      td.textContent = editInput.value;

      allowEdit(td);
    });
  });
}

function recountTotal() {
  let costs = table.querySelectorAll('.cost');
  let totalValue = 0;

  costs.forEach(function (cost) {
    totalValue += parseFloat(cost.textContent);
  });

  let totalElement = document.getElementById('total');
  if (totalElement) {
    totalElement.textContent = totalValue.toFixed(2);
  }
}

add.addEventListener('click', function () {
    let tr = document.createElement('tr');

    let nameCell = createCell(tr, name.value, 'name');
    let priceCell = createCell(tr, price.value, 'price');
    let amountCell = createCell(tr, amount.value, 'amount');
  
    let cost = price.value * amount.value;
    let costCell = createCell(tr, cost, 'cost');
  
    createCell(tr, 'удалить', 'remove');
  
    let rowIndex = table.rows.length;
    createCell(tr, rowIndex, 'row-index');
  
    tr.querySelector('.remove').addEventListener('click', function () {
      table.removeChild(tr);
      recountTotal();
    });
  
    table.appendChild(tr);
    recountTotal();
  

    allowEdit(nameCell);
    allowEdit(priceCell);
    allowEdit(amountCell);
  });
  