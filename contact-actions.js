const contactNumbers = [
    { number: "+91 96731 40658", phone: "919673140658" },
    { number: "+91 98837 25651", phone: "919883725651" }
];

const contactActions = document.createElement("div");
contactActions.className = "sticky-contact-actions";
contactActions.setAttribute("aria-label", "Call or WhatsApp Pandit Ji");

contactActions.innerHTML = contactNumbers.map(({ number, phone }) => `
    <div class="sticky-contact-group">
        <a class="sticky-whatsapp"
           href="https://wa.me/${phone}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="WhatsApp ${number}"
           title="WhatsApp ${number}">
            <svg class="sticky-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.62 0 .32 5.3.32 11.81c0 2.08.54 4.12 1.57 5.92L.22 24l6.43-1.69a11.8 11.8 0 0 0 5.48 1.36h.01c6.51 0 11.81-5.3 11.81-11.81 0-3.16-1.23-6.13-3.43-8.38ZM12.14 21.67a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.82 1 1.02-3.72-.24-.38a9.82 9.82 0 1 1 8.41 4.68Zm5.39-7.36c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.23-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.19 4.58.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"/>
</svg>
        </a>
        <a class="sticky-call"
           href="tel:+${phone}"
           aria-label="Call ${number}"
           title="Call ${number}">
          <svg class="sticky-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.56 3.57.11.36.02.76-.25 1.02l-2.19 2.2Z"/>
</svg>
        </a>
    </div>
`).join("");

document.body.appendChild(contactActions);
