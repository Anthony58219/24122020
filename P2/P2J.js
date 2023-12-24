document.addEventListener('DOMContentLoaded', function () {
    let modalAbierto = null;
    let modalEnOrden = [];

    const audioOver9 =document.getElementById('Audio_N9');
    const VideoN9 = document.getElementById('Vd_N9');
    const musicaN12 = document.getElementById ('Audio_N9');

    const cuadrosModales = {
        'N1': ['Over1'],
        
        // Agrega los demás cuadros y sus modales correspondientes
    };

    function mostrarModal(modal) {
        if (modalAbierto) {
            modalAbierto.style.display = 'none';
        }

        modal.style.display = 'flex';
        modalAbierto = modal;

    }

    function cerrarModalAbierto() {
        if (modalAbierto) {
            modalAbierto.style.display = 'none';

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
