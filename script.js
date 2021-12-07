let PPT = {
    'tu': '',
    'bot': '',
    'posibilidades': ['piedra','papel','tijera'],
    'victorias': 0,
    'derrotas': 0,
    'empates': 0,
    'piedra':{ 'piedra': 0.5, 'papel': 0, 'tijera': 1},
    'papel':{ 'piedra': 1, 'papel': 0.5, 'tijera': 0},
    'tijera':{ 'piedra': 0, 'papel': 1, 'tijera': 0.5},
    'turnoAcabado': false,
}

 function Juego(eleccion){

    PPT['tu'] = eleccion.id;
    PPT['bot'] = eleccionBot(); 
    campeon = ganador(PPT['tu'], PPT['bot']);
    mensage = mensageFinal(campeon);
    mostrarGanador(campeon, mensage);
    actualizarTabla();

    console.log(PPT['victorias']);
    console.log(PPT['derrotas']);
    console.log(PPT['empates']);

}

function eleccionBot(){
    let numAleatorio = Math.floor(Math.random()*3);
    
    PPT['bot'] = PPT['posibilidades'][numAleatorio];

    return PPT['bot'];
}

function ganador(tuEleccion, botEleccion){

    let resultado = PPT[tuEleccion][botEleccion];

    let campeon;

    switch(resultado){
        case 0: campeon = 'bot'; PPT['derrotas']++; break;
        case 0.5:campeon = 'empate';PPT['empates']++; break;
        case 1:campeon = 'tu'; PPT['victorias']++;break;
    }

    return campeon;
}

function mensageFinal(campeon){

    let mensage; 
    let mensageh2;

    switch(campeon){
        case 'tu':         
        mensage = document.createTextNode('Ganaste!');
        mensageh2 = document.createElement('h2');
        mensageh2.appendChild(mensage);
        mensageh2.setAttribute('id', 'mensageFinal'); 
        break;

        case 'empate': 
        mensage = document.createTextNode('Empataste!');
        mensageh2 = document.createElement('h2');
        mensageh2.appendChild(mensage);
        mensageh2.setAttribute('id', 'mensageFinal'); 
        break;

        case 'bot': 
        mensage = document.createTextNode('Perdiste!');
        mensageh2 = document.createElement('h2');
        mensageh2.appendChild(mensage);
        mensageh2.setAttribute('id', 'mensageFinal');
        break;
    }

    return mensageh2;
}

function mostrarGanador(campeon, mensage){

    imagenes = document.querySelector('#juego').querySelectorAll('img');

    for(i = 0; i<imagenes.length; i++){
        imagenes[i].remove();
    }
    
    let img1 = document.createElement('img');
    img1.src = PPT['tu'] + '.png';
    img1.setAttribute('height', '150');
    img1.setAttribute('width', '150');


    let img2 = document.createElement('img');
    img2.src = PPT['bot'] + '.png';
    img2.setAttribute('height', '150');
    img2.setAttribute('width', '150');

    document.querySelector('#juego').appendChild(img1);
    document.querySelector('#juego').appendChild(mensage);

    switch(campeon){

        case 'tu': document.getElementById('mensageFinal').style.color = 'green'; break;

        case 'empate':document.getElementById('mensageFinal').style.color = 'gold'; break;

        case 'bot': document.getElementById('mensageFinal').style.color = 'red'; break;
    }

    document.querySelector('#juego').appendChild(img2);
    img2.setAttribute('box-shadow', '0px 10px 50px red');

    PPT['turnoAcabado'] = true;
}

function reset(){

    if(PPT['turnoAcabado'] === true){

        imagenes = document.querySelector('#juego').querySelectorAll('img');

        for(i=0; i<imagenes.length; i++){
    
            imagenes[i].remove();
    
        }
    
        texto = document.querySelector('#juego').querySelectorAll('h2');
    
        texto[0].remove()
    
        let img1 = document.createElement('img');
        img1.src = 'piedra.png';
        img1.setAttribute('height', '150');
        img1.setAttribute('width', '150');
        img1.setAttribute('id', 'piedra');
        img1.setAttribute('onclick', 'Juego(this)');
    
    
        let img2 = document.createElement('img');
        img2.src = 'papel.png';
        img2.setAttribute('height', '150');
        img2.setAttribute('width', '150');
        img2.setAttribute('id', 'papel');
        img2.setAttribute('onclick', 'Juego(this)');
    
    
        let img3 = document.createElement('img');
        img3.src = 'tijera.png';
        img3.setAttribute('height', '150');
        img3.setAttribute('width', '150');
        img3.setAttribute('id', 'tijera');
        img3.setAttribute('onclick', 'Juego(this)');
    
        document.querySelector('#juego').appendChild(img1);
        document.querySelector('#juego').appendChild(img2);
        document.querySelector('#juego').appendChild(img3);
    }

    PPT['turnoAcabado'] = false;


}

function actualizarTabla(){

    document.querySelector('#victorias').textContent = PPT['victorias'];
    document.querySelector('#derrotas').textContent = PPT['derrotas'];
    document.querySelector('#empates').textContent = PPT['empates'];

}