document.addEventListener('DOMContentLoaded', function () {
    let answers = [
      '1',
      '2',
      '3',
    ];

    let questions = [
      'вопрос 1?',
      'вопрос 2?',
      'вопрос 3?',
    ];

    let testContainer = document.getElementById('test');
    let checkButton = document.getElementById('button');

    questions.forEach(function (question, index) {
      let questionDiv = document.createElement('div');
      questionDiv.innerHTML = `
        <p>${question}</p>
        <input data-index="${index}">
      `;
      testContainer.appendChild(questionDiv);
    });

    function checkAnswers() {
      let inputs = testContainer.querySelectorAll('input');

      inputs.forEach(function (input) {
        let userAnswer = input.value.trim();
        let correctAnswer = answers[input.dataset.index];

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