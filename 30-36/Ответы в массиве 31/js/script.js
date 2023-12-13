document.addEventListener('DOMContentLoaded', function () {
    let answers = [
      '1',
      '2',
      '3',
    ];

    let inputs = document.querySelectorAll('#test input');
    let checkButton = document.getElementById('button');

    function checkAnswers() {
      inputs.forEach(function (input, index) {
        let userAnswer = input.value.trim();
        let correctAnswer = answers[index];

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          input.classList.remove('wrong');
          input.classList.add('right');
        } else {
          input.classList.remove('right');
          input.classList.add('wrong');
        }
      });
    }

    checkButton.addEventListener('click', function () {
      checkAnswers();
    });
  });