$(document).ready(function(){
  $("button#hello").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("#img3").hide();
    $("#img2").hide();
    $("#img1").show();
    $("p#user").text("Hello!");
    $("p#webpage").text("Why hello there!");
  });

  $("button#goodbye").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
    $("#img3").hide();
    $("#img1").hide();
    $("#img2").show();
    $("p#user").text("Goodbye!");
    $("p#webpage").text("Goodbye, dear user!");
  });

  $("button#stop").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
    $("#img2").hide();
    $("#img1").hide();
    $("#img3").show();
    $("p#user").text("Stop copying me!");
    $("p#webpage").text("Pardon me, I meant no offense.");
  });
});