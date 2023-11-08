//***************************************************************************
//Entorno de prueba: chrone, linux. Sitio udemy al 08-11-2023

//1. Habilitar la transcripcion y los subtitulos en la plataforma de udemy
//2. traducir pagina entera con google
//3. copiar y pegar script en consola cada vez q se recargue el dom de la pagina
//***************************************************************************

let count = 0;
let transcripcionDestacada = "";
setInterval(function () {

    //busca los parrafos de las transcripciones
    var elementos = document.querySelectorAll('[data-purpose="cue-text"]');

    var elementosFiltrados = Array.from(elementos).filter(function (elemento) {
        var classes = elemento.getAttribute('class');

        // Comprueba si la cadena de clases comienza o termina con "transcript"
        return classes.startsWith('transcript') || classes.endsWith('transcript');
    });

    //Toma la transcripcion destacada
    if ((transcripcionDestacada != elementosFiltrados[0].innerText) && (elementosFiltrados[0].innerText != "")) {

        transcripcionDestacada = (elementosFiltrados[0].innerText);

        //Toma el div del subtitulo activo
        let subActivo = document.querySelectorAll('[data-purpose="captions-cue-text"]')[0].innerText;

        //Cambia el texto por el de la transcripcion y lo sumo al sub
        subActivo = subActivo + '\n' + '------' + '\n' + transcripcionDestacada
        //subActivo = transcripcionDestacada

        //Actualizo el div del subtitulo activo
        document.querySelectorAll('[data-purpose="captions-cue-text"]')[0].innerText = subActivo;
        //console.log("cambio sub " + count);
    }

    count += 1;
    //console.log("paso "+ count);
}, 200)


