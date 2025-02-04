import React from "react"; // Добавляем импорт React
import FirstSection from "./components/FirstSection/FirstSection";
import NavBar from "./components/NavBar/NavBar";
import LibrarySection from "./components/LibrarySection/LibrarySection";
import FreeTrialSection from "./components/Termin/Termin";
import Carousel from "./components/Carousel/Carousel";
import AboutMe from "./components/AboutSection/AboutMe";
import Footer from "./components/Footer/Footer";
import TestimonialsSection from "./components/Testimonials/Testimonials";
import VideoYouTube from "./components/VideoYouTube/VideoYouTube";

function App() {
  return (
    <>
      <NavBar />
      <FirstSection />
      <LibrarySection />
      <FreeTrialSection />
      <Carousel />
      <AboutMe />
      <TestimonialsSection />
      <VideoYouTube />
      <Footer />
    </>
  );
}

export default App;
