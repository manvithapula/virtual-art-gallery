document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const artId = urlParams.get('art');
    // artwork details
    const artworks = {
       '1': {
            title: 'Mother India',
            artist: 'Rabindranath Tagore',
            description: 'A patriotic painting symbolizing the spirit and essence of India. The artwork reflects the deep national pride and cultural heritage of India during the early 20th century.',
            image: 'images/artwork1.jpg'
        },
        '2': {
            title: 'Woman Holding a Fruit',
            artist: 'Raja Ravi Varma',
            description: 'An exquisite painting depicting a woman holding a fruit. This artwork showcases the grace and beauty of traditional Indian womanhood with a touch of realism.',
            image: 'images/artwork2.jpg'
        },
        '3': {
            title: 'A Wheatfield with Cypresses',
            artist: 'Vincent van Gogh',
            description: 'A vibrant landscape painting featuring a lush wheatfield and cypress trees under a dynamic sky. The artwork is known for its bold brushstrokes and rich colors, representing Van Gogh’s unique style.',
            image: 'images/artwork3.webp'
        },
        '4': {
            title: 'Jacqueline with Flowers',
            artist: 'Pablo Picasso',
            description: 'A charming portrait of Picasso’s muse Jacqueline Roque, adorned with flowers. This piece is an example of Picasso’s later works, combining his distinctive Cubist style with a tender portrayal of his wife.',
            image: 'images/artwork4.jpg'
        },
        '5': {
            title: 'Balloon Venus',
            artist: 'Jeff Koons',
            description: 'A contemporary sculpture Balloon Venus is a playful and modern interpretation of classical forms. The shiny, balloon-like appearance of the piece contrasts with its classical inspiration, reflecting Koons’ approach to art.',
            image: 'images/artwork5.png'
        },
        '6': {
            title: 'Girl with a Pearl Earring',
            artist: 'Johannes Vermeer',
            description: 'An iconic painting often referred to as the "Mona Lisa of the North." The artwork features a young girl wearing an exotic pearl earring and a turban, rendered in Vermeer’s signature use of light and shadow.',
            image: 'images/artwork6.jpeg'
        },
        '7': {
            title: 'Mehendi',
            artist: 'M F Hussain',
            description: 'A vibrant and expressive painting capturing the essence of traditional Indian Mehendi (henna) designs. The artwork combines bold colors and dynamic forms to celebrate Indian culture and art.',
            image: 'images/artwork7.jpg'
        },
        '8': {
            title: 'Madhubani Painting',
            artist: 'Sita Devi',
            description: 'A beautiful Madhubani painting showcasing intricate patterns and vibrant colors typical of the Madhubani art form. The painting depicts traditional themes and motifs from Indian folklore and mythology.',
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