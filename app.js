window.onload = function() {
  onReady();
};

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    let delButton = document.createElement('button');
    delButton.textContent = "Delete";

    delButton.addEventListener('click', () => {
      toDoList.removeChild(newLi);
    });

    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(delButton);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });
}
