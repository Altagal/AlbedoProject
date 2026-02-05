document.addEventListener("DOMContentLoaded", function () {
    // Rolamento suave da pagina ao clicar nos botões de navegação
    const botoes = document.querySelectorAll('.btn-scroll');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const elementoAlvo = document.querySelector(targetId);

            const offset = 95; // margem acima

            window.scrollTo({
                top: elementoAlvo.getBoundingClientRect().top + window.scrollY - offset,
                behavior: 'smooth'
            });
        });
    })
});

