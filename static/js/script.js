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


    // Controla o movimento dos botões flutuantes
    const floating_buttons_box = document.querySelector('.index-div');
    const floating_buttons = document.querySelector('.floating-div');
    floating_buttons_box.addEventListener('mousemove', (e) => {

        const button_box = floating_buttons_box.getBoundingClientRect();
        const button_div = floating_buttons.getBoundingClientRect();
        const y = e.clientY - button_box.top;
        floating_buttons.style.transform = `translateY(${(button_box.height - button_div.height) * (y / button_box.height)}px)`;

    });


    // Reseta a posição dos botões flutuantes ao sair da área
    floating_buttons_box.addEventListener('mouseleave', (e) => {
        floating_buttons.style.transform = `translateY(0px)`;
    });

});

