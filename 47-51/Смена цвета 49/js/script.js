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

        function changeColor() {
            let currentColor = this.classList.item(0);
            let newColor = getNextElement(colors, currentColor);

            this.classList.remove(currentColor);
            this.classList.add(newColor);
        }

        for (let i = 0; i < rows; i++) {
            let row = field.insertRow(i);

            for (let j = 0; j < cols; j++) {
                let cell = row.insertCell(j);
                cell.addEventListener('click', changeColor);
                cell.classList.add(getRandomElement(colors));
            }
        }