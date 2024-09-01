
const artworks = [
    {
        id: 1,
        title: "Artwork 1",
        artist: "Rabindranath Tagore",
        description: "A beautiful piece by Rabindranath.",
        image: "images/artwork1.jpg",
        room: "Cultural Art Room"
    },
    {
        id: 2,
        title: "Artwork 2",
        artist: "Raja Ravi Varma",
        description: "A stunning artwork by Raja Ravi Varma.",
        image: "images/artwork2.jpg",
        room: "Cultural Art Room"
    },
    {
        id: 3,
        title: "Artwork 3",
        artist: "Unknown Artist",
        description: "An intriguing modern piece.",
        image: "images/artwork3.webp",
        room: "Modern Art Room"
    },
    {
        id: 4,
        title: "Artwork 4",
        artist: "Unknown Artist",
        description: "A captivating modern artwork.",
        image: "images/artwork4.jpg",
        room: "Modern Art Room"
    },
    {
        id: 5,
        title: "Artwork 5",
        artist: "Unknown Artist",
        description: "A vibrant piece of modern art.",
        image: "images/artwork5.png",
        room: "Modern Art Room"
    },
    {
        id: 6,
        title: "Artwork 6",
        artist: "Unknown Artist",
        description: "A striking modern artwork.",
        image: "images/artwork6.jpeg",
        room: "Modern Art Room"
    },
    {
        id: 7,
        title: "Artwork 7",
        artist: "Tyeb Mehta",
        description: "A remarkable piece by Tyeb Mehta.",
        image: "images/artwork7.jpg",
        room: "Cultural Art Room"
    },
    {
        id: 8,
        title: "Artwork 8",
        artist: "Sita Devi",
        description: "An exquisite artwork by Sita Devi.",
        image: "images/artwork8.webp",
        room: "Cultural Art Room"
    }
];

// Function to get artwork details by ID
function getArtworkDetails(id) {
    return artworks.find(artwork => artwork.id === id);
}

// Example usage
const artworkId = new URLSearchParams(window.location.search).get('art');
const artworkDetails = getArtworkDetails(parseInt(artworkId, 10));

if (artworkDetails) {
    document.querySelector('h1').textContent = artworkDetails.title;
    document.querySelector('h2').textContent = artworkDetails.artist;
    document.querySelector('img').src = artworkDetails.image;
    document.querySelector('p').textContent = artworkDetails.description;
}
