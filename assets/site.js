const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

const form = document.querySelector("[data-contact-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent("Website enquiry - Noor Aesthetic Clinic");
    const lines = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Treatment interest: ${data.get("interest") || ""}`,
      "",
      String(data.get("message") || "")
    ];
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:info@nooraestheticclinic.co.uk?subject=${subject}&body=${body}`;
  });
}
