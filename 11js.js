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
    let modalEnOrden = [];
    
    const VideoN3 = document.getElementById('Video_N3');
    const audioOver9 =document.getElementById('Audio_N9');
    const VideoN9 = document.getElementById('Vd_N9');
    const musicaN12 = document.getElementById ('Audio_N9');

    const cuadrosModales = {
        'N1': ['Over1','Over1_2','Over1_3'],
        'N2': ['Over2', 'Over2_2'],
        'N3': ['Over3','Over3_1'],
        'N4': ['Over4'],
        'N5': ['Over5', 'Over5_2', 'Over5_3','Over5_4'],
        'N6': ['Over6', 'Over6_1'],
        'N7': ['Over7', 'Over7_1', 'Over7_2', 'Over7_3', 'Over7_4', 'Over7_5'],
        'N8': ['Over8'],
        'N9': ['Over9','Over9_1','Over9_2','Over9_3'],
        'N10': ['Over10'],
        'N11': ['Over11','Over11_1','Over11_2','Over11_3','Over11_4','Over11_5','Over11_6'],
        'N12': ['Over12','Over12_1','Over12_2','Over12_3','Over12_4','Over12_5','Over12_6'],
        'N13': ['Over13','Over13_1','Over13_2','Over13_3', 'Over13_4'],
        'N14': ['Over14'],
        'N15': ['Over15','Over15_1','Over15_2'],
        'N16': ['Over16','Over16_1','Over16_2','Over16_3'],
        'N17': ['Over17','Over17_1','Over17_2','Over17_3'],
        'N18': ['Over18','Over18_1','Over18_2','Over18_3'],
        'N19': ['Over19','Over19_1','Over19_2','Over19_3','Over19_4','Over19_5','Over19_6','Over19_7'],
        'N20': ['Over20','Over20_1','Over20_2','Over20_3'],
        'N21': ['Over21','Over21_1','Over21_2','Over21_3','Over21_4','Over21_5'],
        'N22': ['Over22','Over22_1','Over22_2','Over22_3','Over22_4','Over22_5'],
        'N23': ['Over23'],
        'N24': ['Over24'],
        'N25': ['Over25','Over25_2','Over25_3','Over25_4','Over25_5','Over25_6','Over25_7','Over25_8','Over25_9','Over25_10','Over25_11','Over25_12','Over25_13','Over25_14','Over25_15','Over25_16','Over25_17','Over25_18','Over25_x','Over25_19']
        // Agrega los demás cuadros y sus modales correspondientes  'Over25','Over25_2','Over25_3','Over25_4','Over25_5',
    };

    function mostrarModal(modal) {
        if (modalAbierto) {
            modalAbierto.style.display = 'none';
        }

        modal.style.display = 'flex';
        modalAbierto = modal;

        if (modal.id ==='Over9_1'){
            VideoN9.play();
        }


    }

    function cerrarModalAbierto() {
        if (modalAbierto) {
            modalAbierto.style.display = 'none';

            if(modalAbierto.id==='Over9_3'){
               audioOver9.pause();
               VideoN9.pause();
            }

            if(modalAbierto.id==='Over3_1'){
                VideoN3.pause();
            }            

            modalAbierto = null;
        }
    }

    function mostrarSiguienteModal() {
        if (modalEnOrden.length > 0) {
            const siguienteModalId = modalEnOrden.shift();
            const siguienteModal = document.getElementById(siguienteModalId);
            mostrarModal(siguienteModal);
        }
    }

    function agregarModalEnOrden(modales) {
        modalEnOrden.push(...modales);
    }

    // Mostrar modal de inicio al cargar la página
    const modalInicio = document.getElementById('Inicio');
    mostrarModal(modalInicio);

    document.getElementById('BtnInicio').addEventListener('click', function () {
        cerrarModalAbierto();
        mostrarSiguienteModal();
    });

    document.querySelectorAll('.cerrar-modal').forEach(function (boton) {
        boton.addEventListener('click', function () {
            cerrarModalAbierto();
            mostrarSiguienteModal();
        });
    });

    Object.keys(cuadrosModales).forEach(function (cuadroId) {
        const cuadro = document.getElementById(cuadroId);

        cuadro.addEventListener('click', function () {
            if (!cuadro.classList.contains('inhabilitado')) {
                const modalesAsociados = cuadrosModales[cuadroId];
                agregarModalEnOrden(modalesAsociados);
                cuadro.classList.add('inhabilitado');
                mostrarSiguienteModal(); // Mostrar el primer modal inmediatamente al hacer clic en el cuadro
            }
        });
    });

    Object.values(cuadrosModales).forEach(function (modalesAsociados) {
        modalesAsociados.forEach(function (modalId) {
            const modal = document.getElementById(modalId);
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    cerrarModalAbierto();
                    mostrarSiguienteModal();
                }
            });
        });
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text');
    const paragraph = `Holaaaa!!! Bienvenida Bb!!!!
    
               Bienvenida a la apertura de un nuevo capitulo
               mas en nuestras historias, donde cada click es
               una puerta a un nuevo mundo de emociones
               y recuerdos, que te llevará a diferentes capitulos
               de nuestra historia, cada uno lleno de momentos 
                inolvidables que hemos compartido durante
               estos 3 años.
  
               Que cada pagina de este nuevo capitulo este lleno
               de sorpresas y mas momentos inolvidables,
               que este nuevo año que comenzamos sea tan
               especial, lleno de nuevos recuerdos.
               
               Te amoooo muuchooo mi reina hermosa!!!!! `;
  
    typeTextWithDelay(paragraph, textContainer, 25, 0);
  });
  
  function typeTextWithDelay(text, container, wordDelay = 25, lineDelay = 0) {
    let index = 0;
  
    function type() {
      container.textContent += text[index];
      index++;
  
      if (index < text.length) {
        let delay = text[index] === '\n' ? lineDelay : wordDelay;
        setTimeout(type, delay);
      } else {
        container.style.borderRight = 'none';  // Quita el borde después de la animación
      }
    }
  
    container.style.borderRight = '2px solid #000';  // Agrega el borde inicial
    setTimeout(type, 0);  // Inicia la animación
  }
  