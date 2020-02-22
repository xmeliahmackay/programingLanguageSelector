


$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    var qOne = parseInt($("#music").val());
    var qTwo = parseInt($("#math").val());
    var qThree = parseInt($("#vacay").val());
    var qFour = parseInt($("#race").val());
    var qFive = parseInt($("#jb").val());
    alert(qOne + qTwo + qThree + qFive);
    var score = qOne + qTwo + qThree + qFour + qFive; 
    alert(score);
  });




});