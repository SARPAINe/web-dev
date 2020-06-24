// $("button").on("click", function () {
//   $("div").fadeToggle(1000, function () {
//     // $(this).remove();
//   });
// });
$("#2nd").on("click", function () {
  $("div").slideToggle(2000, function () {
    $(this).remove();
  });
});
