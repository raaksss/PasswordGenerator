const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let p1El=document.getElementById("p1");
let p2El=document.getElementById("p2");
let pass1="";
let pass2="";
let passwordGen=false;
function randomChar(){
    let char=Math.floor(Math.random()*characters.length);
    return characters[char];
    
}
function passwordGenerate(){
    if(passwordGen===false){
        
    for(let i=0;i<15;i++){
        pass1+= randomChar();
        pass2+= randomChar();
    }
    passwordGen=true;
    p1El.textContent=pass1;
    p2El.textContent=pass2;
}

}
function copyPasswordp1(){
let copyText=pass1;
 alert("Copy your password:  "+ pass1);
}

function copyPasswordp2(){
      let copyText=pass2;
 alert("Copy your password:  "+ pass2);
    
}