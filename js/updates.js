const updatesGrid = document.getElementById("updatesGrid");

const updates = [
{ title: "New SBC: Icon Challenge", date: "2026-02-14" },
{ title: "Weekly TOTW Released", date: "2026-02-13" },
{ title: "Hidden Skill Mechanics Guide Added", date: "2026-02-12" }
];

updates.forEach(u => {
    updatesGrid.innerHTML += `
    <div class="card">
        <h3>${u.title}</h3>
        <p>${u.date}</p>
    </div>
    `;
});
