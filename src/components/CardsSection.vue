<template>
  <section class="cards-section">
    <h2 class="title">Nuestros Servicios</h2>
    <div class="cards-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :style="{ 'transition-delay': `${index * 0.1}s` }"
      >
        <div class="card-media-wrapper">
          <img :src="card.image" :alt="card.title" class="card-image" />

          <div class="card-overlay">
            <div class="overlay-content">
              <p class="overlay-description">{{ card.full_description }}</p>
              <button
  class="overlay-button"
  @click="$router.push(`/servicio/${index}`)"
>
  Ver detalles
</button>

            </div>
          </div>
        </div>

        <div class="card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardsSection",
  data() {
    return {
      cards: [
        {
          title: "Desarrollo Web",
          description: "Creamos sitios web modernos, rápidos y adaptables.",
          full_description:
            "Soluciones front-end y back-end con las últimas tecnologías. Enfocados en la experiencia de usuario y la optimización de la velocidad.",
          image: require("@/assets/card1.avif"),
        },
        {
          title: "Aplicaciones Móviles",
          description: "Desarrollamos apps móviles para Android y iOS.",
          full_description:
            "Desarrollo nativo o híbrido para alcanzar a tu audiencia en cualquier plataforma móvil. Incluye diseño UI/UX.",
          image: require("@/assets/card2.jpg"),
        },
        {
          title: "Inteligencia Artificial",
          description: "Soluciones basadas en IA para optimizar procesos.",
          full_description:
            "Implementación de Machine Learning y automatización para mejorar la eficiencia y toma de decisiones en tu negocio.",
          image: require("@/assets/card3.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* --- Fondo Oscuro y Sección Base --- */
.cards-section {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0d1117, #161b22);
  color: #eaeaea;
  position: relative;
  overflow: hidden;
}

/* Efecto de partículas sutil */
.cards-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    rgba(255, 255, 255, 0.05),
    transparent 70%
  );
  animation: float 15s infinite alternate ease-in-out;
  z-index: 0;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-20px);
  }
}

.title {
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #ffffff;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* --- Contenedor de Tarjetas --- */
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

/* --- Tarjetas --- */
.card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 320px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
}

/* --- Imagen con efecto parallax --- */
.card-media-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 0.8s ease;
}

.card:hover .card-image {
  transform: scale(1.15);
}

/* --- Overlay --- */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.9);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
}

.card:hover .card-overlay {
  opacity: 1;
  transform: translateY(0);
}

.overlay-content {
  text-align: center;
  padding: 1.5rem;
}

.overlay-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.overlay-button {
  background: #fff;
  color: #007bff;
  border: none;
  padding: 0.7rem 1.3rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.overlay-button:hover {
  background: #007bff;
  color: white;
  transform: scale(1.1);
}

/* --- Contenido inferior --- */
.card-content {
  padding: 1.5rem 1rem;
}

.card-content h3 {
  color: #1da1f2;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.card-content p {
  color: #cfcfcf;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* --- Responsividad --- */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  .title {
    font-size: 2.2rem;
  }
}
</style>
