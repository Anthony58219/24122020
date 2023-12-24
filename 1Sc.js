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