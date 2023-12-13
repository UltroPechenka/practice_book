let cells = document.querySelectorAll('#field td');
    start(cells);

    function start(cells) {
      let i = 0;

      for (let cell of cells) {
        cell.addEventListener('click', function () {
          if (this.textContent === '') {
            if (i % 2 === 0) {
              this.textContent = 'X';
            } else {
              this.textContent = 'O';
            }
            i++;
          }
        });
      }
    }