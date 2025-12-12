<template>
  <section class="detalle">
    <div class="container" v-if="service">
      
      <button class="back-btn" @click="$router.back()">Volver</button>

      <img :src="service.image" class="header-img" />

      <h2 class="title">{{ service.title }}</h2>

      <p class="desc">{{ service.description }}</p>

      <h3 class="subtitle">Características Principales</h3>
      <ul class="list">
        <li v-for="(item, index) in service.features" :key="index">
          {{ item }}
        </li>
      </ul>

      <h3 class="subtitle">Tecnologías Utilizadas</h3>
      <div class="tech-grid">
        <span v-for="(tech, index) in service.technologies" :key="index" class="tech-chip">
          {{ tech }}
        </span>
      </div>

    </div>

    <div v-else class="not-found">
      <h2>Servicio no encontrado</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceDetail",

  data() {
    return {
      services: [
        {
          id: 0,
          title: "Desarrollo Web",
          description: "Creación de sitios web modernos, optimizados y totalmente responsivos. Incluye diseño UI/UX, integración de APIs, optimización SEO y despliegue en servidores nube.",
          features: [
            "Arquitectura escalable",
            "Responsive Design",
            "Integración con APIs REST y GraphQL",
            "Optimización SEO y rendimiento"
          ],
          technologies: ["Vue.js", "Node.js", "TailwindCSS", "MongoDB"],
          image: require("@/assets/card1.avif")
        },

        {
          id: 1,
          title: "Apps Móviles",
          description: "Desarrollo de aplicaciones móviles nativas e híbridas para Android e iOS. Integración con sensores, almacenamiento local, notificaciones push, etc.",
          features: [
            "Apps nativas y multiplataforma",
            "Alto rendimiento",
            "Integración con APIs externas",
            "Publicación en Play Store y App Store"
          ],
          technologies: ["Flutter", "Kotlin", "Swift", "Firebase"],
          image: require("@/assets/card2.jpg")
        },

        {
          id: 2,
          title: "Inteligencia Artificial",
          description: "Soluciones basadas en IA, como modelos predictivos, análisis de datos, chatbots, automatización inteligente y sistemas de recomendación.",
          features: [
            "Entrenamiento de modelos ML",
            "Automatización de procesos",
            "Chatbots y NLP",
            "Sistemas expertos"
          ],
          technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI"],
          image: require("@/assets/card3.png")
        }
      ],

      service: null
    };
  },

  created() {
    const id = parseInt(this.$route.params.id);
    this.service = this.services.find(s => s.id === id) || null;
  }
};
</script>

<style scoped>
.detalle {
  padding: 3rem 1.5rem;
  background: linear-gradient(180deg, #0f0f0f, #1a1a1a);
  color: white;
}

.container {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.back-btn {
  background: none;
  border: 1px solid #42b983;
  padding: 0.5rem 1rem;
  color: #42b983;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: 0.3s;
}

.back-btn:hover {
  background: #42b983;
  color: black;
}

.header-img {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #42b983;
}

.desc {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.subtitle {
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.list {
  text-align: left;
  margin: auto;
  max-width: 600px;
}

.list li {
  margin: 0.4rem 0;
  opacity: 0.9;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.tech-chip {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid #42b983;
  font-size: 0.85rem;
}

.not-found {
  text-align: center;
  margin-top: 3rem;
}
</style>
