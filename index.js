let numeroRandomico = (Math.floor(Math.random() * 100) + 1);
let palpites = [];

formulario.onsubmit = () => {
    event.preventDefault();

    if(palpites.length != 10 ) {
        
        if(palpite.value === numeroRandomico) {
            reset.classList.add('reset');
            img_bia.src = "img/.bia_feliz.png";
            return;
        }
    
        if(palpites.includes(palpite.value)){
            alert('Este palpite ja foi dado');
            formulario.reset();
            return;
        }
    
        palpite.push(palpite.value);
        palpitesText.innerHTML = palpites.join(' - ');
    }else {
        reset.classList.add('reset');
        img_bia.src = "img/.bia_triste.png";
    }
}

reset.onclick = () => {

}