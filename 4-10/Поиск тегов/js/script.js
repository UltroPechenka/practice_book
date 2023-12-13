
let tagDescriptions = {
    'html': 'Определяет корневой элемент документа.',
    'head': 'Содержит метаинформацию о документе.',
    'body': 'Содержит содержимое веб-страницы.',
    'div': 'Группирует содержимое документа и предоставляет стиль.',
    'p': 'Определяет абзац текста.',
    'a': 'Определяет гиперссылку.',
    'img': 'Определяет изображение.',

};

function searchTag(event) {
    if (event.key === 'Enter') {
        let tagInput = document.getElementById('tagInput');
        let resultDiv = document.getElementById('result');

        let tagName = tagInput.value.toLowerCase();
        let description = tagDescriptions[tagName];

        if (description) {
            resultDiv.innerHTML = `<p><strong>${tagName}</strong>: ${description}</p>`;
        } else {
            resultDiv.innerHTML = '<p>Тег не найден.</p>';
        }
    }
}