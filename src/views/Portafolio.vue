<template>
  <section class="slider" :class="theme" ref="sliderRef">

    <!-- INDICADORES (PUNTITOS) -->
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="['dot', { activeDot: currentSlide === index }]"
        @click="goToSlide(index)"
      ></span>
    </div>

    <!-- DIAPOSITIVAS COVERFLOW -->
    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index"
      :style="{ background: slide.background }"
      :class="{
        active: currentSlide === index,
        prev: index === currentSlide - 1,
        next: index === currentSlide + 1
      }"
    >
      <div :class="['chat-bubble', slide.side]">
        <h2>{{ slide.title }}</h2>
        <ul>
          <li v-for="item in slide.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- CONTROLES -->
    <div class="controls">
      <button class="arrow left-arrow" @click="prevSlide">⟨</button>
      <button class="arrow right-arrow" @click="nextSlide">⟩</button>
    </div>

    <!-- TOGGLE MODO OSCURO/CLARO -->
    <button class="theme-toggle" @click="toggleTheme">
      {{ theme === 'dark' ? '☀️' : '🌙' }}
    </button>

  </section>
</template>

<script>
export default {
  name: "MyPortafolioChatFullScreen",

  data() {
    return {
      currentSlide: 0,
      autoplayInterval: null,
      startX: 0,
      endX: 0,
      theme: 'dark',

      slides: [
        {
          title: "Habilidades",
          side: "left",
          background: "linear-gradient(135deg,#001f3f,#003366)",
          items: ["Vue.js", "JavaScript", "UI Design", "Bases de datos"]
        },
        {
          title: "Actitudes",
          side: "right",
          background: "linear-gradient(135deg,#33001b,#ff0084)",
          items: ["Responsable", "Organizado", "Trabajo en equipo"]
        },
        {
          title: "Aptitudes",
          side: "left",
          background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
          items: ["Pensamiento lógico", "Creatividad", "Resolución de problemas"]
        },
        {
          title: "Proyectos",
          side: "right",
          background: "linear-gradient(135deg,#1e3c72,#2a5298)",
          items: ["Chatbot WhatsApp", "Dashboard Vue + Node.js", "API REST"]
        }
      ]
    }
  },

  mounted() {
    this.startAutoplay();
    this.addTouchControls();
  },

  beforeUnmount() {
    clearInterval(this.autoplayInterval);
  },

  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    },

    goToSlide(i) {
      this.currentSlide = i;
    },

    // AUTOPLAY
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 3500);
    },

    // DESLIZAR EN MÓVIL
    addTouchControls() {
      const slider = this.$refs.sliderRef;

      slider.addEventListener("touchstart", (e) => {
        this.startX = e.touches[0].clientX;
      });

      slider.addEventListener("touchend", (e) => {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
      });
    },

    handleSwipe() {
      const diff = this.endX - this.startX;

      if (diff > 50) this.prevSlide();   // swipe derecha
      if (diff < -50) this.nextSlide();  // swipe izquierda
    },

    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
  }
}
</script>

<style scoped>
.slider.dark { background: #000; }
.slider.light { background: #e7e7e7; color: #000; }

/* Contenedor */
.slider {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Indicadores */
.dots {
  position: absolute;
  bottom: 70px;
  display: flex;
  gap: 10px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #00ffff;
  cursor: pointer;
  transition: 0.3s;
}
.activeDot {
  background: #00ffff;
  transform: scale(1.3);
}

/* COVERFLOW */
.slide {
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  transition: 0.7s ease;
  transform: scale(0.6) rotateY(35deg);
  opacity: 0.3;
}

.slide.active {
  transform: scale(1) rotateY(0deg);
  opacity: 1;
  z-index: 3;
}

.slide.prev {
  transform: translateX(-50%) scale(0.7) rotateY(35deg);
  opacity: 0.5;
  z-index: 1;
}

.slide.next {
  transform: translateX(50%) scale(0.7) rotateY(-35deg);
  opacity: 0.5;
  z-index: 1;
}

/* Burbuja */
.chat-bubble {
  padding: 2rem;
  border-radius: 1rem;
  max-width: 450px;
  backdrop-filter: blur(12px);
  background: rgba(20,20,30,0.5);
  border: 1px solid rgba(0,255,255,0.3);
  box-shadow: 0 0 20px rgba(0,255,255,0.35);
}

/* Botón de modo */
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #00ffff;
  background: rgba(0,255,255,0.25);
  color: #00ffff;
  cursor: pointer;
  font-size: 1.2rem;
}

/* Controles */
.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}
.arrow {
  position: absolute;
  background: rgba(0,255,255,0.3);
  border: 1px solid #00ffff;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  color: #00ffff;
  cursor: pointer;
  font-size: 2rem;
}
.left-arrow {
  left: 20px;
}
.right-arrow {
  right: 20px;
}
.controls button {
  background: rgba(0,255,255,0.3);
  border: 1px solid #00ffff;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  color: #00ffff;
  cursor: pointer;
}
</style>
