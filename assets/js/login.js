let mdp=document.getElementById("mdpass");
let speye=document.getElementById("speye");
let eye=document.getElementById("eye");
let eyes=document.getElementById("eyes");
speye.addEventListener("click",function(){
    if(mdp.type=="password"){
        mdp.type="text";
        eye.style.display="none";
        eyes.style.display="inline";
    } else{
        mdp.type="password";
        eye.style.display="inline";
        eyes.style.display="none";
    }
})