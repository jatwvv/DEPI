let addBtn = document.getElementById("add");
let listContainer = document.getElementById("listcontainer");
let inputField = document.getElementById("inputField");

addBtn.addEventListener("click", function () {
  var list = document.createElement("li");
  list.classList.add("list-style");
  list.innerHTML = inputField.value;
  listContainer.appendChild(list);
  inputField.value = "";
  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
  });
});
