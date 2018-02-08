window.addEventListener('load', function () {
    (window as any).cookieconsent.initialise({
        palette: {
            popup: {
                background: '#003d5c'
            },
            button: {
                background: 'transparent',
                border: '#5cc6fc',
                text: '#5cc6fc'
            }
        },
        content: {
            message: 'Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.',
            dismiss: 'Ok',
            link: 'Chci vědět víc'
        }
    })
});
