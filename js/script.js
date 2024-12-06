const lampElm = document.getElementById("lamp")
const btnElm = document.getElementById("btn")

btnElm.addEventListener("click", function(){
    if (btnElm.textContent.includes("Accendi")) {
        // Accendere la lampadina
        lampElm.src = "img/yellow_lamp.png"
        // Cambiare testo e colore del bottone
        btnElm.textContent = "Spegni"
        btnElm.style.backgroundColor = "blue"
    } else {
        // Spegnere la lampadina
        lampElm.src = "img/white_lamp.png"
        // Cambiare testo e colore del bottone
        btnElm.textContent = "Accendi"
        btnElm.style.backgroundColor = "gray"
    }
  });