let todoList = [{ item: "Buy pen", duedate: "4/10/2023" }];
displayitems();
function addtodo() {
  let inputelement = document.querySelector("#todo-input");
  let dateelement = document.querySelector("#todo-date");
  let todoitem = inputelement.value;
  let tododate = dateelement.value;

  todoList.push({ item: todoitem, duedate: tododate });
  inputelement.value = "";
  dateelement.value = "";
  displayitems();
}

function displayitems() {
  let containerelement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, duedate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);displayitems();">Delete</button>
    `;
  }
  containerelement.innerHTML = newHtml;
}
