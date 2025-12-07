<template>
  <section class="service-detail">

    <div class="card-container">

      <!-- Título -->
      <h1 class="title">{{ service.title }}</h1>

      <!-- Imagen con efecto flotante -->
      <div class="image-wrapper">
        <img :src="service.image" class="detail-img" />
      </div>

      <!-- Descripción -->
      <p class="description">
        {{ service.full_description }}
      </p>

      <!-- Botón volver -->
      <button class="back-btn" @click="$router.push('/')">
        <span>Volver</span>
      </button>

    </div>

  </section>
</template>

<script>
export default {
  name: "ServiceDetail",
  data() {
    return {
      service: {},
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);

    const allServices = [
      {
        id: 0,
        title: "Desarrollo Web",
        full_description:
          "Creamos sitios web de alto rendimiento con efectos modernos, optimización avanzada y UX impecable.",
        image: require("@/assets/card1.avif"),
      },
      {
        id: 1,
        title: "Aplicaciones Móviles",
        full_description:
          "Apps híbridas y nativas con animaciones fluidas, arquitectura sólida y un diseño que impacta.",
        image: require("@/assets/card2.jpg"),
      },
      {
        id: 2,
        title: "Inteligencia Artificial",
        full_description:
          "Soluciones predictivas, automatización inteligente y análisis de datos con tecnologías IA.",
        image: require("@/assets/card3.png"),
      },
    ];

    this.service = allServices[id];
  },
};
</script>

<style scoped>
/* Fondo futurista */
.service-detail {
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #0a0f18, #06080d);
  overflow: hidden;
  color: #ffffff;
  position: relative;
}

/* Partículas sutiles */
.service-detail::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background: repeating-radial-gradient(
    circle at center,
    rgba(0, 200, 255, 0.2) 0,
    rgba(0, 200, 255, 0.04) 2px,
    transparent 5px
  );
  opacity: 0.06;
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

/* Contenedor central tipo glassmorphism */
.card-container {
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.07);
  padding: 3rem 2rem;
  width: min(600px, 90%);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 25px rgba(0, 200, 255, 0.3),
              0 0 70px rgba(0, 200, 255, 0.1);
  text-align: center;
  position: relative;
  z-index: 2;
  animation: fadeIn 1.2s ease forwards;
  transform: translateY(25px);
  opacity: 0;
}

@keyframes fadeIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Título neon */
.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 15px #00d9ff, 0 0 25px #00aaff;
}

/* Imagen flotante */
.image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.detail-img {
  width: 280px;
  border-radius: 18px;
  box-shadow: 0 0 25px rgba(0, 200, 255, 0.4),
              0 0 45px rgba(0, 120, 255, 0.2);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Texto */
.description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 2rem;
}

/* Botón futurista */
.back-btn {
  position: relative;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  background: rgba(0, 200, 255, 0.2);
  color: #00eaff;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s ease;
  overflow: hidden;
}

.back-btn::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  background: linear-gradient(135deg, #00eaff, #007bff);
  opacity: 0;
  transition: 0.3s ease;
  border-radius: 12px;
}

.back-btn:hover::before {
  opacity: 0.25;
}

.back-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 0 18px rgba(0, 200, 255, 0.6);
}
</style>
