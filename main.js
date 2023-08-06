$(document).ready(function() {
  $("#show").click(function() {
    $("#sb").fadeIn(10);
  });
  $("#h").click(function() {
    $("#sb").fadeOut(10);
  });
  $("select").change(function() {
    var selectedOption = $(this).children("option:selected").val();
    if (selectedOption === "2") {
      window.location.href = "index.html";
    }else if(selectedOption === "1"){
      window.location.href = "arabic-home.html";
    }
  });
});