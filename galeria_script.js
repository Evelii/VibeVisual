
document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll('.image-item');

    // medium selecionado pelo user
    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedMedium = this.querySelector('h4').textContent;
            sessionStorage.setItem('chosenMedium', selectedMedium);
            window.location.href = 'galeria_display.html';
        });
    });


    //Para cada image-item - alterar as cores de background com recurso a nth-child
    imageItems.forEach(function(item, index) {
        // Determinar o numero do row 
        const rowNumber = Math.floor(index / 6) + 1;
        // Adicionar classe com base no numero do row
        item.classList.add(`row-${rowNumber}`);
    });

    // adicionar classe animate
    imageItems.forEach(item => {
        item.classList.add('animate');
    });

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const accordionContent = this.nextElementSibling;
            const imageItems = accordionContent.querySelectorAll('.image-item');

            // rotação do botao
            accordionContent.classList.toggle("expanded");

            // rotação do botao
            const accordionBtn = this.querySelector('.accordion-btn');
            accordionBtn.classList.toggle('rotate-90');

            // Adicionar classe animate para cada image-item with delay
            imageItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.toggle('animate');
                }, index * 100); // Adjustar delay
            });
        });
    });
    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('show');
        document.body.classList.toggle('menu-open');
      });
      document.querySelector('.close-menu').addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('show');
      });
});






