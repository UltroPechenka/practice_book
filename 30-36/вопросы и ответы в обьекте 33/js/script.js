// 1 вариант:

// document.addEventListener('DOMContentLoaded', function () {
//     let questions = {
//       'Вопрос 1?': '1',
//       'Вопрос 2?': '2',
//       'Вопрос 3?': '3',
//     };

//     let testContainer = document.getElementById('test');
//     let checkButton = document.getElementById('button');

//     for (let question in questions) {
//       let questionDiv = document.createElement('div');
//       questionDiv.innerHTML = `
//         <p>${question}</p>
//         <input data-right="${questions[question]}">
//       `;
//       testContainer.appendChild(questionDiv);
//     }

//     function checkAnswers() {
//       let inputs = testContainer.querySelectorAll('input');

//       inputs.forEach(function (input) {
//         let userAnswer = input.value.trim();
//         let correctAnswer = input.dataset.right;

//         if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//           input.classList.remove('wrong');
//           input.classList.add('right');
//         } else {
//           input.classList.remove('right');
//           input.classList.add('wrong');
//         }
//       });
//     }

//     checkButton.addEventListener('click', function () {
//       checkAnswers();
//     });
//   });

// 2 вариант:

document.addEventListener('DOMContentLoaded', function () {
    let questions = [
      {
        text:  'Вопрос 1?',
        right: '1',
      },
      {
        text:  'вопрос 2?',
        right: '2',
      },
      {
        text:  'Вопрос 3?',
        right: '3',
      },
    ];

    let testContainer = document.getElementById('test');
    let checkButton = document.getElementById('button');

    questions.forEach(function (questionObj) {
      let questionDiv = document.createElement('div');
      questionDiv.innerHTML = `
        <p>${questionObj.text}</p>
        <input data-right="${questionObj.right}">
      `;
      testContainer.appendChild(questionDiv);
    });

    function checkAnswers() {
      let inputs = testContainer.querySelectorAll('input');

      inputs.forEach(function (input) {
        let userAnswer = input.value.trim();
        let correctAnswer = input.dataset.right;

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