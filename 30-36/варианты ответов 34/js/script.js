document.addEventListener('DOMContentLoaded', function () {
    let testContainer = document.getElementById('test');

    testContainer.addEventListener('change', function (event) {
      if (event.target.type === 'radio') {
        let selectedValue = event.target.value;
        let correctAnswer = event.target.closest('div').dataset.right;

        let labels = event.target.closest('div').querySelectorAll('label');
        labels.forEach(label => {
          label.classList.remove('right', 'wrong');
        });

        if (selectedValue === correctAnswer) {
          event.target.parentElement.classList.add('right');
        } else {
          event.target.parentElement.classList.add('wrong');
        }
      }
    });
  });