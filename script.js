document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // Funktion, um eine zufällige Zahl zu generieren
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Event Listener für den Mouseover (Desktop) und Touchstart (Mobile)
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // Falls jemand schnell ist ;)

    function moveButton(e) {
        // Verhindert das Standard-Verhalten, falls nötig
        if(e) e.preventDefault();

        // Button Größe und Viewport abrufen
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Sicherheitsabstand zum Rand
        const padding = 20;

        // Maximale Koordinaten berechnen
        // Math.max(0, ...) verhindert negative Werte, falls das Fenster sehr klein ist
        const maxX = Math.max(0, windowWidth - btnWidth - padding);
        const maxY = Math.max(0, windowHeight - btnHeight - padding);

        // Neue zufällige Position berechnen
        // Wir stellen sicher, dass min (padding) nicht größer als max ist
        const newX = getRandomNumber(padding, Math.max(padding, maxX));
        const newY = getRandomNumber(padding, Math.max(padding, maxY));

        // Positioniere den Button
        noBtn.style.position = 'fixed'; // Nutze fixed, damit er relativ zum Viewport ist
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        
        // WICHTIG: Hoher z-index, damit er nicht versteckt wird
        noBtn.style.zIndex = '9999';
    }

    yesBtn.addEventListener('click', () => {
        window.location.href = 'success.html';
    });
});
