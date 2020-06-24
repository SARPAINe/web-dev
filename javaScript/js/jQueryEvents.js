$("h1").click(function () {
  $("h1").css("background", "red");
});
// $("button").click(function () {
//   $(this).css("background", "red");
// });
$("button").click(function () {
  $(this).toggleClass("styleButton");
});
$("input").keypress(function (event) {
  if (event.which === 13) console.log("you hit enter");
});
$("button").on("mouseenter", function () {
  $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function () {
  $(this).css("font-weight", "normal");
});
