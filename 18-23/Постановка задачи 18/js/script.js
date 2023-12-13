let input = document.querySelector('.input #input');
  let list = document.querySelector('.input #list');

  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      let taskText = input.value;
      if (taskText.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.textContent = taskText;
        list.appendChild(listItem);
        input.value = '';
      }
    }
  });