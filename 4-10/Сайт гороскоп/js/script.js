document.addEventListener('DOMContentLoaded', function () {
  let inputDate = document.getElementById('inputDate');
  let todayRadio = document.getElementById('todayRadio');
  let tomorrowRadio = document.getElementById('tomorrowRadio');
  let afterTomorrowRadio = document.getElementById('afterTomorrowRadio');
  let resultContainer = document.getElementById('horoscopeResult');

  inputDate.addEventListener('input', clearHoroscope);
  todayRadio.addEventListener('change', clearHoroscope);
  tomorrowRadio.addEventListener('change', clearHoroscope);
  afterTomorrowRadio.addEventListener('change', clearHoroscope);

  function clearHoroscope() {
    resultContainer.innerHTML = '';
  }

  function showHoroscope() {
    let selectedSign = getSelectedSign();
    let selectedDay = getSelectedDay();
    let horoscope = getHoroscope(selectedSign, selectedDay);
    
    displayHoroscope(horoscope);
  }

  function getSelectedSign() {
    let signRadios = document.getElementsByName('sign');
    for (let radio of signRadios) {
      if (radio.checked) {
        return radio.value;
      }
    }
  }

  function getSelectedDay() {
    if (todayRadio.checked) {
      return 'today';
    } else if (tomorrowRadio.checked) {
      return 'tomorrow';
    } else if (afterTomorrowRadio.checked) {
      return 'afterTomorrow';
    }
  }

  function getHoroscope(sign, day) {

    return `Гороскоп для ${sign} на ${day}...`;
  }

  function displayHoroscope(horoscope) {
    resultContainer.innerHTML = `<p>${horoscope}</p>`;
  }
});
