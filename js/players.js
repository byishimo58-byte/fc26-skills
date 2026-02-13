const container = document.getElementById("playersGrid") || null;
if(container){
    const allPlayers = [].concat(players1); // Add players2, players3...
    
    function render(players){
        container.innerHTML = "";
        players.forEach(p=>{
            const div = document.createElement("div");
            div.classList.add("player-card");
            div.innerHTML = `
                <img src="${p.card}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.position} | Rating: ${p.rating}</p>`;
            container.appendChild(div);
        });
    }

    render(allPlayers);

    const searchInput = document.getElementById("search");
    if(searchInput){
        searchInput.addEventListener("input", e=>{
            const val = e.target.value.toLowerCase();
            render(allPlayers.filter(p=>p.name.toLowerCase().includes(val)));
        });
    }
}
