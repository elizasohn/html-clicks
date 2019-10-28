$(document).ready(function() {
  var elements = ["h1", "p", "img"];
  var h1 = "header";
  var p = "paragraph";
  var img = "image";


  elements.forEach(function(element){
    $(element).click(function(event){
    alert("This is a " + element);
    event.preventDefault();
  });

  });
});
