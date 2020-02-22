


$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    var qOne = parseInt($("#music").val());
    var qTwo = parseInt($("#math").val());
    var qThree = parseInt($("#vacay").val());
    var qFour = parseInt($("#race").val());
    var qFive = parseInt($("#jb").val());
    var nameInput = $("input#name").val();
    var score = qOne + qTwo + qThree + qFour + qFive; 
    //alert(score);

    $(".name").append(nameInput);

    if (score >= 5 && score <= 10) {
      $("#ruby").toggle();
    } else if (score >= 10 && score <= 17) {
      $("#cSharp").toggle();
    } else if (score >= 17) {
      $("#python").toggle();
    }
    

    event.preventDefault();
  });
});