$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    var qOne = parseInt($("#effort").val());
    var qTwo = parseInt($("#math").val());
    var qThree = parseInt($("#why").val());
    var qFour = parseInt($("#race").val());
    var qFive = parseInt($("#jb").val());
    var nameInput = $("input#name").val();
    var answer = qOne + qTwo + qThree + qFour + qFive; 
    $("button#colorMode").click(function() {
      $("body").addClass("otherBackground");
    });
    $(".javaScrptClick").click(function () {
      $(".jsDescription").fadeIn();
    });
    $(".pythonClick").click(function () {
      $(".pythonDescription").toggle();
    });

    $(".name").append(nameInput);

    if (answer >= 5 && answer <= 10) {
      $("#javaScrpt").toggle();
    } else if (answer >= 10 && answer <= 17) {
      $("#cSharp").toggle();
    } else if (answer >= 17) {
      $("#python").toggle();
    }

    event.preventDefault();
  });
});
