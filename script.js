const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
/* 개인정보처리방침 팝업 */

const privacyPolicyModal = document.getElementById("privacyPolicyModal");
const openPrivacyPolicyButton = document.getElementById(
  "openPrivacyPolicy"
);
const privacyCloseButtons = document.querySelectorAll(
  "[data-policy-close]"
);

function openPrivacyPolicy() {
  if (!privacyPolicyModal) return;

  privacyPolicyModal.classList.add("open");
  privacyPolicyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("policy-modal-open");

  const closeButton = privacyPolicyModal.querySelector(
    ".policy-modal-close"
  );

  if (closeButton) {
    closeButton.focus();
  }
}

function closePrivacyPolicy() {
  if (!privacyPolicyModal) return;

  privacyPolicyModal.classList.remove("open");
  privacyPolicyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("policy-modal-open");

  if (openPrivacyPolicyButton) {
    openPrivacyPolicyButton.focus();
  }
}

if (openPrivacyPolicyButton) {
  openPrivacyPolicyButton.addEventListener(
    "click",
    openPrivacyPolicy
  );
}

privacyCloseButtons.forEach((button) => {
  button.addEventListener("click", closePrivacyPolicy);
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    privacyPolicyModal &&
    privacyPolicyModal.classList.contains("open")
  ) {
    closePrivacyPolicy();
  }
});
