var ifpr=document.getElementById("ifprojects");
function laj(){
    ifpr.style.display="block"
    ifpr.src="https://github.com/sbcreations14378/Loan-Assistant"
}
function imj(){
    ifpr.style.display="block";
    ifpr.src="https://github.com/sbcreations14378/Inventory-Management";
}
function pgi(){
    ifpr.style.display="block"
    ifpr.src="https://sbcreations14378.github.io/Payment-Gateway-Integration/"
}
function irrs(){
    ifpr.style.display="block"
    ifpr.src="https://sbcreations14378.github.io/Indian-Railway-Reservation-System/"
}
function fbc(){
    ifpr.style.display="block"
    ifpr.src="https://sbcreations14378.github.io/Facebook-Login-Signup-Clone/"
}
var photos=[];
var t=2500,i=0;
photos[0]='images/AJJU.jpg';
photos[1]='images/sb Burgman.jpg';
photos[2]='images/sb livo.jpg';
photos[3]='images/sb madhavadhara.jpg';
photos[4]='images/sb smile.jpg';
photos[5]='images/sbcam.jpg';
photos[6]='images/SBProfile.jpg';
photos[7]='images/TarunSai.jpg';
function slide(){
    document.change.src=photos[i];
    if(i<photos.length-1){
        i++;       
    }else{
        i=0;
    }
    setTimeout("slide()",t);
}
window.onload=slide;
