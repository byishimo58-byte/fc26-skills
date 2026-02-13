const grid = document.getElementById("playersGrid");
const search = document.getElementById("search");
const filterPosition = document.getElementById("filterPosition");
const filterLeague = document.getElementById("filterLeague");
const filterType = document.getElementById("filterType");

function render(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Rating: ${p.rating} | Position: ${p.position}</p>
        <p>League: ${p.league} | Type: ${p.type}</p>
        <p>Pace: ${p.pace} | Shooting: ${p.shooting} | Passing: ${p.passing} | Dribbling: ${p.dribbling}</p>
      </div>
    `;
  });
}

render(players);

function filterPlayers() {
  const value = search.value.toLowerCase();
  const pos = filterPosition.value;
  const league = filterLeague.value;
  const type = filterType.value;

  const filtered = players.filter(p => 
    p.name.toLowerCase().includes(value) &&
    (pos === "" || p.position === pos) &&
    (league === "" || p.league === league) &&
    (type === "" || p.type === type)
  );

  render(filtered);
}

search.addEventListener("input", filterPlayers);
filterPosition.addEventListener("change", filterPlayers);
filterLeague.addEventListener("change", filterPlayers);
filterType.addEventListener("change", filterPlayers);
