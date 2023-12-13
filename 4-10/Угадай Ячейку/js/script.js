document.addEventListener('DOMContentLoaded', function () {
    let table = document.getElementById('table');
    let startButton = document.getElementById('startButton');
    let size = prompt('Выбрите размер таблицы:');
    let computerSelectedCells = [];

    startButton.addEventListener('click', startGame);

    function startGame() {

        startButton.style.display = 'none';

        table.innerHTML = '';

        for (let i = 0; i < size; i++) {
            const row = table.insertRow();
            for (let j = 0; j < size; j++) {
                const cell = row.insertCell();
                cell.addEventListener('click', function () {
                    checkCell(i, j);
                });
            }
        }

        computerSelectedCells.length = 0;
        TrueCells = prompt('Выберите количество верных ячеек:')
        while (computerSelectedCells.length < TrueCells) {
            let randomRow = Math.floor(Math.random() * size);
            let randomCol = Math.floor(Math.random() * size);
            let index = randomRow * size + randomCol;
            if (!computerSelectedCells.includes(index)) {
                computerSelectedCells.push(index);
            }
        }

        correctGuesses = 0;

        function checkCell(row, col) {
            let cellIndex = row * size + col;
            let cell = table.rows[row].cells[col];

            if (computerSelectedCells.includes(cellIndex)) {

                cell.style.backgroundColor = 'green';
                correctGuesses++;

                if (correctGuesses == TrueCells) {
                    alert('Поздравляем! Вы угадали все верные ячейки.');
                    resetGame();
                }
            } else {

                cell.style.backgroundColor = 'red';
            }
        }
    }

    function resetGame() {

        startButton.style.display = 'block';

        table.innerHTML = '';
        computerSelectedCells.length = 0;
    }
});
