// Constants
const sharePrice = 150;
const maxShares = 350;

// Calculator Interactivity
const calcForm = document.getElementById('calc-form');
const buySharesInput = document.getElementById('buy-shares');
const calcResult = document.getElementById('calc-result');

calcForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let shares = parseInt(buySharesInput.value, 10);
  if(isNaN(shares) || shares < 1) shares = 1;
  if(shares > maxShares) shares = maxShares;
  buySharesInput.value = shares;
  let total = shares * sharePrice;
  calcResult.textContent = `Total Investment: R${total.toLocaleString()}`;
  calcResult.style.background = shares > 100 ? 'rgba(255, 152, 0, 0.2)' : 'rgba(255,255,255,0.08)';
  calcResult.style.color = shares > 100 ? 'var(--orange)' : 'var(--lime-green)';
  calcResult.style.textShadow = shares > 100 ? 'var(--glow-orange)' : 'var(--glow-green)';
});

// Button Interactivity
const investBtn = document.getElementById('invest-btn');
investBtn.addEventListener('click', function() {
  // Use query param to pass shares to payment page
  const numShares = parseInt(buySharesInput.value, 10) || 1;
  const totalInvest = numShares * sharePrice;
  const paymentUrl = `https://yourpaymentpage.example.com?shares=${numShares}&amount=${totalInvest}`;
  window.location.href = paymentUrl;
});

// Section Toggle Interactivity
function toggleSection(sectionId, toggleId, defaultOpen = false) {
  const section = document.getElementById(sectionId);
  const toggle = document.getElementById(toggleId);
  toggle.addEventListener('click', function() {
    section.classList.toggle('toggle-open');
    toggle.textContent = section.classList.contains('toggle-open') ? '\u25BC' : '\u25B6';
  });
  if(defaultOpen) section.classList.add('toggle-open');
}
toggleSection('offer-section', 'toggle-offer', true);
toggleSection('investment-info-section', 'toggle-investment', true);
toggleSection('ownership-info-section', 'toggle-ownership', true);

// Dynamic Glow on Offer Title (Hover effect using JS)
const offerTitle = document.getElementById('offer-title');
offerTitle.addEventListener('mouseover', () => {
  offerTitle.style.color = "var(--orange)";
  offerTitle.style.textShadow = "var(--glow-orange)";
});
offerTitle.addEventListener('mouseout', () => {
  offerTitle.style.color = "var(--lime-green)";
  offerTitle.style.textShadow = "var(--glow-green)";
});

// Animate Header On Scroll
let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 30 && window.scrollY > lastScroll) {
    header.style.background = "var(--dark-grey)";
    header.style.boxShadow = "0 2px 10px var(--navy-blue)";
  } else {
    header.style.background = "var(--navy-blue)";
    header.style.boxShadow = "var(--shadow)";
  }
  lastScroll = window.scrollY;
});

// Interactive Highlight on Offer Details (Click)
document.getElementById('shares-available').addEventListener('click', () => {
  alert("350 shares are available for investment.");
});
document.getElementById('price-per-share').addEventListener('click', () => {
  alert("Each share costs R150.");
});
document.getElementById('total-raise').addEventListener('click', () => {
  alert("We're raising R5,000,000 in total.");
});
