console.log($("h1").text());
$("h1").text("new fucking text");
// $("li").text("new fucking text");
// $("ul").html(" <li>Skittles</li><li> Star</li>");
// $("input").attr("placeholder", "your email");
var obj = {
  placeholder: "your house",
  type: "text",
};
$("input").attr(obj);
$("input").attr({
  placeholder: "your address",
  type: "text",
});
$("li").first().text("fuck");
// $("li").last().text("fuck");
var op = $("select").val();
$("li:nth-of-type(2)").text(op);
