let rows = 3;
        let cols = 3;

        let field = document.getElementById('field');

        for (let i = 0; i < rows; i++) {
            let row = field.insertRow(i);

            for (let j = 0; j < cols; j++) {
                let cell = row.insertCell(j);
                cell.addEventListener('click', changeColor);
            }
        }

        let colors = ['red', 'green', 'blue'];

        function getRandomElement(array) {
            let randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }

        function changeColor() {
            this.className = getRandomElement(colors);
        }