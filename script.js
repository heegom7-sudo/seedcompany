document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     모바일 메뉴
  ========================= */

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     스크롤 등장 애니메이션
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("show");
    });
  }

  /* =========================
     개인정보처리방침 팝업
  ========================= */

  const privacyPolicyModal =
    document.getElementById("privacyPolicyModal");

  const openPrivacyPolicyButton =
    document.getElementById("openPrivacyPolicy");

  const privacyCloseButtons =
    document.querySelectorAll("[data-policy-close]");

  function openPrivacyPolicy() {
    if (!privacyPolicyModal) return;

    privacyPolicyModal.classList.add("open");
    privacyPolicyModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("policy-modal-open");
  }

  function closePrivacyPolicy() {
    if (!privacyPolicyModal) return;

    privacyPolicyModal.classList.remove("open");
    privacyPolicyModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("policy-modal-open");
  }

  if (openPrivacyPolicyButton) {
    openPrivacyPolicyButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        openPrivacyPolicy();
      }
    );
  }

  privacyCloseButtons.forEach(function (button) {
    button.addEventListener("click", closePrivacyPolicy);
  });

  /* =========================
     이메일무단수집거부 팝업
  ========================= */

  const emailPolicyModal =
    document.getElementById("emailPolicyModal");

  const openEmailPolicyButton =
    document.getElementById("openEmailPolicy");

  const emailCloseButtons =
    document.querySelectorAll("[data-email-close]");

  function openEmailPolicy() {
    if (!emailPolicyModal) return;

    emailPolicyModal.classList.add("open");
    emailPolicyModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("policy-modal-open");
  }

  function closeEmailPolicy() {
    if (!emailPolicyModal) return;

    emailPolicyModal.classList.remove("open");
    emailPolicyModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("policy-modal-open");
  }

  if (openEmailPolicyButton) {
    openEmailPolicyButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        openEmailPolicy();
      }
    );
  }

  emailCloseButtons.forEach(function (button) {
    button.addEventListener("click", closeEmailPolicy);
  });

  /* =========================
     ESC 키로 팝업 닫기
  ========================= */

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    closePrivacyPolicy();
    closeEmailPolicy();
  });
});
