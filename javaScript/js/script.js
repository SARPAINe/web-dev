function isEven(num) {
  console.log(typeof num);
  if (num % 2 === 0) return true;
  else return false;
}
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   console.log(isEven(i));
// }

function fact(num) {
  var ans = 1;
  if (num === 0);
  else {
    for (var i = 1; i <= num; i++) ans *= i;
  }
  console.log(ans);
}

// for (var i = 0; i <= 10; i++) {
//   console.log(fact(i));
// }
function kebabToSnake(str) {
  var newStr = str.replace(/ /g, "_");
  // var newStr = str.replace(/-/g, "_");
  // var newStr = str.replace("-", "_"); this will only change one char

  console.log(newStr);
}
// colors = ["red", "blue", "green"];
// colors.forEach(function (color) {
//   console.log(color);
// });
// function fuckMyLife(col) {
//   console.log(" my life is boring " + col);
// }
// numbers = [1, 2, 3, 4, 5];

// Adding methods to objects

// event listener

//var button = document.querySelector("button");
// var h1 = document.querySelector("h1");
// button.addEventListener("click", function () {
//   h1.textContent = "i was clicked niggas";
// });

// var lis = document.querySelectorAll("li");
// for (var i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", function () {
//     this.style.background = "pink";
//     this.style.fontSize = "30px";
//   });
// }

// toggling the background color of body between purple and white
// var button = document.querySelector("button");
// var body = document.querySelector("body");
// button.addEventListener("click", function () {
//   if (body.style.background !== "purple") body.style.background = "purple";
//   else body.style.background = "white";
// });

var firstli = document.querySelectorAll("li");
firstli[0].addEventListener("mouseover", function () {
  firstli[0].style.color = "red";
});
firstli[0].addEventListener("mouseout", function () {
  firstli[0].style.color = "black";
});
firstli[0].addEventListener("click", function () {
  firstli[0].classList.toggle("done");
});
