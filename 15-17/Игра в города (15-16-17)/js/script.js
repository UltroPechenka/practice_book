let cities = [];
let currentPlayer = 1;
let lastCity = '';

document.getElementById('field').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleCityInput();
    }
});

function handleCityInput() {
    let inputField = document.getElementById('field');
    let cityName = inputField.value.trim();

    if (cityName === '') {
        showMessage('Введите название города');
        return;
    }

    if (cities.length > 0 && cityName.charAt(0).toLowerCase() !== lastCity.charAt(lastCity.length - 1).toLowerCase()) {
        showMessage('Город должен начинаться на ту букву, на которую заканчивается предыдущий город');
        inputField.value = '';
        return;
    }

    if (cities.includes(cityName)) {
        showMessage('Этот город уже был назван, введите другой');
        inputField.value = '';
        return;
    }

    cities.push(cityName);
    lastCity = cityName;
    showMessage(`Игрок ${currentPlayer} назвал город: ${cityName}`);
    inputField.value = '';
    switchPlayer();
    playRobot();
}

function playRobot() {
    let robotCity = getRobotCity();
    cities.push(robotCity);
    lastCity = robotCity;
    showMessage(`Робот назвал город: ${robotCity}`);
    switchPlayer();
}

function getRobotCity() {
    let availableCities = getAllCities().filter(city => !cities.includes(city));
    return availableCities[0] || 'Конец игры, все города закончились!';
}

function getAllCities() {

    return ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Париж', 'Лондон', 'Токио', 'Берлин'];
}

function showMessage(message) {
    let messageList = document.getElementById('messageList');
    let listItem = document.createElement('li');
    listItem.className = 'messageItem';
    listItem.textContent = message;
    messageList.appendChild(listItem);
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}