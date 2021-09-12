var prevSccrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevSccrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-60px';
    }
    prevSccrollpos = currentScrollPos;
}


const typed = new Typed ('.typed2', {
    strings: [
        '<i>FOTOS</i>', 
        '<i>VIDEOS</i>',  
        '<i>STORIES</i>', 
    ],
    stringsElement: '#cadenas-texto', // Id del elemento que contiene cadena s de textoa mostrar
    typeSpeed: 45, // Velocidad en milisegundos para poner una letra.
    startDelay: 300, // Tiempo de retraso en iniciar la animación.
    backSpeed: 75, // Velocidad en milisegundos para brrar una letra.
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que se escriben las palabras.
    backDelay: 1500, // Tiempo de espera después de que termina de escribir una palabra
    loop: true, // Repetir el array de strings para.
    loopCount: false, // Cantidad de veces a repetir el array. false = infinito.
    showCursor: true, // Mostrar el cursor palpitando.
    curorChar: '|', // Caracter para el cursor.
    contentType: 'html', // 'html' o 'null' para texto sin formato. 
});

