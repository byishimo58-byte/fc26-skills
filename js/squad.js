const squadGrid = document.getElementById("squadGrid");

for (let i = 1; i <= 11; i++) {
    squadGrid.innerHTML += `<div class="card">Slot ${i}<br>Select player from Players page</div>`;
}
