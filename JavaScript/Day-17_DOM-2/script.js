let input = document.getElementById("input");
let btn = document.getElementById("addBtn");
let list = document.getElementById("list");

// ➕ Add Task
btn.addEventListener("click", () => {
  if (input.value === "") return;

  // create element
  let li = document.createElement("li");

  // add text
  li.textContent = input.value;

  // create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";

  // append button inside li
  li.appendChild(delBtn);

  // append li to list
  list.appendChild(li);

  input.value = "";
});

// 🧠 Event Delegation (IMPORTANT)
list.addEventListener("click", (e) => {

  // delete task
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }

  // mark complete
  else if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }

});