// MOSTRAR EL BOTON DE SCROLL
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scrollTopBtn.classList.add("show"); // Añade la clase para mostrar
    } else {
        scrollTopBtn.classList.remove("show"); // Elimina la clase para ocultar
    }
}

// VOLVER ARRIBA CON EL BOTON DE SCROLL
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// TEXTO CAMBIANTE DEL INICIO

let textos = [
    "FullStack",
    "Php",
    "Larabel",
    "WordPress"
]

let index = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
    const textElement = document.getElementById("texto");

    let fullText = textos[index];

    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    textElement.textContent = currentText;

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && currentText === fullText) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index = (index + 1) % textos.length;
        speed = 100;
    }
    setTimeout(typeEffect, speed);
}
// Iniciar el efecto de escritura cuando la página cargue
window.onload = typeEffect;



// FUNCION PARA MANIPULAR EL NAV CUANDO ESTA STICKY
document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('nav');
    var sticky = nav.offsetTop;

    function checkSticky() {
        if (window.scrollY > sticky) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', checkSticky);
});


// FUNCION BOTON VER MAS
function texto_oculto() {
    const contenidoOculto = document.getElementsByClassName('contenido-oculto');
    const boton = document.getElementById('texto_oculto');
    const puntosClave = document.querySelectorAll('.punto-clave');
    const primerP = document.getElementById('xp');

    let todosVisibles = true;

    for (let i = 0; i < contenidoOculto.length; i++) {
        if (contenidoOculto[i].style.display === 'none' || contenidoOculto[i].style.display === '') {
            contenidoOculto[i].style.display = 'block';
            todosVisibles = false;
        } else {
            contenidoOculto[i].style.display = 'none';
        }
    }

    // Cambiar la posición de los puntos clave
    if (!todosVisibles) {
        puntosClave[1].style.top = '14%';
        puntosClave[2].style.top = '36%';
    } else {
        puntosClave[1].style.top = '35%';
        puntosClave[2].style.top = '80%';
        primerP.scrollIntoView({ behavior: 'smooth' });
    }
    boton.textContent = todosVisibles ? 'Ver más' : 'Ver menos';
}









// FUNCION PARA ALTERNAR LA EXPERIENCIA LABORAL



let experienciaIt = document.getElementById('experienciaIt');
let experienciaChef = document.getElementById('experienciaChef');
let botonIt = document.getElementsByClassName('botonIt')[0];
let botonChef = document.getElementsByClassName('botonChef')[0];

if (experienciaIt.style.display == "flex" && experienciaChef.style.display == "none") {
    botonIt.classList.add('active');
    botonChef.classList.remove('active');
}
function actualizarBotones() {
    if (experienciaIt.style.display == "flex" && experienciaChef.style.display == "none") {
        botonIt.classList.add('active');
        botonChef.classList.remove('active');
    } else if (experienciaChef.style.display == "flex" && experienciaIt.style.display == "none") {
        botonChef.classList.add('active');
        botonIt.classList.remove('active');
    }
}




function botonExperienciaIt() {
    // Comprobar si está visible o no
    if (experienciaIt.style.display === 'none' || experienciaIt.style.display === '') {
        experienciaIt.style.display = 'flex'; // Mostrar experiencia IT
        experienciaChef.style.display = 'none'; // Ocultar experiencia Chef
        botonIt.classList.add('active'); // Añadir clase activa
        botonChef.classList.remove('active'); // Quitar clase activa del botón Chef
    }
    actualizarBotones();
}

function botonExperienciaChef() {
    // Comprobar si está visible o no
    if (experienciaChef.style.display === 'none' || experienciaChef.style.display === '') {
        experienciaChef.style.display = 'flex'; // Mostrar experiencia Chef
        experienciaIt.style.display = 'none'; // Ocultar experiencia IT

    }
    actualizarBotones();
}


// FUNCION PARA ALTERNAR SECCIONES DE LOS PROYECTOS


function mostrarProyectos() {
    let alternWeb = document.getElementById('alternWeb');
    let creArt = document.getElementById('creArt');
    let proyectos = document.getElementById('proyectos');
    let btnAlternWeb = document.getElementById('btnAlternWeb');
    let btnCreArt = document.getElementById('btnCreArt');
    let btnProyectos = document.getElementById('btnProyectos');

    if (proyectos.style.display == 'none' || proyectos.style.display == '') {
        proyectos.style.display = 'flex';
        alternWeb.style.display = 'none';
        creArt.style.display = 'none';
        btnProyectos.classList.add('active');
        btnAlternWeb.classList.remove('active');
        btnCreArt.classList.remove('active');

        console.log('mostrando proyectos');
    } else {
        return;
    }
}

function mostrarCreArt() {
    let alternWeb = document.getElementById('alternWeb');
    let creArt = document.getElementById('creArt');
    let proyectos = document.getElementById('proyectos');
    let btnAlternWeb = document.getElementById('btnAlternWeb');
    let btnCreArt = document.getElementById('btnCreArt');
    let btnProyectos = document.getElementById('btnProyectos');

    if (creArt.style.display == 'none' || creArt.style.display == '') {
        creArt.style.display = 'flex';
        proyectos.style.display = 'none';
        alternWeb.style.display = 'none';
        btnCreArt.classList.add('active');
        btnAlternWeb.classList.remove('active');
        btnProyectos.classList.remove('active');
        console.log('mostrando creart');
    } else {
        return;
    }
}

function mostrarAlternWeb() {
    let alternWeb = document.getElementById('alternWeb');
    let creArt = document.getElementById('creArt');
    let proyectos = document.getElementById('proyectos');
    let btnAlternWeb = document.getElementById('btnAlternWeb');
    let btnCreArt = document.getElementById('btnCreArt');
    let btnProyectos = document.getElementById('btnProyectos');

    if (alternWeb.style.display == 'none' || alternWeb.style.display == '') {
        alternWeb.style.display = 'flex';
        proyectos.style.display = 'none';
        creArt.style.display = 'none';
        btnAlternWeb.classList.add('active');
        btnCreArt.classList.remove('active');
        btnProyectos.classList.remove('active');
        console.log('mostrando alternWeb');
    } else {
        return;
    }
}