// alert("connected");
list = [];
var type = prompt("what would you like to do?");
while (type !== "quit") {
  if (type === "new") {
    addToDo();
  } else if (type === "list") {
    listToDo();
  } else if (type === "delete") {
    delList();
  }
  type = prompt("what would you like to do?");
}
console.log("you quit the app!");

function addToDo() {
  var act = prompt("and your activity?");
  list.push(act);
  console.log("added todo");
}
function listToDo() {
  console.log("********");
  list.forEach(function (item, i) {
    console.log(i + ":" + item);
  });
  console.log("********");
}
function delList() {
  var index = prompt("index of todo to delete?");
  list.splice(index, 1);
  console.log("deleted todo");
}
