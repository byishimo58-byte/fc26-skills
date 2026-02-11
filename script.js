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

