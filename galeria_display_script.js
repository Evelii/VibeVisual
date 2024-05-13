document.addEventListener('DOMContentLoaded', function() {
    const chosenMedium = sessionStorage.getItem('chosenMedium');
    const gridContainer = document.querySelector('.grid-container');
    const justMediumTag = document.querySelector('.justSelectedMedium .medium-placeholder');
    const mixedMediumTag = document.querySelector('.mixedTecSelectedMedium .medium-placeholder');



    if (!chosenMedium) {
        window.location.href = 'galeria.html';
        return;
    }

    const mediumBreadcrumb = document.getElementById('medium-breadcrumb');
        if (chosenMedium) {
        mediumBreadcrumb.textContent = `${chosenMedium}`;
        justMediumTag.textContent = `${chosenMedium}`;
        mixedMediumTag.textContent = `${chosenMedium}`;
    }

    console.log("Chosen Medium:", chosenMedium);

    // ARTWORK DATA SAMPLE
    const artworks = [
        { name: 'Profundezas', id: "user1",user: "Ana Artista", tipo: ['Para Venda'], meio: ['Acrílico'], topico: ['Abstrato', 'Fantasia'], imagePath: 'media/pexels-ancatakespics-7875216.jpg' },
        { name: 'Artwork 2', id: "user1",user: "Carlos Cavalete", tipo: ['Para Exibição'], meio: ['Grafite'], topico: ['Realismo'], imagePath: 'media/galeria5.png' },
        { name: 'Guardião', id: "user1",user: "Carlos Cavalete", tipo: ['Para Exibição'], meio: ['Acrílico'], topico: ['Natureza', 'Animais', 'Realismo'], imagePath: 'media/galeria2.png' },
        { name: 'Saudade', id: "user1",user: "Vitor Setas", tipo: ['Para Venda'], meio: ['Acrílico'], topico: ['Paisagem'], imagePath: 'media/galeria3.png' },
        { name: 'Artwork 5', id: "user1",user: "Ana Pedroso", tipo: ['Para Exibição'], meio: ['Técnica Mista com Grafite'], topico: ['Paisagem', 'Fantasia'], imagePath: 'media/galeria11.png' },
        { name: 'Artwork 6', id: "user1",user: "Sofia Ribas", tipo: ['Para Venda'], meio: ['Técnica Mista com Grafite'], topico: ['Retrato', 'Ilustração'], imagePath: 'media/galeria12.png' },
        { name: 'Amigo', id: "user1",user: "António Artista", tipo: ['Para Exibição'], meio: ['Técnica Mista com Acrílico'], topico: ['Ilustração'], imagePath: 'media/galeria6.png' },
        { name: 'Artwork 9', id: "user1",user: "Miguel Monsanto", tipo: ['Para Venda'], meio: ['Grafite'], topico: ['Retrato', 'Abstrato'], imagePath: 'media/galeria7.png' },
        { name: 'As Ovelhas da Escócia', id: "user1",user: "Judite Marcos", tipo: ['Para Venda'], meio: ['Técnica Mista com Acrílico'], topico: ['Paisagem', 'Realismo', 'Animais'], imagePath: 'media/galeria8.png' },
        { name: 'Artwork 11', id: "user1",user: "Lucilia Gonçalves", tipo: ['Para Venda'], meio: ['Grafite'], topico: ['Anatomia', 'Animais'], imagePath: 'media/galeria9.png' },
        { name: 'Artwork 12', id: "user1",user: "Pedro Águas", tipo: ['Para Venda'], meio: ['Grafite'], topico: ['Retrato', 'Ilustração', 'Fantasia'], imagePath: 'media/galeria10.png' },
    ];


        //HARDCODED//
    function generateArtworkHTML(artwork) {
        const topicoString = artwork.topico.join(', ');
        let meioClass = '';
        if (artwork.meio.includes('Acrílico') || artwork.meio.includes('Técnica Mista com Acrílico')) {
            meioClass = 'acrilico-background';
        }
        if (artwork.meio.includes('Grafite') || artwork.meio.includes('Técnica Mista com Grafite')) {
            meioClass = 'grafite-background';
        }
    
        // Hardcoded user link para "Ana Artista"
        const userLink = artwork.user === "Ana Artista" ? '<a href="profilepage.html" class="user-link">' + artwork.user + '</a>' : '<a href="#" class="user-link">' + artwork.user + '</a>';
    
        return `
            <div class="artwork-item">
                <img src="${artwork.imagePath}" alt="${artwork.name}">
                <h3>"${artwork.name}" <span class="feito-por">feito por ${userLink}</span></h3>
                <div class="tags">
                    <span class="tag meio ${meioClass}">${artwork.meio.join(', ')}</span>
                    <span class="tag tipo" data-tipo="${artwork.tipo}">${artwork.tipo.join(', ')}</span><br>
                    <span class="tag topicoclass">${topicoString}</span>
                </div>
            </div>
        `;
    }
    

    function filterArtworkByMedium() {
        console.log("Filtering artwork by medium...");
        
        
        gridContainer.innerHTML = '';
        
        artworks.forEach(artwork => {
            const matchesChosenMedium = artwork.meio.some(medium => medium.toLowerCase().includes(chosenMedium.toLowerCase()));
    
            if (matchesChosenMedium) {
                const artworkHTML = generateArtworkHTML(artwork);
                gridContainer.insertAdjacentHTML('beforeend', artworkHTML);
            }
        });
    }


    // Filtragem baseada no tipo selecionado
    function filterSelection(c) {
        var artworks = document.querySelectorAll('.artwork-item');
        artworks.forEach(function(artwork) {
            var tipo = artwork.querySelector('.tag.tipo').textContent.trim();
            if (c === 'all' || tipo === c) {
                artwork.style.display = 'block';
            } else {
                artwork.style.display = 'none';
            }
        });
    }
    


var tipoTags = document.querySelectorAll('.tag.tipo');
var topicoTags = document.querySelectorAll('.tag.topico');

// Função para fazer update do estado ativo de uma tag 
function updateActiveState(tag, otherTags) {
    var isActive = tag.classList.contains('active');
    if (isActive) {
        tag.classList.remove('active');
        
        tag.querySelector('.x').style.display = 'none'; // esconder 'X'
    } else {
        // Remover 'active' de todas as outras tags
        otherTags.forEach(function(otherTag) {
            otherTag.classList.remove('active');
    
            otherTag.querySelector('.x').style.display = 'none';
        });
                                   
        tag.classList.add('active'); // adicionat class ativa para a tag clicada

        tag.querySelector('.x').style.display = 'inline'; // mostrar 'X'
    }
}

// Event listener - tipo tags
tipoTags.forEach(function(tag) {
    
    // guardar o textro original da tag
    tag.dataset.originalText = tag.textContent;

    // criar span para o X
    tag.innerHTML = '<span class="x">X </span>' + tag.innerHTML;

    tag.addEventListener('click', function() {
        updateActiveState(this, tipoTags);
        // Função filtro
        filterArtwork();
    });
    
});

// Add event listener - Técnica tags
const tecnicaTags = document.querySelectorAll('.tag.tecnica');

tecnicaTags.forEach(function(tag) {
    tag.dataset.originalText = tag.textContent;
    tag.innerHTML = '<span class="x">X </span>' + tag.innerHTML;
    tag.addEventListener('click', function() {
        updateActiveState(this, tecnicaTags);
        filterArtwork();
    });
});

// Event - topico tags
topicoTags.forEach(function(tag) {
    // Store the original text of the tag
    tag.dataset.originalText = tag.textContent;

    // Add a span to hold the 'X'
    tag.innerHTML = '<span class="x">X </span>' + tag.innerHTML;

    tag.addEventListener('click', function() {
        var isActive = this.classList.contains('active');
        if (isActive) {
            this.classList.remove('active');
            // Hide the 'X'
            this.querySelector('.x').style.display = 'none';
        } else {
            // Add 'active' class to the clicked tag
            this.classList.add('active');
            // Show the 'X'
            this.querySelector('.x').style.display = 'inline';
        }
        // Call the filter function
        filterArtwork();
    });
});



function filterArtwork() {
    console.log("Filtering artwork...");
    const selectedTopicoTags = Array.from(document.querySelectorAll('.tag.topico.active')).map(tag => tag.dataset.originalText.trim().toLowerCase());
    const selectedTipoTags = Array.from(document.querySelectorAll('.tag.tipo.active')).map(tag => tag.dataset.originalText.trim().toLowerCase());
    console.log("Selected Topico Tags:", selectedTopicoTags);
    console.log("Selected Tipo Tags:", selectedTipoTags);
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    artworks.forEach(artwork => {
        const artworkTopicoTags = artwork.topico.map(tag => tag.trim().toLowerCase());
        const artworkTipoTags = artwork.tipo.map(tag => tag.trim().toLowerCase());
        const shouldShowTopico = selectedTopicoTags.every(tag => artworkTopicoTags.includes(tag));
        const shouldShowTipo = selectedTipoTags.every(tag => artworkTipoTags.includes(tag));
        const meioIncludesChosenMedium = artwork.meio.includes(chosenMedium);
        const meioIncludesMixedMedium = artwork.meio.includes(`Técnica Mista com ${chosenMedium}`);
        if (shouldShowTopico && shouldShowTipo && (meioIncludesChosenMedium || meioIncludesMixedMedium)) {
            const artworkHTML = generateArtworkHTML(artwork);
            gridContainer.insertAdjacentHTML('beforeend', artworkHTML);
        }
    });

}



// Call the function to filter artwork by medium initially
filterArtworkByMedium();

var elements = document.getElementsByClassName('meio');
for(var i = 0; i < elements.length; i++) {
    if(elements[i].innerText === 'Acrílico' || elements[i].innerText === 'Técnica Mista com Acrílico') {
        elements[i].classList.add('acrilico-background');
    }
}
var elements = document.getElementsByClassName('topicoclass');
for(var i = 0; i < elements.length; i++) {
    elements[i].innerHTML += '<br>';
}
var elements = document.getElementsByClassName('meio');
for(var i = 0; i < elements.length; i++) {
    if(elements[i].innerText === 'Grafite' || elements[i].innerText === 'Técnica Mista com Grafite') {
        elements[i].classList.add('grafite-background');
    }
}
});

