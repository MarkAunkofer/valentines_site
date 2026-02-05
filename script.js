document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Funktion, um eine zufällige Zahl zu generieren
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Event Listener für den Mouseover (Desktop) und Touchstart (Mobile)
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton); // Wichtig für Mobile
    noBtn.addEventListener('click', moveButton); // Falls jemand schnell ist ;)

    function moveButton(e) {
        // Verhindert das Standard-Verhalten, falls nötig
        if (e) e.preventDefault();

        const container = document.querySelector('.container');

        // Button Größe abrufen
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Container Größe
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const padding = 20;

        // Maximale Koordinaten berechnen
        // Wir nehmen Padding links/rechts und oben/unten
        const maxX = Math.max(0, containerWidth - btnWidth - padding);
        const maxY = Math.max(0, containerHeight - btnHeight - padding);

        // Neue zufällige Position berechnen
        // Wir stellen sicher, dass min (padding) nicht größer als max ist
        const newX = getRandomNumber(padding, Math.max(padding, maxX));
        const newY = getRandomNumber(padding, Math.max(padding, maxY));

        // Positioniere den Button absolut zum Container
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        // WICHTIG: Hoher z-index, damit er nicht versteckt wird
        noBtn.style.zIndex = '1000';
    }

    yesBtn.addEventListener('click', () => {
        // Animation starten
        for (let i = 0; i < 50; i++) {
            createHeart();
        }

        // Verzögerung vor der Weiterleitung, damit man die Animation sieht
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 1500);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');

        // Zufällige Position
        // Wir starten grob in der Mitte oder beim Button, hier einfach zufällig über den Screen verteilt
        // oder besser: Startposition beim Button wäre cooler, aber random screen ist auch okay "Party Effekt"
        // Let's make it random across the screen for specific effect requested "viele Herzen ploppen auf"
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';

        // Zufällige Größe
        const size = Math.random() * 20 + 20; // 20px bis 40px
        heart.style.fontSize = `${size}px`;

        // Zufällige Animationsdauer
        const duration = Math.random() * 0.5 + 1; // 1s bis 1.5s
        heart.style.animationDuration = `${duration}s`;

        document.body.appendChild(heart);

        // Aufräumen nach der Animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
});
