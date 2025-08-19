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
            <p className="price">85 € ( pro Sitzung )</p>
            <p className="description">
              60 Min. Gyrotonic / Emotionscode/Bodycode.
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
            <p className="price">75 € ( pro Sitzung )</p>
            <p className="description">
              60 Min. Gyrotonic Selbstzahler/ Emotionscode/ Bodycode.
            </p>
            <a
              href="mailto:info.thebalancewithin@gmail.com"
              className="email-button"
            >
              E-Mail schreiben
            </a>
          </div>

          <div className="price-card">
            <h3>Pro Sitzungen</h3>
            <p className="price">85 € ( pro Sitzung )</p>
            <p className="description">
              Physiotherapie (KGG ) mit der Gyrotonic Methode 60 Min
              Einzeltherapie 85 Euro.
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
