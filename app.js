window.onload = function() {
  onReady();
};

function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
       title: newToDoText.value,
       complete: false
    });
    newToDoText.value = '';
    if (!newToDoText.value) { return; }
     renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });


  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });
  renderTheUI();
}

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
     let title = newToDoText.value;
     // create a new li
     let newLi = document.createElement('li');

     // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
});
}
