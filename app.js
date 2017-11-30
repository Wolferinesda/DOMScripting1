window.onload = function() {
  onReady();
};

function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return}

    toDos.push({
      id: id,
      title: newToDoText.value,
      complete: false
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";
     newLi.textContent = toDo.title;

     const removeButton = document.createElement('button');
     removeButton.textContent = 'Remove To-Do';
     removeButton.addEventListener('click', event => {
       deleteToDo(toDo.id);
       renderTheUI();
     });

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(removeButton);
   });
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI();
}
