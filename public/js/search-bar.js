const services = [
    { name: "Machining", url: "/machining", img: "/accuimages/machining2.png" },
    { name: "Laser Cutting", url: "/laser cutting", img: "/accuimages/laser1.png" },
    { name: "Fabrication", url: "/fabrication", img: "/accuimages/fabrication2.png" },
    { name: "3D Printing", url: "/3d-printing", img: "/accuimages/home 3d printing.jpg" },
    { name: "Casting", url: "/casting", img: "/accuimages/casting2.png" },
    { name: "Gear", url: "/gear", img: "/accuimages/gear1.png" },
    { name: "Bending", url: "/bending", img: "/accuimages/bending2.png" },
    { name: "Wire Cutting", url: "/cutting", img: "/accuimages/wire cutting.png" },
    { name: "Home", url: "/", img: "../images/home.jpg" },
    { name: "Services", url: "/our-services", img: "/accuimages/head service.png" }
];

function showSuggestions() {
    let input = document.getElementById("search").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";

    if (input === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    let filteredServices = services.filter(service => service.name.toLowerCase().includes(input));

    if (filteredServices.length > 0) {
        suggestionsBox.style.display = "block";
        filteredServices.forEach(service => {
            let div = document.createElement("div");
            div.classList.add("suggestion");
            div.innerHTML = `<img src="${service.img}" alt="${service.name}"><span>${service.name}</span>`;
            div.onclick = () => {
                window.location.href = service.url;
            };
            suggestionsBox.appendChild(div);
        });
    } else {
        suggestionsBox.style.display = "none";
    }
}

function keepSearchOpen() {
    document.getElementById("search").style.width = "200px";
}

function toggleMenu() {
    document.getElementById('navlist').classList.toggle('show');
}
