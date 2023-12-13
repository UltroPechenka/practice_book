document.addEventListener('DOMContentLoaded', function () {
    let testContainer = document.getElementById('test');
    let checkButton = document.getElementById('checkButton');
    let questions = [
      {
        text: 'вопрос 1?',
        right: 0,
        variants: [
          'вариант 1',
          'вариант 2',
          'вариант 3'
        ]
      },
      {
        text: 'вопрос 2?',
        right: 1,
        variants: [
          'вариант 1',
          'вариант 2',
          'вариант 3'
        ]
      },
      {
        text: 'вопрос 3?',
        right: 2,
        variants: [
          'вариант 1',
          'вариант 2',
          'вариант 3'
        ]
      },
    ];

    questions.forEach(question => {
      let questionDiv = document.createElement('div');
      questionDiv.innerHTML = `<p>${question.text}</p>`;

      question.variants.forEach((variant, index) => {
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = question.text;
        input.value = index;
        questionDiv.appendChild(input);

        let label = document.createElement('label');
        label.appendChild(document.createTextNode(` ${variant}`));
        questionDiv.appendChild(label);
      });

      testContainer.appendChild(questionDiv);
    });

    checkButton.addEventListener('click', function () {
      let questionDivs = testContainer.querySelectorAll('div');

      questionDivs.forEach((questionDiv, index) => {
        let selectedAnswer = questionDiv.querySelector('input:checked');
        let correctAnswer = questions[index].right;

        let labels = questionDiv.querySelectorAll('label');
        labels.forEach(label => {
          label.classList.remove('right', 'wrong');
        });

        if (selectedAnswer) {
          if (parseInt(selectedAnswer.value) === correctAnswer) {
            labels[parseInt(selectedAnswer.value)].classList.add('right');
          } else {
            labels[parseInt(selectedAnswer.value)].classList.add('wrong');
          }
        }
      });
    });
  });