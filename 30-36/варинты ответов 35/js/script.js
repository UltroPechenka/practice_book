document.addEventListener('DOMContentLoaded', function () {
    let testContainer = document.getElementById('test');
    let checkButton = document.getElementById('checkButton');
    let answers = [0, 1, 2];

    checkButton.addEventListener('click', function () {
      let questions = testContainer.querySelectorAll('div');

      questions.forEach((question, index) => {
        let selectedAnswer = question.querySelector('input:checked');
        let correctAnswer = answers[index];

        let labels = question.querySelectorAll('label');
        labels.forEach(label => {
          label.classList.remove('right', 'wrong');
        });

        if (selectedAnswer) {
          if (selectedAnswer.value === correctAnswer.toString()) {
            selectedAnswer.parentElement.classList.add('right');
          } else {
            selectedAnswer.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });