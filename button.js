// button.js
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('btn--clicked');
        document.querySelectorAll('span.color').forEach((element) => {
            element.classList.add('expanded');
        });

        // Reset der Animation
        setTimeout(() => { button.classList.remove("btn--clicked"); }, 3500);
        setTimeout(() => {
            document.querySelectorAll('span.color').forEach((element) => {
                element.classList.remove('expanded');
            });
        }, 1700);

        // Link nach der Animation öffnen
        setTimeout(() => {
            window.location.href = button.href;
        }, 1800); // Anpassen, falls die Animation länger dauert
    });
});
