// document = object
// .ready() = method of jquery
// .ready(...) = argument/parameterpassed to that method
// function(){} in the method is an IIFE = immediate invoked f/n expression
$(document).ready(function(){

  console.log("doc is ready"); 

  $("#dogeDiv").draggable(
    { containment: "#dogeHouse", scroll: false }
  
  );
  
  // $("#dogePic").draggable();

  let userGreeting = "Hello there, "
  
  $("button").click(function(){
    userGreeting += $("#fname").val();
    $("#Greetingoutput").text(userGreeting + "!");
  });
});