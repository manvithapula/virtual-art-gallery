document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artId = urlParams.get('art');
    // artwork details
    const artworks = {
        '1': {
            title: 'Artwork 1',
            artist: 'Rabindranath Tagore',
            description: 'Description of Artwork 1.',
            image: 'images/artwork1.jpg'
        },
        '2': {
            title: 'Artwork 2',
            artist: 'Raja Ravi Varma',
            description: 'Description of Artwork 2.',
            image: 'images/artwork2.jpg'
        },
        '3': {
            title: 'Artwork 3',
            artist: 'Tyeb Mehta',
            description: 'Description of Artwork 3.',
            image: 'images/artwork3.webp'
        },
        '4': {
            title: 'Artwork 4',
            artist: 'Sita Devi',
            description: 'Description of Artwork 4.',
            image: 'images/artwork4.jpg'
        },
        '5': {
            title: 'Artwork 5',
            artist: 'Artist Name 5',
            description: 'Description of Artwork 5.',
            image: 'images/artwork5.png'
        },
        '6': {
            title: 'Artwork 6',
            artist: 'Artist Name 6',
            description: 'Description of Artwork 6.',
            image: 'images/artwork6.jpeg'
        },
        '7': {
            title: 'Artwork 7',
            artist: 'Artist Name 7',
            description: 'Description of Artwork 7.',
            image: 'images/artwork7.jpg'
        },
        '8': {
            title: 'Artwork 8',
            artist: 'Artist Name 8',
            description: 'Description of Artwork 8.',
            image: 'images/artwork8.webp'
        }
    };

    const artwork = artworks[artId];
    if (artwork) {
        document.querySelector('header h1').textContent = artwork.title;
        document.querySelector('.artwork-details img').src = artwork.image;
        document.querySelector('.artwork-details img').alt = artwork.title;
        document.querySelector('.artwork-details h2').textContent = artwork.artist;
        document.querySelector('.artwork-details p').textContent = artwork.description;
    } else {
        document.querySelector('.artwork-details').innerHTML = '<p>Artwork not found.</p>';
    }
});
