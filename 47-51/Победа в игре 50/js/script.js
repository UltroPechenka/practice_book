let rows = 3;
        let cols = 3;

        let field = document.getElementById('field');
        let colors = ['red', 'green', 'blue'];

        function getRandomElement(array) {
            let randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }

        function getNextElement(array, currentElement) {
            let currentIndex = array.indexOf(currentElement);
            let nextIndex = (currentIndex + 1) % array.length;
            return array[nextIndex];
        }

        function checkVictory(row, col) {
            let clickedColor = field.rows[row].cells[col].classList.item(0);

            for (let i = 0; i < cols; i++) {
                if (field.rows[row].cells[i].classList.item(0) !== clickedColor) {
                    return false;
                }
            }

            for (let i = 0; i < rows; i++) {
                if (field.rows[i].cells[col].classList.item(0) !== clickedColor) {
                    return false;
                }
            }

            if (row === col) {
                for (let i = 0; i < rows; i++) {
                    if (field.rows[i].cells[i].classList.item(0) !== clickedColor) {
                        return false;
                    }
                }
            }

            if (row + col === rows - 1) {
                for (let i = 0; i < rows; i++) {
                    if (field.rows[i].cells[rows - 1 - i].classList.item(0) !== clickedColor) {
                        return false;
                    }
                }
            }

            return true;
        }

        function changeColor() {
            let row = this.parentElement.rowIndex;
            let col = this.cellIndex;

            let currentColor = this.classList.item(0);
            let newColor = getNextElement(colors, currentColor);

            this.classList.remove(currentColor);
            this.classList.add(newColor);

            if (checkVictory(row, col)) {
                alert('Вы победили, все ячейки закрашены!');
                resetGame();
            }
        }

        function resetGame() {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    field.rows[i].cells[j].classList.remove(...colors);
                    field.rows[i].cells[j].classList.add(getRandomElement(colors));
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            let row = field.insertRow(i);

            for (let j = 0; j < cols; j++) {
                let cell = row.insertCell(j);
                cell.addEventListener('click', changeColor);
                cell.classList.add(getRandomElement(colors));
            }
        }