document.addEventListener('DOMContentLoaded', function () {
    let inputs = document.querySelectorAll('#test input');
    let checkButton = document.getElementById('checkButton');

    function checkAnswer(input) {
      let userAnswer = input.value.trim();
      let correctAnswer = input.getAttribute('data-right');

      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        input.classList.remove('wrong');
        input.classList.add('right');
      } else {
        input.classList.remove('right');
        input.classList.add('wrong');
      }
    }

    inputs.forEach(function (input) {
      input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
          checkAnswer(input);
        }
      });
    });

    checkButton.addEventListener('click', function () {
      inputs.forEach(function (input) {
        checkAnswer(input);
      });
    });
  });