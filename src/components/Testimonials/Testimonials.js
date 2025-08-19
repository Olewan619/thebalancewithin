import React from "react";
import "./Testimonials.scss";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>Erfahrungsberichte</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">
              "Die angewandten Methoden, die ich bei Isabell Beer kennenlernen
              durfte, haben mir geholfen in mir Heilung zu finden, die sich auf
              alle Bereiche meines Lebens auswirkt. Ein wunderbares, tief
              berührendes Gefühl! Ich bin dankbar dafür."
            </p>
            <p className="author">Sigrid K.</p>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              "Ankommen, zur Ruhe kommen und bei sich selbst ankommen...im Außen
              und Innen, dazu lädt die von Frau Beer geschaffene Atmosphäre,
              sowie ihre Klarheit und Empathie ein. Ich gehe schon nach einigen
              Sitzungen leichter durch meinen Alltag, Ängste und Sorgen
              verlieren immer mehr ihre Dominanz."
            </p>
            <p className="author">Carla L.</p>
          </div>

          <div className="testimonial-card">
            <p className="quote">
              "Zuerst war ich etwas skeptisch gegenüber dem Emotionscode, aber
              ich habe mich aus Neugierde darauf eingelassen. In den Sitzungen
              habe ich mich sehr wohl gefühlt, Isabell strahlte immer Ruhe und
              Selbstsicherheit aus und war nie indiskret oder aufdringlich. Nach
              den Sitzungen war es, als ob man von mir Gewicht weggenommen
              hätte, fühlte mich leichter und war heiterer als sonst. Die
              ultimative Überzeugung kam, als nach ein paar Sitzungen das
              Knacken meines Unterkiefers, das mich seit fast einem Jahr plagte,
              von einem Tag auf den anderen aufhörte und seit 5 Monaten auch
              nicht wiederkam."
            </p>
            <p className="author">Anette B.</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              "Nachdem ich 43 Jahre klassische Physiotherapie aufgrund meiner
              skoliosebedingten Rückenbeschwerden und Bandscheibenvorfälle
              bekommen habe, behandelt mich Isabell mit der Gyrotonic Methode.
              Durch Isabells sorgsame Behandlung und ihren professionellen
              Einsatz des Gyrotonic Gerätes geht es mir heute so gut wie nie
              zuvor."
            </p>
            <p className="author">Brigitte S.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
