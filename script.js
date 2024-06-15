document.addEventListener("DOMContentLoaded", function() {
    const movieList = document.getElementById('movieList');
    const webSeriesList = document.getElementById('webSeriesList');
    const shortFilmsList = document.getElementById('shortFilmsList');
    const searchInput = document.getElementById('searchInput');

    // Dummy data for movies, web series, and short films
    const movies = [
    { title: "HI NANNA", rating: 4.8, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/hi-nanna-nani-mrunal-thakur-07124560-3x4.jpeg?VersionId=MgWhYOUYrHBAUrU8Hfj99rioow_gjeUV" },
    { title: "TILLU SQUARE", rating: 4.7, image: "https://m.media-amazon.com/images/M/MV5BMjgzNzU5MmQtOWI3Yi00OWU2LWI0MmItNThjOTdlYzU0ZmNlXkEyXkFqcGdeQXVyMTIyMjMzODUx._V1_.jpg" },
    { title: "PREMALU", rating: 4.5, image: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2024/03/Premalu-Movie.jpg" },
    { title: "OM BHEEM BUSH", rating: 4.3, image: "https://www.naasongs.co/wp-content/uploads/2024/03/Om-Bheem-Bush-2024.jpg" },
    { title: "GAAMI", rating: 3.9, image: "https://images.filmibeat.com/img/popcorn/movie_posters/gaami-20240213110152-22588.jpg" },
    { title: "HANUMAN", rating: 4.9, image: "https://i.pinimg.com/originals/75/2d/29/752d29e9d9cb839a8fc8fb5acd064bad.jpg" },
    { title: "FAMILY STAR", rating: 4.4, image: "https://m.media-amazon.com/images/M/MV5BYjU0N2FmNTItZmEyMC00NTNhLWFmYjAtMjc4YTc2M2E3YjIxXkEyXkFqcGdeQXVyMTMzNzMzOTY5._V1_.jpg" },
    { title: "SITA RAMAM", rating: 4.9, image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329656-30-05-2022-06-32-41.jpg" },
    { title: "OORU PERU BHAIRAVA KONA", rating: 4.7, image: "https://assets.eenadu.net/article_img/1502OoruPeruBhairavaKona3.jpg" },
    { title: "EAGLE", rating: 4.7, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNjqVabTMC8b0ahZQVRitGXKsG6bFr9uj2MnNtheXZKO8yRbOxgOaE9hVKW99zR_Df50pO4J60B-syYCo643VF9qQFbkHJpjV8_GhuKg" },    
{ title: "The Exorcist", rating: 4.1, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqvU5RQ_ppeJUTwvuoRJZ3I4iBAEFW6vc7BlcQf7mc0qvh3Kue"},
{ title: "Avengers: The Endgame", rating: 4.7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" },
{ title: "Joker", rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTcvL4wc0fbBjm1h5CRiFEZ2TnNKtu8KtoPSxTsj6mkedHeWl"},
{ title: "EvilDead: The Rise", rating: 3.9, image: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg" },
{ title: "Pirates Of The Caribbean", rating: 4.9, image: "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" },
{ title: "Darlings", rating: 4.1,image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI5juUBWoWkUB2AjX2dAbW4Eu4hAz3YQbpXcv-CLLP5nx2ivyB" },
{ title: "BUl BUl", rating: 4.4,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJK3DZwB1uuo1xCShebdMp0LBEIdI6lwmTaZyfa6CAB0G6yhUl"},
{ title: "Ae Dil Hai Mushkil", rating:3.9,image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0oOG1QBwIczzDEZjZ6OmFIvthTiGGWI6PajZ_3s-SsBjavWVc" },
{ title: "Haseen Dillruba", rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmQui2wNDdqXWg512VDiy9pPcN0KZOWuVFcjHYsft8Hm-KeYu" }, 
    { title: "JAWAN", rating: 4.2, image: "https://assets.eenadu.net/article_img/0609Jawan001.jpg" },
    { title: "PATHAN", rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgRIjRCuHmnaI1f1Tk_GggJRKgUOeYMPt_WPUbbaMDw&s" },
    { title: "DD RETURNS", rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwojkSViAuYbpqRqfuGsfer7gTA_zmV8NDLB1xEsELt0aw3novlwpoqYqvZS_VDypysd0&usqp=CAU" },
    { title: "BABY", rating: 4.6, image: "https://m.media-amazon.com/images/M/MV5BNThmOTIzOGMtOGRlYi00OWZkLWI3Y2EtY2FhZmY5MThmNjBmXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg" },   
    { title: "ADIPURUSH", rating: 3.2, image: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/06/Adipurush-Movie-Review-Rating-1.jpg" },
    ];
    const webSeries = [
        { title: "Wednesday", rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFoZJCfoZv5X0ZBsLqlL-XihXrw6-3nJwunuKYAhLcfBWLbuUF5dCaFsAr8ChMjriVuI&usqp=CAU" },
    { title: "Never Have I Ever", rating: 4.7, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6gi7BpLC-jLL7Fn8RziwsDk955Vqy0g6VpqySbAUHGBn-yQUu" },
    { title: "XO Kitty", rating: 2.7, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSn9sbkj8C5A645jUEITjhPogCKCncImmKHAYy-1ecm2kxuy3o6" },
    { title: "Stranger Things", rating: 4.8, image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg" },
    { title: "Friends", rating: 4.8, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMpWgFcYiV0MThcMMAVihr_5Zx2twoZ2Q_kVZOsVZ9nH1hmJZj" },
    { title: "Money Heist", rating: 4.8, image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcEazg1RHMebusfpj_3nR8f-d_CgNLxAc0Wm9foVDza9M4hKcf" },
    { title: "ASVINS", rating: 3.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquYeg5j-jeZtg78jsRkU3ts_p5ZYXfg9V7GUsp-cg4eoVSKFAHT5dMfyg1-63_z8RvC0&usqp=CAU" },
    { title: "90'S", rating: 4.3, image: "https://assets.eenadu.net/article_img/webseries1.jpg" }
    ];
    const shortFilms = [
        { title: "The Elephant Whisperers", rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTreZcI_-iNozhjF98s-Dx1_ew26QRLoq5Uw8Np_S_EZO3i3B8" },
    { title: "Lights Out", rating: 4.3, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiwx76YlaSdvjRpk1wh5F3JkF2TduL7-ipNNadESnOCqKX83pr" },
    
    { title: "Night Swim", rating: 3.2, image: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/night-swim/images/regions/us/updates/onesheet.jpg" },
    { title: "Bao", rating: 4.5, image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9_RZNMx9HFl8g1oWjFODfDZaiT4ZyWi6QN-52lvIYjQAuqakc" },
    { title: "Software Developer", rating: 4.2, image: "https://i.ytimg.com/vi/uqngr_mp3r0/mqdefault.jpg" },
    { title: "A Date With Boss", rating: 4.4, image: "https://i.ytimg.com/vi/uz2jUmU1b7c/maxresdefault.jpg" },
    { title: "Pellivaramandi", rating: 4.0, image: "https://i.ytimg.com/vi/ygpRejGJWJk/maxresdefault.jpg" } 
    ];

    // Function to display items based on search term
    function displayItems(items, list) {
        list.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm));
        
        if (filteredItems.length === 0) {
            list.innerHTML = '<p>Not found</p>';
        } else {
            filteredItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h2>${item.title}</h2>
                    <p class="rating" style="font-size: 14px; margin-top: -10px;">Rating: ${item.rating}</p>
                    <button onclick="rateItem('${item.title}')">Rate</button>
                `;
                list.appendChild(itemElement);
            });
        }
    }


    // Function to handle search input for all categories
    function searchAll() {
        displayItems(movies, movieList);
        displayItems(webSeries, webSeriesList);
        displayItems(shortFilms, shortFilmsList);
    }

    // Attach event listener to search input
    searchInput.addEventListener('input', searchAll);

    // Function to simulate rating an item
    window.rateItem = function(title) {
        const newRating = parseFloat(prompt(`Rate "${title}" (0-5):`));
        if (isNaN(newRating) || newRating < 0 || newRating > 5) {
            alert("Please enter a valid rating between 0 and 5.");
            return;
        }

        const allItems = [...movies,...webSeries,...shortFilms];
        const item = allItems.find(item => item.title === title);
        item.rating = newRating;

        // Redisplay all items to reflect the updated rating
        searchAll();
    };

    // Initial display of all items
    searchAll();
});


