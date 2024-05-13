document.addEventListener('DOMContentLoaded', function() {

    const contentGrid = document.getElementById("content-grid");
    const showMoreBtn = document.getElementById("show-more-btn");


    // MOCK DATA
    const profiles = [
        {
            id: "user1",
            name: "Ana Artista",
            profileType: 1, // 1- ARTISTA/CURADOR ; 2- NÃO ARTISTA
            banner: "media/pexels-tiana-18128-2956376.png",
            description: "Ana | 25 | Especializo-me em Acrylic Pouring | As minhas obras são um reflexo dos meus pensamentos e emoções, em cores vivas. <br> Sem arte, não vivia!",
            website: "https://AnaArtista.pt",
            followers: 1500,
            profilePicture: "media/VV_profilepic_user2.png",
            content: [
                {
                    title: "Retro",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    imagePath: "media/pexels-steve-2989090.jpg",
                    likes: 50,
                    shares: 3
                },
                {
                    title: "A Praia",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-mustang-2179483.jpg",
                    likes: 50,
                    shares: 3,
                    saves: 5
                },
                {
                    title: "Sonhos de Verão",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-steve-1145720.jpg",
                    likes: 106,
                    shares: 5,
                    saves: 10
                },
                {
                    title: "Saudade",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-didsss-3844788.jpg",
                    likes: 85,
                    shares: 3,
                    saves: 2
                },
                {
                    title: "Eternidade",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-elina-araja-1743227-3311473.jpg",
                    likes: 73,
                    shares: 1,
                    saves: 25
                },
                {
                    title: "O Fim",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-steve-1572386.jpg",
                    likes: 60,
                    shares: 0,
                    saves: 20
                },
                {
                    title: "Anemona",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-alexant-7004739.jpg",
                    likes: 33,
                    shares: 1,
                    saves: 13
                },
                {
                    title: "Fantástica Fantasia",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-scottwebb-5209205.jpg",
                    likes: 329,
                    shares: 15,
                    saves: 63
                },
                {
                    title: "Osmose",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-didsss-14595966.jpg",
                    likes: 408,
                    shares: 20,
                    saves: 33
                },
                {
                    title: "O Conflicto",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-didsss-5868074.jpg",
                    likes: 50,
                    shares: 3,
                    saves: 14
                },
                {
                    title: "Planeta Marte",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-alexant-7031674.jpg",
                    likes: 74,
                    shares: 5,
                    saves: 6
                },
                {
                    title: "Banda Desenhada",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-didsss-3794359.jpg",
                    likes: 205,
                    shares: 21,
                    saves: 0
                },
                {
                    title: "Camaleão",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-alexant-4585185.jpg",
                    likes: 62,
                    shares: 11,
                    saves: 7
                },
                {
                    title: "Bailarina",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-alexant-7004697.jpg",
                    likes: 53,
                    shares: 5,
                    saves: 0
                },
                {
                    title: "Repuxos",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-dan-gold-782363-1660193.jpg",
                    likes: 40,
                    shares: 2,
                    saves: 2
                },
                {
                    title: "Células",
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagePath: "media/pexels-jibarofoto-2471235.jpg",
                    likes: 196,
                    shares: 9,
                    saves: 25
                },
                
            ]
        },
        {   
            id: "user2",
            name: "André Artista",
            profileType: 1,
            banner: "media/pexels-anniroenkae-2832382.png",
            description: "Sou o André, um artista experiente com uma dedicação vitalícia à minha arte. Com anos de prática e exploração, as minhas pinturas incorporam uma profunda compreensão de forma, cor e textura. Acompanha-me enquanto continuo a ultrapassar os limites da expressão artística!",
            website: "https://mundodopincel.pt",
            publications: 15,
            followers: 823,
            profilePicture: "media/VV_profilepic_user3.png",
            content: [
                {
                    title: "Photograph 1",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagePath: "path/to/photograph1.jpg"
                },
                {
                    title: "Photograph 2",
                    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imagePath: "path/to/photograph2.jpg"
                },
                
            ]
        },
        {   
            id: "user3",
            name: "Eunice Entusiasta",
            profileType: 2,
            banner: "media/pexels-nickcollins-1293125.png",
            description: "Live, Laugh, Love",
            website: "",
            publications: 0,
            followers: 200,
            profilePicture: "media/VV_profilepic_user4.png",
            content: [
                {
                    title: "Photograph 1",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagePath: "path/to/photograph1.jpg"
                },
                {
                    title: "Photograph 2",
                    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imagePath: "path/to/photograph2.jpg"
                },
               
            ]
        },
        {   
            id: "user4",
            name: "media/Carla Curadora",
            profileType: 1, // 1- ARTISTA/CURADOR ; 2- NÃO ARTISTA
            banner:"media/pexels-steve-1781710.png",
            description: "Sou a Carla, uma curadora dedicada a mostrar o melhor da arte. Com olho para o talento e paixão pela narração, organizo exposições que envolvem, provocam e inspiram.",
            website: "https://galeriamundi.pt",
            publications: 25,
            followers: 973,
            profilePicture: "media/VV_profilepic_user5.png",
            content: [
                {
                    title: "Photograph 1",
                    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagePath: "path/to/photograph1.jpg"
                },
                {
                    title: "Photograph 2",
                    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imagePath: "path/to/photograph2.jpg"
                },
                
            ]
        },
    ];


    function populateProfile(userId) {
        
        const profile = profiles.find(profile => profile.id === userId);
        
        
        if (profile) {

            // bqanner
            const banner = document.querySelector('.banner');
            banner.style.backgroundImage = `url(${profile.banner})`;

            // foto perfil
            const profilePicture = document.querySelector('.profile-picture img');
            if (profilePicture) {
                profilePicture.src = profile.profilePicture;
            } else {
                console.error('Profile picture element not found');
            }
            
            // nome perfil
            const profileName = document.querySelector('.profile-name');
            profileName.textContent = profile.name;
            
            //  description
            const description = document.querySelector('.description');
            description.innerHTML = profile.description; // Use innerHTML to render HTML tags
            
            //website
            const website = document.querySelector('.website');
            if (profile.website) {
                const websiteLink = document.createElement('a');
                websiteLink.href = profile.website;
            
                // SUBSTITUIR "https://" POR "www."
                const modifiedURL = profile.website.replace(/^https?:\/\//, 'www.');
            
                websiteLink.textContent = modifiedURL;
            
                
                const websiteLabel = document.createElement('span'); //criar span para website
                websiteLabel.textContent = 'Website: ';
                websiteLabel.classList.add('website-label');
            
                website.appendChild(websiteLabel); // Append do elemento span
                website.appendChild(websiteLink);
            } else {
                website.textContent = 'Website: N/A';
            }

            // Populate publications count    
            const publicationsCountElement = document.querySelector('.publicationsCount');
            if (publicationsCountElement) {
                // Calculate the publications count dynamically based on the length of the content array
                const publicationsCount = profile.content.length;
                publicationsCountElement.innerHTML = `<span class="number">${publicationsCount}</span> <span class="label">Publicações</span>`;
            } else {
                console.error('Publications count element not found');
            }

            // Populate followers count
            const followersCountElement = document.querySelector('.followersCount');
            if (followersCountElement) {
                followersCountElement.innerHTML = `<span class="number">${profile.followers}</span> <span class="label">Seguidores</span>`;
            } else {
                console.error('Followers count element not found');
            }
            


            // Grid dinâmica
            profile.content.forEach(item => {
                const contentItem = document.createElement("div");
                contentItem.classList.add("content-item");
                contentItem.classList.add("hidden"); 
            
                const image = document.createElement("img");
                image.src = item.imagePath;
                contentItem.appendChild(image);
            
                                      // agregar user name data (username) como atributo do content item 
                const artworkData = {
                    title: item.title,
                    user: profile.name, // Include user name here
                    description: item.description,
                    imagePath: item.imagePath
                };
            
                contentItem.dataset.artworkData = JSON.stringify(artworkData);
            
                
                contentGrid.appendChild(contentItem);
            });

            
            showContentItems(4, 3); //Inicialmente, mostar apenas 4 colunas e tres linhas
            showMoreBtn.addEventListener('click', function() { //if botao = click
                showContentItems(8, 6);                        // mostrar mais 4  colunas e 3 linhas
            });
        
            function showContentItems(columns, rows) {
                const contentItems = contentGrid.querySelectorAll('.content-item');
                let count = 0;
            
                // Iteração de todos os content items para decidir vvisbilidade
                contentItems.forEach(item => {
                    if (count < columns * rows) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                    count++;
                });
            }

        }
    }

    

        // HARDCODED DISPLAY
        populateProfile("user1"); 
        

        
        const contentItems = document.querySelectorAll('.content-item');

        contentItems.forEach((item, index) => {
            item.addEventListener('click', () => {
            
            const artworkData = JSON.parse(item.dataset.artworkData);
            const title = artworkData.title;
            const user = artworkData.user; // user name diretamente de artworkData
            const description = artworkData.description;
            const imagePath = artworkData.imagePath;
                
                    
                    openArtworkDetails({ title, user, description, imagePath });
                });
            });
        

        
// Abrir detakkhes com artwork data e user data especifico
function openArtworkDetails(artworkData, userData) {
    // Converte artworkData object to JSON string
    const artworkJson = JSON.stringify(artworkData);
    const userJson = JSON.stringify(userData);

 
    const newTab = window.open(`artworkdetails.html?artwork=${encodeURIComponent(artworkJson)}`, '_blank'); // Open a new tab with the artwork details page
    const newTab2 = window.open(`profilepage.html?user=${encodeURIComponent(userJson)}`, '_blank'); // new tab c/ profile page
}

//  passagem de artworkData and userData
openArtworkDetails(artworkData, userData);

        document.querySelector('.hamburger-menu').addEventListener('click', () => {
            document.querySelector('.navbar').classList.toggle('show');
            document.body.classList.toggle('menu-open');
          });
          document.querySelector('.close-menu').addEventListener('click', () => {
            document.querySelector('.navbar').classList.remove('show');
          });
});
      

