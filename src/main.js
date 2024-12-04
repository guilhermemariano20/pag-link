
// Links
const links = [
    { label: "Instagram", url: "https://www.instagram.com/oguilherme.e/", icon: "fab fa-instagram" },
    { label: "GitHub", url: "https://github.com/guilhermemariano20", icon: "fab fa-github"},
    { label: "LinkedIn", url: "https://www.linkedin.com/in/guilherme-mariano20/", icon: "fab fa-linkedin" },
  ];
  
  const linksContainer = document.querySelector(".card__links");
  links.forEach(link => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${link.url}" target="_blank" class="card__link"><i class="${link.icon}"></i>${link.label}</a>`;
    linksContainer.appendChild(listItem);
  });
  
  // Links sociais
  const socialLinks = [
    { label: "Portifolio", url: "https://guilhermemariano20.github.io/portifolio/", icon: "fas fa-window-restore" },
    { label: "Whatsapp", url: "https://wa.me/5531985844472?text=Olá,", icon: "fab fa-whatsapp" },
  ];
  
  const socialLinksContainer = document.querySelector(".card__social-links");
  socialLinks.forEach(link => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${link.url}" target="_blank" class="social-link"><i class="${link.icon}"></i> ${link.label}</a>`;
    socialLinksContainer.appendChild(listItem);
  });