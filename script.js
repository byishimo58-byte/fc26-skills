// FILTER SKILLS BY CATEGORY
function filterCategory(cat) {
  const cards = document.querySelectorAll('.card-skill');
  cards.forEach(c => {
    if (cat === 'all' || c.classList.contains(cat)) {
      c.style.display = 'block';
    } else {
      c.style.display = 'none';
    }
  });
}

// SEARCH SKILLS
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchBar');

  // Load JSON and generate skill cards
  fetch('skills.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('skillsContainer');
      data.forEach(skill => {
        const card = document.createElement('div');
        card.className = `card card-skill ${skill.category}`;
        card.innerHTML = `
          <strong>${skill.name}</strong><br>
          PS: <span class="controller-btn ps">${skill.ps}</span><br>
          Xbox: <span class="controller-btn xbox">${skill.xbox}</span><br>
          <iframe src="${skill.video}" allowfullscreen></iframe>
          <div class="tip">${skill.tip}</div>
        `;
        container.appendChild(card);
      });
    });

  // Search function
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card-skill');
    cards.forEach(c => {
      if (c.innerText.toLowerCase().includes(term)) {
        c.style.display = 'block';
      } else {
        c.style.display = 'none';
      }
    });
  });
});
