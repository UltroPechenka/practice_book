function init(selector) {
    let cells = document.querySelectorAll(selector);
    let currentPlayer = 'X';

    function isVictory() {
        let combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let comb of combs) {
            if (
                cells[comb[0]].textContent == currentPlayer &&
                cells[comb[1]].textContent == currentPlayer &&
                cells[comb[2]].textContent == currentPlayer
            ) {
                return true;
            }
        }

        return false;
    }

    function isBoardFull() {
        for (let cell of cells) {
            if (!cell.textContent) {
                return false;
            }
        }
        return true;
    }

    function resetBoard() {
        for (let cell of cells) {
            cell.textContent = '';
            cell.addEventListener('click', cellClick);
        }
    }

    function announceWinner() {
        alert(`Player ${currentPlayer} wins!`);
        resetBoard();
    }

    function announceDraw() {
        alert('Это ничья, коллеги!');
        resetBoard();
    }

    function cellClick() {
        if (!this.textContent) {
            this.textContent = currentPlayer;

            if (isVictory()) {
                announceWinner();
            } else if (isBoardFull()) {
                announceDraw();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    for (let cell of cells) {
        cell.addEventListener('click', cellClick);
    }
}

init('#field td');
