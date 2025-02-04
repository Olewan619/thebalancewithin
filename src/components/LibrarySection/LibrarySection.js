import React, { useState } from "react";
import "./LibrarySection.scss";

// Импорты изображений
import code1 from "../../img/code1.jpg";
import code2 from "../../img/code2.jpg";
import code3 from "../../img/code3.jpg";
import code4 from "../../img/code4.jpg";

function LibrarySection() {
  // Состояния для карточек (развернуто/свернуто)
  const [expandedFirst, setExpandedFirst] = useState(false);
  const [expandedSecond, setExpandedSecond] = useState(false);
  const [expandedThird, setExpandedThird] = useState(false);
  const [expandedFourth, setExpandedFourth] = useState(false);

  const shortTextFirst = `Der Emotions Code ist eine Form der Energiearbeit, 
  die von Dr. Bradley Nelson entwickelt wurde und 
  die es ermöglicht, sich von emotionalen Blockaden zu befreien...`;

  const fullTextFirst = (
    <>
      <p>
        Der <strong>Emotions Code®</strong> ist eine Form der{" "}
        <strong>Energiearbeit</strong>, die von{" "}
        <strong>Dr. Bradley Nelson</strong> entwickelt wurde und die es
        ermöglicht, sich von <strong>emotionalen Blockaden</strong> zu befreien.
      </p>
      <p>
        Laut Dr. Nelson hat jede <strong>Emotion</strong> ihre eigene
        individuelle <strong>Schwingung</strong>. Wenn eine Emotion nicht
        verarbeitet wird, bleibt ihre Schwingung im{" "}
        <strong>Energiekörper</strong> stecken und kann das{" "}
        <strong>Gleichgewicht</strong> des Menschen stören.
      </p>
      <p>
        Das Erkennen und <strong>Loslassen</strong> solcher blockierter
        Emotionen kann zu großen <strong>Veränderungen</strong> führen.
      </p>
    </>
  );

  const shortTextSecond = `„Hinter jedem Symptom - Stress, Krankheitsmuster: physisch oder psychisch, 
  stecken im Kern Emotionen und Erinnerungen, die in unserem Nervensystem gespeichert sind.“`;

  const fullTextSecond = (
    <>
      <p>
        „Hinter jedem <strong>Symptom</strong> – <strong>Stress</strong>,
        <strong> Krankheitsmuster</strong>: physisch oder psychisch, stecken im
        Kern <strong>Emotionen</strong> und <strong>Erinnerungen</strong>, die
        in unserem <strong>Nervensystem</strong> gespeichert sind.“ (
        <strong>Dr. Joe Dispenza</strong>).
      </p>
      <p>
        Der{" "}
        <strong>
          Body Code <sup>&trade;</sup>
        </strong>{" "}
        ist eine Art <strong>Wissensdatenbank</strong> über verschiedene{" "}
        <strong>Ungleichgewichte</strong>, die im Körper entstehen können. Diese
        Methode hilft, <strong>Blockaden</strong> zu identifizieren und
        aufzulösen.
      </p>
      <p>
        Sie kann <strong>Beziehungen verbessern</strong>,{" "}
        <strong>Ängste auflösen</strong> und helfen,{" "}
        <strong>erfolgreicher</strong> zu sein.
      </p>
    </>
  );

  const shortTextThird = `Wenn wir emotional stark verletzt werden, aber dieser Schmerz für uns zu
  intensiv ist, dann schützt unser Unterbewusstsein unser Herz, indem es
  eine Mauer aus eingeschlossenen Emotionen um das Herz herum bildet.`;

  const fullTextThird = (
    <>
      <p>
        Wenn wir <strong>emotional</strong> stark verletzt werden, aber dieser
        Schmerz für uns zu intensiv ist, dann schützt unser{" "}
        <strong>Unterbewusstsein</strong> unser <strong>Herz</strong>, indem es
        eine <strong>Mauer</strong> aus eingeschlossenen Emotionen um das Herz
        herum bildet.
      </p>
      <p>
        Laut <strong>Dr. Bradley Nelson</strong> haben{" "}
        <strong>93% der Erwachsenen eine Herzmauer</strong>. Das{" "}
        <strong>Lösen</strong> dieser Mauer kann positive{" "}
        <strong>Veränderungen</strong> in vielen Bereichen des Lebens bewirken.
      </p>
    </>
  );

  const shortTextFourth = `Für jene Menschen, die sich nach einer tiefgründigen Veränderung sehnen und bereit sind, selbst Arbeit in ihre Transformation zu investieren, biete ich eine 7-monatige Begleitung an.`;

  const fullTextFourth = (
    <>
      <p>
        Für jene Menschen, die sich nach einer{" "}
        <strong>tiefgründigen Veränderung</strong> sehnen und bereit sind,
        selbst <strong>Arbeit in ihre Transformation</strong> zu investieren,
        biete ich eine <strong>7-monatige Begleitung</strong> an.
      </p>
      <p>
        Wir lösen <strong>negative, eingeschlossene Emotionen</strong>,{" "}
        <strong>hindernde Glaubenssätze</strong> auf und decken blockierende{" "}
        <strong>Verhaltensmuster</strong> auf.
      </p>
      <p>
        Ich zeige <strong>Übungen</strong>, die täglich zu Hause integriert
        werden sollten. Alle 14 Tage gibt es eine{" "}
        <strong>1,5-stündige Sitzung</strong> (persönlich oder online).
      </p>
      <p>
        Denn nur durch eine <strong>neue Denkweise</strong> und veränderte{" "}
        <strong>Gewohnheiten</strong> kann etwas wahrhaftig{" "}
        <strong>Neues</strong> entstehen.
      </p>
    </>
  );

  return (
    <section id="angebot" className="library-section">
      <h2 className="section-title">Mein Angebot</h2>
      <p className="section-description">Energie und Transformationsarbeit.</p>

      <div className="cards-container">
        <div className="card">
          <img src={code1} alt="Emotions Code" />
          <div className="card-content">
            <h3>Emotions Code®</h3>
            {expandedFirst ? fullTextFirst : <p>{shortTextFirst}</p>}
            <button onClick={() => setExpandedFirst(!expandedFirst)}>
              {expandedFirst ? "Weniger anzeigen" : "Weiterlesen"}
            </button>
          </div>
        </div>

        <div className="card">
          <img src={code2} alt="Body Code" />
          <div className="card-content">
            <h3>Der Body Code™</h3>
            {expandedSecond ? fullTextSecond : <p>{shortTextSecond}</p>}
            <button onClick={() => setExpandedSecond(!expandedSecond)}>
              {expandedSecond ? "Weniger anzeigen" : "Weiterlesen"}
            </button>
          </div>
        </div>

        <div className="card">
          <img src={code3} alt="Herzwand" />
          <div className="card-content">
            <h3>Herzwand</h3>
            {expandedThird ? fullTextThird : <p>{shortTextThird}</p>}
            <button onClick={() => setExpandedThird(!expandedThird)}>
              {expandedThird ? "Weniger anzeigen" : "Weiterlesen"}
            </button>
          </div>
        </div>

        <div className="card">
          <img src={code4} alt="Transformationsarbeit" />
          <div className="card-content">
            <h3>Transformationsarbeit</h3>
            {expandedFourth ? fullTextFourth : <p>{shortTextFourth}</p>}
            <button onClick={() => setExpandedFourth(!expandedFourth)}>
              {expandedFourth ? "Weniger anzeigen" : "Weiterlesen"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LibrarySection;
