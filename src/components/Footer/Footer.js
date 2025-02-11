import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // ✅ Добавлен импорт emailjs
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Отправка данных:", {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
        "service_w1ca8ol", // ✅ Service ID
        "template_kidrz5m", // ✅ Template ID
        form.current,
        "tAIKOpXEzROE5Jsrv" // ✅  Public Key (User ID)
      )
      .then(
        (result) => {
          setResponseMessage("Die Nachricht wurde erfolgreich gesendet!");
          e.target.reset();
        },
        (error) => {
          setResponseMessage("Fehler beim Senden einer Nachricht.");
        }
      );
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-column">
        <h3>Kontakte</h3>
        <ul>
          <li>
            <FaWhatsapp style={{ marginRight: "10px", color: "#25D366" }} />
            <a
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              +49 017 669 467 377
            </a>
          </li>
          <li>
            <FaPhone style={{ marginRight: "10px", color: "#0078d4" }} />
            <a href="tel:+49876543210"> +49 017 669 467 377</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>E-Mail</h3>
        <p>info.thebalancewithin@gmail.com</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Ihr Name" required />
          <input
            type="email"
            name="from_email"
            placeholder="Ihre E-Mail"
            required
          />
          <textarea
            name="message"
            placeholder="Ihre Nachricht"
            required
          ></textarea>
          <button type="submit">Senden</button>
          {responseMessage && <p>{responseMessage}</p>}
        </form>
      </div>
      <div className="footer-column">
        <h3>Termine nach Vereinbarung</h3>
      </div>
    </footer>
  );
}

export default Footer;
