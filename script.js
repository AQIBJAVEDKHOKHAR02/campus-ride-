// Mobile menu toggle
const menuBtn = document.getElementById('menu-button');
const menu = document.getElementById('mobile-menu');
function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('hidden', !open);
}
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setMenu(false); menuBtn.focus(); } });

// "Reserve a ride" on a station card preselects that station in the form
const stationSelect = document.getElementById('station');
document.querySelectorAll('[data-station]').forEach((link) => {
  link.addEventListener('click', () => { stationSelect.value = link.dataset.station; });
});

// Form submit (front-end only demo)
const form = document.getElementById('reserve-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const name = form.elements.name.value.trim().split(' ')[0];
  status.textContent = `Thanks ${name}! Your request for ${form.elements.station.value} is received. We will email you within one working day.`;
  status.classList.remove('hidden');
  form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
