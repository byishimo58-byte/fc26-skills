const grid = document.getElementById("playersGrid");
const search = document.getElementById("search");
const filterPosition = document.getElementById("filterPosition");

function render(list) {
    grid.innerHTML = "";
    list.forEach(p => {
        grid.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>${p.rating} - ${p.position}</p>
            <p>${p.type}</p>
        </div>
        `;
    });
}

render(players);

search.addEventListener("input", filterPlayers);
filterPosition.addEventListener("change", filterPlayers);

function filterPlayers() {
    const value = search.value.toLowerCase();
    const pos = filterPosition.value;

    const filtered = players.filter(p =>
        p.name.toLowerCase().includes(value) &&
        (pos === "" || p.position === pos)
    );

    render(filtered);
}
