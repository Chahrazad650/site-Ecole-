var inp=document.getElementById("nom");
var spn=document.getElementById("spa");

// perdre et recevoir le incput C'EST UN EVENEMENT
inp.addEventListener("focus",function(){
    spn.textContent="Saisir votre nom"
    spn.style.color="green"
})

// focusGained (l'evnmt focus) =/ focusLost(L'envnmt Bleur)

// Quand on saisit dans un INPUT donc on sait dans UN VALUE
function perdFocus(){
    if (inp.value=="") {
        // le spn est une BALISE DOUBLE DONC JE PEUX INSERER DU TEXTE that's why textContent
        spn.textContent="erreur le champs doit être renseigné"
        spn.style.color="red"
    } else {
        // On écrase avec =
        inp.value=inp.value.toUpperCase()
        // spn balise double donc textContent
        spn.textContent=""
    }
}

// Le span est dynamisé grace au JS car il change de val
// de vide à un  vert à un par rouge 
// Quand on a une foction NOMME ON ENLEVE LES ()
// Quand on a une foction ANONYME ON METS LES ()
 inp.addEventListener("blur",perdFocus)  

 var inpp=document.getElementById("prenom")    
 var spp=document.getElementById("spap")   
 
 inpp.addEventListener("focus",function () {
    spp.textContent="Saisir votre prenom"
    spp.style.color="green"
 })
inpp.addEventListener("blur",function() {
    if (inpp.value=="") {
        spp.textContent="Erreur le champs doit être renseigné"
        spp.style.color="red";
    } else {
        // subString() pour récuperer une sous-chaine de car et elle précise le 
        // start et le end qui sont des nombre 
        inpp.value=inpp.value.substring(0,1).toUpperCase()+inpp.value.substring(1).toLowerCase()
        spp.textContent=""
    }
})

var inm = document.getElementById("mdp")
var spmdp = document.getElementById("spmdp")

// L'evmnt qui est associé à la valeur de l'input c'est l'vnmt INPUT
// et si c'est sur HTML c'est ONINPUT
inm.addEventListener("input", function (params) {
    if (inm.value.length < 4) {
        spmdp.textContent = "Faible"
        spmdp.style.color = "red"
        inm.style.color = "red"
    } else {
        if (inm.value.length >= 4 && inm.value.length < 8) {
            spmdp.textContent = "Moyen"
            spmdp.style.color = "orange"
            inm.style.color = "orange"
        } else {
            spmdp.textContent = "Fort"
            spmdp.style.color = "green"
            inm.style.color = "green"
        }

    }
})

var inpe=document.getElementById("eml")
var spe = document.getElementById("spem")

inpe.addEventListener("input",function () {
    // Si indexOf retourne un -1 veut que le car N'existe pas
    if (inpe.value.indexOf("@")!=-1) {
        spe.textContent="Email validé"
        spe.style.color="green"
    } else {
        spe.textContent="Email non validé"
        spe.style.color="red"
    }
})