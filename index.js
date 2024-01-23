let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpites = [];

formulario.onsubmit = () => {
    event.preventDefault();

    if(palpites.length < 10 ) {
        if(palpite.value == numeroRandomico) {
            again.classList.add('reset');
            winner.classList.add('sucess');
            palpite.remove();
            img_bia.src = "img/bia_feliz.png";
            return;
        }
    
        if(palpites.includes(palpite.value)){
            alert('Este palpite ja foi dado');
            formulario.reset();
            return;
        }

        if(palpite.value < numeroRandomico) {
            alert('É maior')
        }else{
            alert('É menor')
        }
    
        palpites.push(palpite.value);
        palpitesText.innerHTML = palpites.join(' - ');
        formulario.reset();

    }else {
        again.classList.add('reset');
        img_bia.src = "img/.bia_triste.png";
    }
}

again.onclick = () => {
    window.location.reload();
}