(() => {
  "use strict";
  const products = [
    {number:"01",name:"Marble Fountains",short:"Garden & architectural focal pieces",image:"assets/product-5.jpg",description:"Statement marble fountains for gardens, courtyards, villas, hotels and landscape projects. Share your preferred height, design and destination to receive a quotation.",category:"Fountains"},
    {number:"02",name:"Marble Chess",short:"Collector-style statement sets",image:"assets/product-3.jpg",description:"Decorative marble chess sets for collectors, gifting, premium interiors and retail buyers. Ask us about available designs, dimensions and wholesale quantities.",category:"Chess"},
    {number:"03",name:"Marble Lions",short:"Entrance & garden sculptures",image:"assets/product-6.jpg",description:"Marble lion sculptures for entrances, gardens, hotels and architectural settings. Dimensions and pricing are shared on request.",category:"Sculptures"},
    {number:"04",name:"Marble Elephants",short:"Architectural & decorative pairs",image:"assets/product-1.jpg",description:"Decorative marble elephant sculptures for entrances, gardens and refined interiors. Contact us to discuss available designs and quantities.",category:"Sculptures"},
    {number:"05",name:"Marble Horse Sculpture",short:"Interior statement decor",image:"assets/product-7.jpg",description:"A distinctive marble horse sculpture for consoles, living spaces and statement interiors. Ask about dimensions, finish and availability.",category:"Sculptures"},
    {number:"06",name:"Decorative Elephant Sculptures",short:"Colour, character & handcrafted detail",image:"assets/product-10.jpg",description:"Decorative elephant sculptures for home styling, gifting and retail collections. Send us your requirements for a tailored quotation.",category:"Decor"}
  ];
  const modal = document.getElementById("productModal");
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".modal-close");
  const modalBackdrop = document.querySelector(".modal-backdrop");

  function openProduct(index) {
    const product = products[index];
    if (!product || !modal) return;
    const image = document.getElementById("modalImg");
    const number = document.getElementById("modalNumber");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");
    const whatsapp = document.getElementById("modalWhatsApp");
    if (image) { image.src = product.image; image.alt = product.name; image.onerror = () => { image.style.display = "none"; }; image.style.display = ""; }
    if (number) number.textContent = product.number + " / " + product.category.toUpperCase();
    if (title) title.textContent = product.name;
    if (text) text.textContent = product.description;
    if (whatsapp) whatsapp.href = "https://wa.me/919458450820?text=" + encodeURIComponent("Hello Rajasthan Art And Craft, I am interested in " + product.name + ". Please share available designs, dimensions and a quotation.");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (closeButton) closeButton.focus();
  }
  function closeProduct() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
  document.querySelectorAll(".product-card[data-product]").forEach(card => {
    const open = () => openProduct(Number(card.dataset.product));
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "View details for " + (products[Number(card.dataset.product)]?.name || "product"));
  });
  if (closeButton) closeButton.addEventListener("click", closeProduct);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProduct);
  if (modal) modal.addEventListener("click", event => { if (event.target === modal) closeProduct(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeProduct(); });

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.textContent = "☰";
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // A gentle entrance effect that also works for browsers without IntersectionObserver.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }
})();
