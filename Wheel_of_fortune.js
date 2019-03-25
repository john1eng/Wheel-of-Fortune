var comment = null;
var display = [];
var display1;
var hint = null;
var score = null;
var chrChose = null;
var wrong = null;
var matchChr = /[a-zA-Z]/i;
var match_ = /_/i;
var tries = 4;
var input;
var testInp;
var enterAct = false;
var words = [];


function startGame(){
  var temp = Math.floor(Math.random() * list.length);
  words = list[temp].question;
  comment = "Welcome to Wheel of Fortune";
  hint = list[temp].hint;
  for(var i=0; i < words.length; i++){
    tries = 4; // reset to 4 again
    if(matchChr.test(words[i])){
    display[i] = '_';
    display1 = display.toString();
    display1 = display1.replace(/,,/g, "\xa0\xa0\xa0");
    display1 = display1.replace(/,/g , " ");
    document.getElementById("WRD").innerHTML = display1;
    document.getElementById("HINT").innerHTML = "Hint: " + hint;

  }
}
//testing
for(var i=0; i < words.length; i++){

if(/ /i.test(words[i])){
var c = document.createElement("SPAN");
c.innerText = "\xa0\xa0\xa0";
document.getElementById("testing").appendChild(c);
}


if(matchChr.test(words[i])){
var spn = document.createElement("SPAN");
spn.id = 'te';
spn.innerText = "\xa0\xa0";
document.getElementById("testing").appendChild(spn);
}
//remove all children in the div with testing id

var el = document.getElementById('testing');
while( el.hasChildNodes() ){
    el.removeChild(el.lastChild);
}

}
$(document).ready(function(){
  $("#SPIN").css({"background-color":"yellow", "padding":"9px"});
  });


}





function submitChr(){
// words = "Merry Christmas";
// comment = "Welcome to Wheel of Fortune";
// hint = "Special Day";
var count = 0;
if(enterAct == true){//so that the submit chr button is activated
if(tries > 0){
// if(!match_.test(display)){  //test if there are any '_' first
// for(var i=0; i < words.length; i++){
//   tries = 4; // reset to 4 again
//   if(matchChr.test(words[i])){
//   display[i] = '_';
//   console.log(display[i]);
// }
// }
// }
for(var i=0; i<words.length; i++){  //match CHR to the words
input = document.getElementById("CHR").value;
 if(words[i].toLowerCase()==input){
   display[i] = words[i];
   count++;
   console.log(count + "count");
 }
document.getElementById("COM").innerHTML = "Yes, there are " + count + " matches!  Please spin the wheel";
}
if(count!=0){
score += mark;
document.getElementById("SCR").innerHTML = "Total: " + score;
}





display1 = display.toString();
display1 = display1.replace(/,,/g, "\xa0\xa0\xa0");
display1 = display1.replace(/,/g , " ");
console.log(display1 + "display1");
document.getElementById("WRD").innerHTML = display1;
document.getElementById("HINT").innerHTML = "Hint: " + hint;
console.log(match_.test(display));
console.log(match_);
testImp = '/'+input +'/i';
testImp = eval(testImp);

if(!testImp.test(words)){  //reduce one tries if input not matching
tries--;
document.getElementById("COM").innerHTML = "Sorry, no matches! Please spin the wheel";
}
if(!match_.test(display))
document.getElementById("COM").innerHTML = "You Win $"+ score;

console.log(tries);
}else{
  document.getElementById("COM").innerHTML = "Ran out of turns";
}
}
enterAct= false;
spinAct = true;

if(spinAct == true){
  $(document).ready(function(){
    $("#SPIN").css({"background-color":"yellow", "padding": "9px"});
    $("#submitbut").css({"background-color":"buttonface", "padding": "1px 6px 1px 6px"});
    });

}

}
