document.addEventListener('DOMContentLoaded', function() {

    function populateArtworkDetails(artworkData) {
        console.log('Entering populateArtworkDetails function');
        console.log('Non Parsed Artwork Data:', artworkData);
    
       
        const parsedArtworkData = JSON.parse(decodeURIComponent(artworkData));
    
        console.log('Parsed Artwork Data:', parsedArtworkData);
        
        if ('title' in parsedArtworkData && 'user' in parsedArtworkData && 'description' in parsedArtworkData && 'imagePath' in parsedArtworkData) {
            console.log('Required properties found in parsed artwork data');
        
           
            const titleElement = document.querySelector('.title');
        const userElement = document.querySelector('.user');
         const descriptionElement = document.querySelector('.description');
            const imageElement = document.querySelector('.artwork-image');
    
            if (titleElement && userElement && descriptionElement && imageElement) {
                console.log('HTML elements found');
                titleElement.textContent = `"${parsedArtworkData.title}"`;
                userElement.textContent = parsedArtworkData.user;
                descriptionElement.textContent = parsedArtworkData.description;
                imageElement.src = parsedArtworkData.imagePath;
                imageElement.alt = parsedArtworkData.title;
            } else {
                console.error('One or more elements not found');
            }
        } else {
            console.error('One or more required properties missing in the artwork data');
        }
    }
    const urlParams = new URLSearchParams(window.location.search);
      const artworkData = urlParams.get('artwork');
    

    if (artworkData) {

        populateArtworkDetails(artworkData);
    } else {
        console.error('Artwork data not found in URL query parameter');
    }
});
