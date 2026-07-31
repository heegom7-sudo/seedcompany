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
     팝업 요소
  ========================= */

  const privacyModal =
    document.getElementById("privacyPolicyModal");

  const emailModal =
    document.getElementById("emailPolicyModal");

  const privacyOpenButton =
    document.getElementById("openPrivacyPolicy");

  const emailOpenButton =
    document.getElementById("openEmailPolicy");

  /* =========================
     공통 팝업 닫기
  ========================= */

  function closeAllModals() {
    if (privacyModal) {
      privacyModal.classList.remove("open");
      privacyModal.setAttribute("aria-hidden", "true");
    }

    if (emailModal) {
      emailModal.classList.remove("open");
      emailModal.setAttribute("aria-hidden", "true");
    }

    document.body.classList.remove("policy-modal-open");
  }

  /* =========================
     개인정보처리방침 열기
  ========================= */

  if (privacyOpenButton && privacyModal) {
    privacyOpenButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        closeAllModals();

        privacyModal.classList.add("open");
        privacyModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("policy-modal-open");
      }
    );
  }

  /* =========================
     이메일무단수집거부 열기
  ========================= */

  if (emailOpenButton && emailModal) {
    emailOpenButton.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        closeAllModals();

        emailModal.classList.add("open");
        emailModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("policy-modal-open");
      }
    );
  }

  /* =========================
     개인정보처리방침 닫기
  ========================= */

  document
    .querySelectorAll("[data-policy-close]")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        if (privacyModal) {
          privacyModal.classList.remove("open");
          privacyModal.setAttribute("aria-hidden", "true");
        }

        document.body.classList.remove("policy-modal-open");
      });
    });

  /* =========================
     이메일무단수집거부 닫기
  ========================= */

  document
    .querySelectorAll("[data-email-close]")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        if (emailModal) {
          emailModal.classList.remove("open");
          emailModal.setAttribute("aria-hidden", "true");
        }

        document.body.classList.remove("policy-modal-open");
      });
    });

  /* =========================
     ESC 키로 닫기
  ========================= */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});
