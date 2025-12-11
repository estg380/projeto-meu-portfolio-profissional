// adciona evento de clique a todos os link com a classe 'nav-link'
documento.querySelectorAll('.nav-link').forEach(anchor =>
{
    anchor.addEventListener('click',function (e) {
        //previne o comportamento padrão (salto instantâneo)
        e.preventDefaul();

        //obetem o id da seçao de destino(ex:#resumo)
        const targetId = this.getAttribute('href');

        //encotra o elemento de destino
        const targetElement = document.querySelector(targetId);

        //verifica se o elemento existe
        if (targetElement) {
            //Usa o metodo scrollIntoView com o comportamento 'smooth'
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});

//codigo sera expandido pra incluir novas funcionalidades
//funcionalidade de destacar o link ativo conforme o usuario rola a pagina.