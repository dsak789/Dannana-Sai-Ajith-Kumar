var ifpr=document.getElementById("ifprojects");
function laj(){
   
    if(confirm("Click OK  for redirecting to GitHub Code page")){
        
        window.location="https://github.com/dsak789/Loan-Assistant"
    }
}
function imj(){
    
    if(confirm("Click OK  for redirecting to GitHub Code page")){
    
    window.location="https://github.com/dsak789/Inventory-Management";
    }
}
function pgi(){
    ifpr.style.display="block"
    ifpr.src="https://dsak789.github.io/Payment-Gateway-Integration/"
}
function irrs(){
    ifpr.style.display="block"
    ifpr.src="https://dsak789.github.io/Indian-Railway-Reservation-System/"
}
function fbc(){
    ifpr.style.display="block"
    ifpr.src="https://dsak789.github.io/Facebook-Login-Signup-Clone/"
}
function ohe(){
    ifpr.style.display="block"
    ifpr.src="https://dsak789.github.io/SB7-Basic-online-Html-Editor/"
}
function tttg(){
    ifpr.style.display="block"
    ifpr.src="https://dsak789.github.io/Tic-Tac-Toe/"
}
// alert("Click on Goto for redirecting to GitHub Code page")
var photos=[];
var t=2500,i=0;
photos[0]='Images/AJJU.jpg';
photos[1]='Images/sb Burgman.jpg';
photos[2]='Images/sb livo.jpg';
photos[3]='Images/sb madhavadhara.jpg';
photos[4]='Images/sb smile.jpg';
photos[5]='Images/sbcam.jpg';
photos[6]='Images/SBProfile.jpg';
photos[7]='Images/TarunSai.jpg';
function slide(){
    document.change.src=photos[i];
    if(i<photos.length-1){
        i++;       
    }else{
        i=0;
    }
    setTimeout("slide()",t);
}
// window.onload=slide;

// const onsearch=()=>{
//     const input = document.querySelector("search");
//     const filter = input.value.toUpperCase();
//     const list = document.querySelectorAll("#list li");

//     list.forEach((el)=>{
//         const text = el.textContent.toUpperCase();

//         el.style.display= text.includes(filter)?"":"none";
//     })
// }