const p1Select = document.getElementById("player1");
const p2Select = document.getElementById("player2");
const compareResult = document.getElementById("compareResult");

players.forEach(p => {
    p1Select.innerHTML += `<option>${p.name}</option>`;
    p2Select.innerHTML += `<option>${p.name}</option>`;
});

function compare() {
    const p1 = players.find(p => p.name === p1Select.value);
    const p2 = players.find(p => p.name === p2Select.value);

    compareResult.innerHTML = `
    <div class="card">
        <h3>${p1.name}</h3>
        <p>Pace: ${p1.pace}</p>
        <p>Shooting: ${p1.shooting}</p>
        <p>Passing: ${p1.passing}</p>
        <p>Dribbling: ${p1.dribbling}</p>
    </div>
    <div class="card">
        <h3>${p2.name}</h3>
        <p>Pace: ${p2.pace}</p>
        <p>Shooting: ${p2.shooting}</p>
        <p>Passing: ${p2.passing}</p>
        <p>Dribbling: ${p2.dribbling}</p>
    </div>
    `;
}

p1Select.addEventListener("change", compare);
p2Select.addEventListener("change", compare);

compare();
