var value = 0;
var memory = 0;
var operation = "";
var result = false;

$( document ).ready( function(){

  $(".num").each(function() {
    $(this).click(function() {
      if (result) $("#screen").text('0');
      result = false;
      if ($(this).text() === '.' ) {
        if ($("#screen").text().indexOf('.') == -1 ){
          $("#screen").text($("#screen").text()+$(this).text());
        }
      } else {
        if ($("#screen").text() == "0" || $("#screen").text() == "000") $("#screen").text("");
        $("#screen").text($("#screen").text()+$(this).text());
      }
    });
  });
  $("#backs").click(function() {
    $("#screen").text($("#screen").text().slice(0, -1));
    if ($("#screen").text() === "" ) $("#screen").text("0");
  });
  $("#clear").click(function() {
    $("#screen").text("0");
  });
  $("#clear1").click(function() {
    value = 0;
    memory = 0;
    operation = "";
    $("#screen").text("0");
  });

  $(".but").each(function() {
    $(this).on('click', function() {
      result = true;
      if (operation !== ""){
        console.log(memory + operation + $("#screen").text());
        try {
          $("#screen").text(eval(memory + operation + $("#screen").text()));
        } catch(err){
          $("#screen").text("Error");
        }
        memory = parseFloat($("#screen").text());
        operation = $(this).attr('id');
        if( operation === '=' ) operation = "";
      } else {
        memory = parseFloat($("#screen").text());
        operation = $(this).attr('id');
      }
      if (operation == "r" ) {
        memory = Math.sqrt(memory)
        $("#screen").text(memory);
        operation = '';
      }
    });
  });

  $.fn.isFloat = function(){
      var n = $(this).text();
      return n === +n && n !== (n|0);
  }
  $.fn.isInteger = function(){
      var n = $(this).text();
      return n === +n && n === (n|0);
  }
});
