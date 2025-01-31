document.getElementById("steam-login").addEventListener("click", () => {
    window.location.href = "/auth/steam"; // Přesměrování na backend
});

const items = [
    { name: "AK-47 Blackout", price: 30 },
    { name: "MP5 Neon", price: 15 },
    { name: "Hoodie Camo", price: 8 }
];

function displayItems() {
    const container = document.getElementById("items-list");
    container.innerHTML = "";
    
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<p>${item.name}</p><p>$${item.price}</p>`;
        container.appendChild(div);
    });
}

function filterItems() {
    const search = document.getElementById("search").value.toLowerCase();
    const sort = document.getElementById("sort").value;

    let filteredItems = items.filter(item => item.name.toLowerCase().includes(search));

    if (sort === "low-high") {
        filteredItems.sort((a, b) => a.price - b.price);
    } else {
        filteredItems.sort((a, b) => b.price - a.price);
    }

    const container = document.getElementById("items-list");
    container.innerHTML = "";

    filteredItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<p>${item.name}</p><p>$${item.price}</p>`;
        container.appendChild(div);
    });
}

displayItems();
