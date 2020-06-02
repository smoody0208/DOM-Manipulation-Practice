$(document).ready(function(){
  $("button#hello").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("p#user").text("Hello!");
    $("p#webpage").text("Why hello there!");
  });

  $("button#goodbye").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
    $("p#user").text("Goodbye!");
    $("p#webpage").text("Goodbye, dear user!");
  });

  $("button#stop").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
    $("p#user").text("Stop copying me!");
    $("p#webpage").text("Pardon me, I meant no offense.>");
  });

  // $("ul#user").children("li").first().click(function() {
  //   alert('hi');
  // });
  // $("ul#webpage").children("li").first().click(function() {
  //   alert('hi');
  // });

});