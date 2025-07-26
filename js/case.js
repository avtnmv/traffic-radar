  document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("caseModal");
  const closeBtn = document.querySelector(".case-modal__close");
  const overlay = document.querySelector(".case-modal__overlay");
  const items = document.querySelectorAll(".accordion-item");

  const previewTrigger = document.querySelector('.hero__preview-trigger');
  const fullscreen = document.getElementById('fullscreen-video');
  const caseVideo = document.getElementById('caseVideo');

  const isMobile = () => window.innerWidth <= 768;

  const openModal = () => {
    console.log("openModal called");
    modal?.classList.remove("hidden");
  };

  const closeModal = () => {
    console.log("closeModal called");
    modal?.classList.add("hidden");
  };

  closeBtn?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  const updateAccordionState = () => {
    items.forEach(item => {
      item.classList.toggle("active", !isMobile());
    });
  };

  updateAccordionState();
  window.addEventListener("resize", updateAccordionState);

  items.forEach((item) => {
    const toggle = item.querySelector(".accordion-toggle");
    toggle?.addEventListener("click", () => {
      if (isMobile()) {
        item.classList.toggle("active");
      }
    });
  });

  previewTrigger?.addEventListener("click", () => {
    console.log("Preview clicked");
    if (fullscreen && caseVideo) {
      fullscreen.classList.remove("hidden");
      caseVideo.currentTime = 0;
      caseVideo.play();
      console.log("Video started");
    }
  });

  fullscreen?.addEventListener("click", (e) => {
    if (e.target === fullscreen) {
      caseVideo.pause();
      caseVideo.currentTime = 0;
      fullscreen.classList.add("hidden");
      console.log("Fullscreen video closed by click outside");
    }
  });

  caseVideo?.addEventListener("ended", () => {
    console.log("Video ended");
    fullscreen?.classList.add("hidden");
    openModal();
    console.log("Modal opened after video");
  });
});
