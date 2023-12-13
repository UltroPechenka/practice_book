let input = document.querySelector('.input #input');
let list = document.querySelector('.input #list');

  input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
        task.addEventListener('dblclick', function() {
            let editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = task.textContent;
            task.replaceWith(editInput);
            editInput.focus();
            editInput.addEventListener('keypress', function(event) {
              if (event.key === 'Enter') {
                task.textContent = editInput.value;
                editInput.replaceWith(task);
              }
            });
            editInput.addEventListener('blur', function() {
              editInput.replaceWith(task);
            });
          });
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
        remove.addEventListener('click', function() {
            let listItem = this.parentElement; 
            list.removeChild(listItem); 
          });
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
        mark.addEventListener('click', function() {
            let listItem = this.parentElement;
            listItem.classList.toggle('done');
          });
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
  });
