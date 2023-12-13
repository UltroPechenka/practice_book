document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    generateCalendar(currentYear, currentMonth);

    document.getElementById('prevMonthBtn').addEventListener('click', previousMonth);
    document.getElementById('nextMonthBtn').addEventListener('click', nextMonth);

    function generateCalendar(year, month) {
        let calendar = document.getElementById('calendar');
        let monthYear = document.getElementById('month-year');

        calendar.innerHTML = '';
        monthYear.textContent = getMonthName(month) + ' ' + year;

        let daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            let li = document.createElement('li');
            li.textContent = day;

            if (isToday(year, month, day)) {
                li.classList.add('today');
            }

            calendar.appendChild(li);
        }
    }

    function getMonthName(month) {
        let monthNames = [
            'Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];

        return monthNames[month];
    }

    function isToday(year, month, day) {
        let today = new Date();
        return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    }

    function previousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    }
});
