let events = [
    { date: '2000-01-01', title: 'Событие 1', description: 'Описание события 1' },
    { date: '2001-02-15', title: 'Событие 2', description: 'Описание события 2' },
    { date: '2002-05-10', title: 'Событие 3', description: 'Описание события 3' },

];

function displayEvents(year) {
    let table = document.getElementById('table');
    table.innerHTML = '';

    let filteredEvents = events.filter(event => event.date.startsWith(year));

    if (filteredEvents.length === 0) {
        table.innerHTML = '<tr><td colspan="3">Событий не найдено</td></tr>';
        return;
    }

    filteredEvents.forEach(event => {
        let row = table.insertRow();
        let dateCell = row.insertCell(0);
        let titleCell = row.insertCell(1);
        let descriptionCell = row.insertCell(2);

        dateCell.textContent = event.date;
        titleCell.textContent = event.title;
        descriptionCell.textContent = event.description;
    });
}

document.getElementById('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let year = this.value.trim();
        if (year.length === 4 && !isNaN(year)) {
            displayEvents(year);
        } else {
            alert('Введите корректный год.');
        }
    }
});