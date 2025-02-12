import React from "react";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <p className="about-me-description">
          Mein Name ist <strong>Isabell Beer</strong>, ich bin 49 Jahre alt und
          lebe in Freiburg im Breisgau, Deutschland. Zurückblickend waren es die
          vielen Herausforderungen in meinem Leben, die dazu geführt haben, mich
          mit Energieheilarbeit zu beschäftigen.
        </p>

        <p className="about-me-description">
          Meine ersten gesundheitlichen Probleme traten mit 18 Jahren auf. Ich
          litt an <strong>Neurodermitis</strong>. Die behandelnden Ärzte
          meinten, damit müsste ich leben. Mit Anfang 20 bekam ich eine{" "}
          <strong>chronische Dickdarmentzündung</strong>, bei der die
          Schulmedizin nur die Symptome lindern konnte. Diese persönlichen
          Erfahrungen mit Krankheiten brachten mich dazu, einen starken Willen
          zu entwickeln, zu lernen und verstehen zu wollen, was Gesundheit und
          Vitalität in unserem Leben ausmachen. Ich wollte die Ursachen von
          Krankheit auf einer tieferen Ebene verstehen.
        </p>

        <p className="about-me-description">
          So lernte ich auf meinem Weg viele erstaunliche, gesundheitsfördernde
          Methoden kennen, von denen ich heute noch folgende praktiziere:{" "}
          <strong>Gyrotonic® und Gyrokinesis®</strong>,{" "}
          <strong>Rebirthing Breathwork</strong>, sowie die{" "}
          <strong>Wim Hof Methode</strong>. Die Suche nach der Verbindung von
          Körper, Geist und Seele hat mich auch zur intensiven Meditation
          geführt. Dabei habe ich in den letzten 30 Jahren verschiedene
          Meditationspraktiken erlernt, darunter <strong>Vipassana</strong>,{" "}
          <strong>Transzendentale Meditation</strong> und die Arbeit von Dr. Joe
          Dispenza.
        </p>

        <p className="about-me-description">
          Die Meditation ist für mich ein wesentliches Werkzeug, um mein inneres
          Gleichgewicht zu erhalten, um die Verbindung zur göttlichen Kraft zu
          spüren und mich von dieser Kraft leiten zu lassen. Diese Kraft hat
          mich dazu gebracht, mit dem <strong>Emotions Code</strong> und dem{" "}
          <strong>Body Code</strong> zu arbeiten.
        </p>

        <p className="about-me-description">
          Mein Ziel ist es, Menschen zu helfen, ihre eigene{" "}
          <strong>innere Heilkraft</strong> zu aktivieren, um ihr
          körperliches-geistig-seelisches Gleichgewicht zu finden, damit sie in
          ihrem vollen Potential leben können.
        </p>

        {/* Ausbildung-Sektion */}
        <div className="ausbildung-block">
          <h3 className="about-me-subtitle">Ausbildungen</h3>
          <ul className="about-me-list">
            <li>staatlich geprüfte Sport und Gymnastiklehrerin</li>
            <li>staatlich geprüfte Physiotherapeutin</li>
            <li>zertifizierte Gyrotonic® Trainerin</li>
            <li>zertifizierte Emotionscode® Anwenderin</li>
            <li>zertifizierte Body Code® Anwenderin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
