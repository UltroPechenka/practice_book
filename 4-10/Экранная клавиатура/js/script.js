function handleKeyboardClick(event) {
    if (event.target.classList.contains('key')) {
        let key = event.target.textContent;

        if (key === 'Backspace') {

            inputField.value = inputField.value.slice(0, -1);
        } else if (key === 'Enter') {

            inputField.value += '\n';
        } else {

            inputField.value += key;
        }
    }
}