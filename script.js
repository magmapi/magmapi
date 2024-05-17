var map = L.map('map').setView([38.736946, -9.142685], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    {
        name: "Local 1",
        coords: [38.736946, -9.142685],
        images: ["images/local1_1.jpg", "images/local1_2.jpg"]
    },
    {
        name: "Local 2",
        coords: [38.716946, -9.142685],
        images: ["images/local2_1.jpg", "images/local2_2.jpg"]
    }
];

locations.forEach(function(location) {
    var marker = L.marker(location.coords).addTo(map);
    marker.on('click', function() {
        showGallery(location.name, location.images);
    });
});

function showGallery(name, images) {
    document.getElementById('location-name').innerText = name;
    var container = document.getElementById('images-container');
    container.innerHTML = '';
    images.forEach(function(src) {
        var img = document.createElement('img');
        img.src = src;
        container.appendChild(img);
    });
    document.getElementById('gallery').style.display = 'flex';
}

function closeGallery() {
    document.getElementById('gallery').style.display = 'none';
}
