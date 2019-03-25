$(document).ready(function(){
  $("#SPIN").click(function(){
    $("#WHEELIMG").css("transform","rotate(360deg)");
  });
});

var WheelChoices = [25,50,50,75,75,100,100,100,100,125,150,175,200,200,200,
                    250,275,300,450,500,"Free Spin","Lose a turn","Buy a vowel","Bankrupt"]
var score = 0;
var mark = 0;
var spinAct = true; //activate button
var temp;

function spin(){
if(spinAct == true){
temp  = Math.floor(Math.random() * WheelChoices.length);
mark = WheelChoices[temp];


document.getElementById("MRK").innerHTML = mark;

if(!isNaN(WheelChoices[temp])){
document.getElementById('COM').innerHTML = "Please input a character";
spinAct = false;
enterAct = true;
}

if(WheelChoices[temp]=="Free Spin"){
tries++;
document.getElementById("COM").innerHTML = "Free Spin! Please input a character";
mark = 0; //set mark to zero
spinAct = false;
enterAct = true;
}
if(WheelChoices[temp]=="Lose a turn"){
tries--;
document.getElementById("COM").innerHTML = "Lose a Turn! Please spin wheel";
}
if(WheelChoices[temp]=="Bankrupt"){
score = 0;
document.getElementById("SCR").innerHTML = 0;
document.getElementById("COM").innerHTML = "Sorry, Bankrupt! Please spin wheel";
}
if(WheelChoices[temp]=="Buy a vowel"){
  document.getElementById("COM").innerHTML = "Buy a vowel! Please enter vowel";
  mark = 0;
  spinAct = false;
  enterAct = true;
}

if(spinAct == false){
  $(document).ready(function(){
    $("#SPIN").css({"background-color":"buttonface", "padding": "1px 6px 1px 6px"});
    $("#submitbut").css({"background-color":"yellow", "padding": "9px"});
    });

}

// console.log(temp);
// console.log(WheelChoices[temp]);
// console.log(score);

// if(mark)


} // to close off if statement
}
