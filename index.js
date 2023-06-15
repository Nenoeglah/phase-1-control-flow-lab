
function scuberGreetingForFeet(distance) {
   if (distance <= 199) {
      return "This one is on me!";
   } else if (distance <= 2001) {
      return "I will gladly take your thirty bucks.";
   } else if (distance <= 2501) {
      return "No can do.";
   } else {
        return "Wow, that journey is great!";
   }
}

function ternaryCheckCity(city){
   return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(etiquette){
   switch (etiquette) {
     case "generous":
       return "Thank you so much.";
     case "not as generous":
       return "Thank you.";
     default:
       return "Bye.";
   }
}
    