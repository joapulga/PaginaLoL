function toggleSearch() {
    const input = document.querySelector('.search-input');
    input.classList.toggle('show');
}

const roleImages = {
    asesinos: './assets/akali.webp',
    luchadores: './assets/yasuo.avif',
    magos: './assets/lux.avif',
    tiradores: './assets/jinx.avif',
    soportes: './assets/thresh.avif',
    tanques: './assets/leona.avif',
};

const roles = document.querySelectorAll('.roles div');
const imagenPrincipal = document.getElementById('imagen-principal');

roles.forEach(role => {
    role.addEventListener('click', () => {
        const roleName = role.getAttribute('data-role');
        const newImage = roleImages[roleName];
        if (newImage) {
            imagenPrincipal.src = newImage;
            imagenPrincipal.alt = `Campeón ${roleName}`;
        }
    });
});

