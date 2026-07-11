// smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// form
function enviarFormulario(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  const subject = encodeURIComponent("Solicitação de Projeto - EFDev");

const body = encodeURIComponent(`Olá, equipe EFDev!

Gostaria de solicitar um orçamento para o desenvolvimento de um projeto.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome:
${name}

📧 E-mail:
${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Descrição do Projeto

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Peço que analisem minha solicitação e, se possível, entrem em contato para conversarmos sobre os detalhes do projeto, prazos e orçamento.

Desde já, agradeço pela atenção.

Atenciosamente,

${name}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mensagem enviada através do formulário de contato do site da EFDev.
`);

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=efdev.oficial@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailUrl, '_blank');
}

// cursor follow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// scroll reveal
const reveals = document.querySelectorAll(".reveal");

function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress);

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
