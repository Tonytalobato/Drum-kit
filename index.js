var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     var letra = this.innerHTML;
     elegirAudio(letra);
     animarBoton(letra);
    });
}

    document.addEventListener("keydown", function(event){
        var letra = event.key;
        elegirAudio(letra);
        animarBoton(letra);
    });
    
   function elegirAudio(letra) {
   switch (letra) {
    case "l":
        const audioElement1 = new Audio("sounds/crash.mp3");
            audioElement1.play();
            break;
            case "o":
        const audioElement2 = new Audio("sounds/kick-bass.mp3");
            audioElement2.play();
            break;
            case "v":
        const audioElement3 = new Audio("sounds/snare.mp3");
            audioElement3.play();
            break;
            case "e":
        const audioElement4 = new Audio("sounds/tom-1.mp3");
            audioElement4.play();
            break;
            case "y":
         const audioElement5 = new Audio("sounds/tom-2.mp3");
            audioElement5.play();
            break;
            case "o":
         const audioElement6 = new Audio("sounds/tom-3.mp3");
            audioElement6.play();
            break;
            case "u":
         const audioElement7 = new Audio("sounds/tom-4.mp3");
            audioElement7.play();
            break;
   
    default:
            console.log("Sorry, no tenemos esta letra aún...");
            break;
   }
}

function animarBoton(letra) {
    var btnSelect = document.querySelector("." + letra);
    btnSelect.classList.add("pressed");
    
    setTimeout(function() {
      btnSelect.classList.remove("pressed");
    }, "100");
}
//function rotate(buttons) {
    //var btnSelect = document.querySelector("." + letra);
    //function rotate();
//}

//"keyframes rotate"