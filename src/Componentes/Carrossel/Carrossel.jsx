import React, { useState } from "react";
import "./Carrossel.css"; // Para o estilo do carrossel

const Carrossel = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://thumbs.dreamstime.com/z/uma-fazenda-de-abelhas-nas-montanhas-abkhaz-apicultura-%C3%A9-antiga-arte-preservada-e-desenvolvida-em-muitas-partes-do-mundo-um-276110127.jpg",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3IZsj67P_-GfH3ThnERuIDOzY_hGJtuM_g&s",
    },
    {
      id: 3,
      image:
        "https://elements-resized.envatousercontent.com/elements-video-cover-images/cc4dab39-841a-4020-8d82-f9de927dc623/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=a7271e4487a756c95eb157b71e98a790f1ede92c5a8d8f5caab46d7d477ed5aa",
    },
    {
      id: 4,
      image:
        "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia31530/estudando-a-vida-nas-colmeias-aprenda-aqui-cpt.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carrossel">
      <div className="carrossel-container">
        <button className="teste" onClick={prevSlide}>
          ❮
        </button>
        <div className="slide">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <button className="teste2" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
