const searchInput = document.getElementById('searchInput');
const searchStatus = document.getElementById('searchStatus');
const cards = [...document.querySelectorAll('.qa')];

searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLocaleLowerCase('hi');
  let shown = 0;
  cards.forEach(card => {
    const match = !term || card.innerText.toLocaleLowerCase('hi').includes(term);
    card.hidden = !match;
    if (match) shown++;
  });
  searchStatus.textContent = term ? `${shown} प्रश्न मिले` : '';
});

document.getElementById('expandBtn').addEventListener('click', () => {
  cards.forEach(card => card.hidden = false);
  searchInput.value = '';
  searchStatus.textContent = 'सभी प्रश्न दिखाए जा रहे हैं।';
});
document.getElementById('collapseBtn').addEventListener('click', () => {
  // उत्तर कार्डों को बंद करने के बजाय compact reading mode में प्रश्न शीर्षक ही दिखाएँ।
  document.body.classList.toggle('compact-mode');
  const active = document.body.classList.contains('compact-mode');
  document.querySelectorAll('.qa p,.qa ol,.qa .formula').forEach(el => el.style.display = active ? 'none' : '');
  document.getElementById('collapseBtn').textContent = active ? 'उत्तर खोलें' : 'सभी बंद करें';
});
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
