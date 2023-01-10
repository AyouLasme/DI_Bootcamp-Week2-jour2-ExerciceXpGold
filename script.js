// Exercice1
let langue = prompt("quelle langue parlez vous?") 
let minLangue = langue.toLowerCase()
switch (minLangue){
    case "français":
        alert("Bonjour");
        break;
    case "Anglais":
        alert("Hello!!!");
        break;
    case "Hebreux":
        alert("Shalom!!!");
        break;
    default:
        alert("01110011 01101111 01110010 01110010 01111001")
}

// Exercice2
let note = prompt("entrer votre note")
if(note > 90){
    console.log("A");
}else if(note > 80 && note <= 90){
    console.log("B")
}else if(note >= 70 && note < 80){
    console.log("C")
}else if(note < 70){
    console.log("D")
}


// Exercice3
let verbe = prompt("Entrer un verbe")
if(verbe.length >= 3 && !verbe.endsWith("ing")){
    console.log(verbe + "ing")
}else if(verbe.length >= 3 && verbe.endsWith("ing")){
    console.log(verbe + "ly")
}else if(verbe.length < 3){
    console.log(verbe)
}
