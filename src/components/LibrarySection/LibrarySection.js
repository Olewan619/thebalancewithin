import React, { useState } from "react";
import "./LibrarySection.scss";

// Импорты изображений
import code1 from "../../img/code1.jpg";
import code2 from "../../img/code2.jpg";
import code3 from "../../img/code3.jpg";
import code5 from "../../img/code5.jpg";

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
        Der <strong>Emotions Code</strong> ist eine Form der{" "}
        <strong>Energiearbeit</strong>, die von{" "}
        <strong>Dr. Bradley Nelson</strong> entwickelt wurde und die es
        ermöglicht, sich von <strong>emotionalen Blockaden</strong> zu befreien.
      </p>
      <p>
        Das Wissen um das <strong>menschliche Energiefeld</strong> existiert
        schon seit Tausenden von Jahren. Es wird auf unterschiedliche Weise als
        „Chi, Ki, Prana oder Lebensenergie“ bezeichnet.
      </p>
      <p>
        Die Quantenphysik belegt, dass auf subatomarer Ebene alles in unserer
        Welt aus <strong>Energie</strong> besteht. Das gilt sowohl für unseren
        Körper, als auch für unsere Gefühle und Gedanken.
      </p>
      <p>
        Laut <strong>Dr. Bradley Nelson</strong> hat jede{" "}
        <strong>Emotion</strong> ihre eigene individuelle{" "}
        <strong>Schwingung</strong>. Wenn eine Emotion nicht verarbeitet werden
        kann, bleibt ihre Schwingung im <strong>Energiekörper</strong> stecken
        und kann den Menschen aus dem <strong>Gleichgewicht</strong> bringen.
        Dieses Ungleichgewicht schränkt die Wirkung der{" "}
        <strong>Selbstheilungskräfte</strong> ein.
      </p>
      <p>
        Doch was sind <strong>gefangene Emotionen</strong>?
      </p>
      <p>
        Wir alle sammeln im Laufe unseres Lebens etlichen{" "}
        <strong>emotionalen Ballast</strong> an. Dieser Ballast entsteht in
        Situationen, in denen wir negative Emotionen erleben, die wir jedoch im
        Erlebensmoment nicht verarbeiten können.
      </p>
      <p>
        Die Spuren und Auswirkungen, die diese emotional schwierigen Ereignisse
        hinterlassen, bleiben oft in uns gefangen und können nicht gelöst und
        losgelassen werden. Die in diesem Prozess entstehende Energie wird zu
        einer störenden Schwingung, die sich ungünstig auf unsere körperliche
        und emotionale Gesundheit auswirkt.
      </p>
      <p>
        Das kann letztendlich zu dem Gefühl führen, im Leben blockiert zu sein,
        keine Klarheit im Leben zu spüren, und sie können uns{" "}
        <strong>physisch wie auch psychisch</strong> krank machen.Das{" "}
        <strong>Erkennen, Aufspüren und Loslassen</strong> solcher blockierter
        Emotionen kann zu großen Veränderungen in allen Bereichen unseres Lebens
        führen.
      </p>
      <p>
        Durch die Arbeit mit dem <strong>Emotions Code</strong> vollzieht sich
        ein <strong>Aufräumen</strong> und eine <strong>Reinigung</strong> von
        den uns belastenden Emotionen. Wir werden unseren{" "}
        <strong>emotionalen Ballast</strong> los, den wir vielleicht schon sehr
        lange, zu lange mit uns tragen.Anschließend kann die{" "}
        <strong>Lebensenergie</strong> in unserem Körper freier fließen und
        dieser Zustand ermöglicht es uns, dass wir uns{" "}
        <strong>neu ausrichten</strong> können.
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
        Außer den emotionalen Altlasten gibt es auch eine Reihe von weiteren
        Ursachen, die uns aus dem Gleichgewicht bringen können.
      </p>
      <p>
        Der <strong>Body Code</strong> ist eine Art{" "}
        <strong>Wissensdatenbank</strong> verschiedener{" "}
        <strong>Ungleichgewichte</strong>, die im Körper entstehen.
      </p>
      <p>
        Das Unterbewusstsein hat Zugang zu diesen Informationen und kann mit uns
        darüber kommunizieren, welche körperlichen, psychischen und emotionalen
        Probleme uns aus dem Gleichgewicht gebracht haben.
      </p>
      <p>
        Mit dem <strong>Body Code</strong> werden nicht die Symptome behandelt,
        sondern die Ungleichgewichte werden aufgedeckt und gelöst. Dadurch
        schafft man Bedingungen, durch die der Körper sich selbst heilen kann.
      </p>
      <p>
        Diese Methode ermöglicht es nicht nur unsere Gesundheit zu verbessern,
        sondern auch Blockaden ausfindig zu machen, die uns daran hindern in
        mehr Fülle zu leben.
      </p>
      <p>
        Dies würde zum Beispiel bedeuten, bessere Beziehungen zu haben,
        erfolgreicher in der Schule, im Studium oder bei der Arbeit zu sein, und
        befreiter durchs Leben zu gehen.
      </p>
      <p>
        Diese umfassende Methode kann Menschen jeden Alters helfen.Somit könen
        alle von der <strong>Body Code</strong> Methode profitieren.
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
        Diese Mauer ist ein Schutzmechanismus, der in diesem Moment sehr
        hilfreich ist, denn durch Sie, verspüren wir den Schmerz ein bisschen
        weniger.
      </p>
      <p>
        Auf Dauer ist aber so eine Herzmauer schädlich für uns. Das Herz hat
        seine eigene, starke Schwingung. Je mehr Schichten an störenden
        Schwingungen von eingeschlossenen Emotionen, die als Herzwand dienen,
        vorhanden sind, umso weniger kann die eigene Schwingung des Herzens nach
        außen in die Welt strömen.
      </p>
      <p>
        Mit einer dicken Herzmauer ist es deshalb viel schwieriger, Liebe zu
        geben und Liebe zu empfangen.
      </p>
      <p>
        Laut <strong>Dr. Bradley Nelson</strong> haben{" "}
        <strong>93% der Erwachsenen eine Herzmauer</strong>.
      </p>
      <p>
        Das <strong>Lösen</strong> einer Herzmauer kann Wunderbares bewirken,
        was sich positiv auf alle Beziehungen auswirken kann. Manchen der
        behandelten Menschen hat diese Lösung die Ehe gerettet.Es kann auch
        dabei helfen, im Leben bessere Entscheidungen zu treffen.
      </p>
      <p>
        Es wurde sogar schon oft berichtet, dass Menschen, die an Depressionen
        litten, dadurch große Hilfe erfahren haben. Oft reichen 2 bis 3
        Sitzungen aus, um die Herzmauer zu lösen, wovon die Menschen selbst,
        ihre Familie und ihr ganzes Umfeld profitieren.
      </p>
    </>
  );

  const shortTextFourth = `Für jene Menschen, die sich nach einer tiefgründigen Veränderung sehnen und bereit sind, selbst Arbeit in ihre Transformation zu investieren, biete ich eine 7-monatige Begleitung an.`;

  const fullTextFourth = (
    <>
      <p>
        Gyrotonic ® ist ein <strong>ganzheitliches Bewegungskonzept</strong>,
        das die <strong>Gelenke sanft mobilisiert</strong>, die Muskulatur
        kräftigt und den Körper in{" "}
        <strong>fließenden, dreidimensionalen Bewegungen</strong> neu
        ausrichtet.
      </p>

      <p>
        Durch den Einsatz spezieller Geräte werden die Bewegungen unterstützt
        und geführt, sodass auch tiefliegende Muskelgruppen angesprochen und{" "}
        <strong>Fehlhaltungen korrigiert</strong> werden können. Der Therapeut
        begleitet jede Übung mit gezielten Impulsen und führt den Körper sanft
        in die <strong>optimale Position</strong>.
      </p>

      <p>
        In der physiotherapeutischen Anwendung fördert Gyrotonic gezielt die{" "}
        <strong>Beweglichkeit</strong>, <strong>Kraft</strong> und{" "}
        <strong>Koordination</strong> – besonders nach Verletzungen oder bei{" "}
        <strong>chronischen Beschwerden</strong>.
      </p>

      <p>
        Die harmonische Verbindung von Bewegung und Atem schafft ein Gefühl von{" "}
        <strong>Leichtigkeit</strong> und <strong>Vitalität</strong>, das weit
        über das Training hinaus wirkt.
      </p>
    </>
  );

  return (
    <section id="angebot" className="library-section">
      <h2 className="section-title">Mein Angebot</h2>
      <p className="section-description-angebot">
        Energieheilarbeit und Gyrotonic®
      </p>

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
            <h3>Herzmauer</h3>
            {expandedThird ? fullTextThird : <p>{shortTextThird}</p>}
            <button onClick={() => setExpandedThird(!expandedThird)}>
              {expandedThird ? "Weniger anzeigen" : "Weiterlesen"}
            </button>
          </div>
        </div>

        <div className="card">
          <img src={code5} alt="Transformationsarbeit" />
          <div className="card-content">
            <h3>Gyrotonic ®</h3>
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
