import React from "react";
import "./Termin.scss";

function TerminSection() {
  return (
    <section id="termin" className="termin-section">
      <div className="container">
        <h2>Preisliste & Terminvereinbarung</h2>
        <p>
          Wählen Sie das Angebot, das am besten zu Ihnen passt. Bei Interesse
          kontaktieren Sie mich gerne per E-Mail oder telefonisch, um einen
          Termin zu vereinbaren!
        </p>

        <div className="free-consult">
          <h3>Kostenloses, kurzes Erstgespräch</h3>
          <p className="price">0 €</p>
          <p className="description">
            Nutzen Sie die Möglichkeit, mich unverbindlich kennenzulernen und
            Ihre Fragen zu klären.
          </p>
          <a
            href="mailto:info.thebalancewithin@gmail.com"
            className="email-button"
          >
            E-Mail schreiben
          </a>
        </div>

        <div className="price-grid">
          <div className="price-card">
            <h3>1 Sitzung</h3>
            <p className="price">70 €</p>
            <p className="description">
              Ideal zum Kennenlernen oder für ein akutes Anliegen.
            </p>
            <a
              href="mailto:info.thebalancewithin@gmail.com"
              className="email-button"
            >
              E-Mail schreiben
            </a>
          </div>

          <div className="price-card">
            <h3>5 Sitzungen</h3>
            <p className="price">300 €</p>
            <p className="description">
              Begleitung zur intensiven Unterstützung (60 € pro Sitzung).
            </p>
            <a
              href="mailto:info.thebalancewithin@gmail.com"
              className="email-button"
            >
              E-Mail schreiben
            </a>
          </div>

          <div className="price-card">
            <h3>15 Sitzungen</h3>
            <p className="price">1200 €</p>
            <p className="description">
              Transformationsarbeit über 7 Monate mit Sitzungen von jeweils 1,5
              Stunden.
            </p>
            <a
              href="mailto:info.thebalancewithin@gmail.com"
              className="email-button"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>

        {/* Kontakt-Information */}
        <div className="contact-info">
          <p>
            Energetisches Arbeiten ist unabhängig von Raum und Zeit, daher sind
            die Sitzungen per Zoom oder Telefon genauso effektiv. Die Sitzungen
            biete ich aber auch persönlich in Freiburg im Brsg. an.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TerminSection;
