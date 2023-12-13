let cells = document.querySelectorAll('#field td');

function start(cells) {
    cells.forEach(cell => {
      cell.addEventListener('click', function () {
        this.textContent = 'X';
      });
    });
  }
    start(cells);