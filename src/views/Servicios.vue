<template>
  <section id="servicios" class="servicios">

    <h2 class="title">Servicios</h2>

    <div class="grid">
      <div v-for="service in services" :key="service.id" class="card" @click="verDetalle(service.id)">
        <img :src="service.image" class="card-img" />
        <h3 class="card-title">{{ service.title }}</h3>
        <p class="card-desc">{{ service.short }}</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Servicios",
  data() {
    return {
      services: [
        { id: 0, title: "Desarrollo Web", short: "Sitios modernos y responsivos", image: require("@/assets/card1.avif") },
        { id: 1, title: "Apps Móviles", short: "Android & iOS nativo o híbrido", image: require("@/assets/card2.jpg") },
        { id: 2, title: "Inteligencia Artificial", short: "Modelos predictivos y automatización", image: require("@/assets/card3.png") },
        { id: 4, title: "Inteligencia Artificial", short: "Modelos predictivos y automatización", image: require("@/assets/TecnologiaDesarrollo.png") },
        { id: 5, title: "Inteligencia Artificial", short: "Modelos predictivos y automatización", image: require("@/assets/TecnologiaDesarrollo.png") },
        { id: 5, title: "Inteligencia Artificial", short: "Modelos predictivos y automatización", image: require("@/assets/TecnologiaDesarrollo.png") },

      ]
    };
  },

  methods: {
    verDetalle(id) {
      this.$router.push(`/service/${id}`);
    }
  }
};
</script>

<style scoped>
.servicios {
  padding: 4rem 1.5rem;
  background: linear-gradient(180deg, #0f0f0f, #1d1d1d);
  color: white;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 0 0 12px #42b983;
}

/* GRID DE TARJETAS */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

/* TARJETAS FUTURISTAS */
.card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1rem;
  cursor: pointer;
  transition: 0.35s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(66, 185, 131, 0.1);
  transform: translateZ(0);
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 0 25px rgba(66, 185, 131, 0.4);
  border-color: #42b983;
}

.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}

.card-title {
  font-size: 1.3rem;
  margin-top: 0.8rem;
  font-weight: 600;
}

.card-desc {
  opacity: 0.8;
  font-size: 0.9rem;
  margin-top: 0.4rem;
}
</style>
