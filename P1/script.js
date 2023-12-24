function snow() {
    // TWEAK VALUES
    let amount = 300;   // snowfall thickness
    let baseSize = 1;  // smallest size
    let sizeModifier = 10;   // size variation
    let baseDuration = 10;   // fall speed, increase to slow down
    let durationModifier = 10   // fall speed variation
    let lowestOpacity = 0.2;  // 0 transparent, 1 opaque

    let container = document.getElementById('snow');

    let i = 0;
    while (i < amount) {
        let flake = document.createElement('i');
        container.appendChild(flake);

        let size = baseSize + Math.random() * sizeModifier;
        let posX = Math.floor(Math.random() * (window.innerWidth + window.innerWidth * 0.8));
        let delay = Math.random() * -20;
        let duration = Math.random() * durationModifier + baseDuration;

        flake.style.width = size + 'px';
        flake.style.height = size + 'px';
        flake.style.left = posX + 'px';
        flake.style.animationDelay = delay + 's';
        flake.style.animationDuration = duration + 's';
        flake.style.opacity = Math.random() * (1 - lowestOpacity) + lowestOpacity;

        i++;
    }
}

snow();





/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax');

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, delay: 1})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.about__data, .celebrate__img`, {origin: 'right'})
sr.reveal(`.about__img, .celebrate__data`, {origin: 'left'})
sr.reveal(`.send__card`, {interval: 100})
sr.reveal(`.footer`)





document.addEventListener('DOMContentLoaded', function () {
    let modalAbierto = null;

    // Definir la relación entre cuadritos y modales
    const cuadrosModales = {
        'N1': ['Over1'],
        'N2': ['Over2'],
        'N3': ['Over3'],
        'N4': ['Over4'],
        'N5': ['Over5'],
        'N6': ['Over6'],
        'N7': ['Over7'],
        'N8': ['Over8'],
        'N9': ['Over9'],
        'N10': ['Over10'],
        'N11': ['Over11'],
        'N12': ['Over12'],
        'N13': ['Over13'],
        'N14': ['Over14'],
        'N15': ['Over15'],
        'N16': ['Over16'],
        'N17': ['Over17'],
        'N18': ['Over18'],
        'N19': ['Over19'],
        'N20': ['Over20'],
        'N21': ['Over21'],
        'N22': ['Over22'],
        'N23': ['Over23'],
        'N24': ['Over24'],
        'N25': ['Over25'],
        // ... Continúa con la relación de los demás cuadros y modales
    };

    // Función para mostrar un modal
    function mostrarModal(modal) {
        if (modalAbierto) {
            modalAbierto.style.display = 'none';
        }

        modal.style.display = 'flex';
        modalAbierto = modal;
    }

    // Mostrar el modal "Inicio" al cargar la página
    const modalInicio = document.getElementById('Inicio');
    mostrarModal(modalInicio);

    // Agregar un listener de clic a cada cuadro
    Object.keys(cuadrosModales).forEach(function (cuadroId) {
        const cuadro = document.getElementById(cuadroId);

        cuadro.addEventListener('click', function () {
            // Verificar si el cuadro está habilitado
            if (!cuadro.classList.contains('inhabilitado')) {
                // Mostrar el primer modal asociado al cuadro
                const modalesAsociados = cuadrosModales[cuadroId];
                if (modalesAsociados && modalesAsociados.length > 0) {
                    const modalId = modalesAsociados[0];
                    const modal = document.getElementById(modalId);
                    mostrarModal(modal);
                }

                // Colorea el cuadro de gris y deshabilita el clic
                cuadro.classList.add('inhabilitado');
            }
        });
    });

    // Agregar un listener de clic a todos los botones con la clase "cerrar-modal" para cerrar el modal
    const botonesCerrarModal = document.querySelectorAll('.cerrar-modal');
    botonesCerrarModal.forEach(function (boton) {
        boton.addEventListener('click', function () {
            if (modalAbierto) {
                modalAbierto.style.display = 'none';
                modalAbierto = null; // Restablece la variable del modal abierto
            }
        });
    });

    // Agregar un listener de clic al área fuera del contenido del modal para cerrar el modal
    Object.values(cuadrosModales).forEach(function (modalesAsociados) {
        modalesAsociados.forEach(function (modalId) {
            const modal = document.getElementById(modalId);
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    modalAbierto = null; // Restablece la variable del modal abierto
                }
            });
        });
    });
});

