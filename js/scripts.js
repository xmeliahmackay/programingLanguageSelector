 





$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    var qOne = $("#music").val();
    var qTwo = $("#math").val();
    var qThree = $("#vacay").val();
    var qFour = $("#race").val();
    var qFive = $("#jb").val();
    alert(qOne + qTwo + qThree + qFour + qFive);
  });




});