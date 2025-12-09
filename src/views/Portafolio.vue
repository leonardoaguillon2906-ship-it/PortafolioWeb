<template>
  <section class="slider" :class="theme" ref="sliderRef" @mouseenter="pauseAutoplay" @mouseleave="startAutoplay">
    <!-- Indicadores (dots) -->
    <div class="dots">
      <button
        v-for="(s, i) in slides"
        :key="i"
        :class="['dot', { activeDot: currentSlide === i }]"
        @click="goToSlide(i)"
        :aria-label="`Ir al slide ${i + 1}`"
      />
    </div>

    <!-- Diapositivas coverflow -->
    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index"
      :style="{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      :class="{
        active: currentSlide === index,
        prev: index === prevIndex,
        next: index === nextIndex
      }"
    >
      <div :class="['chat-bubble', slide.side]">
        <img v-if="slide.image" :src="slide.image" class="slide-image" alt="" />
        <h2>{{ slide.title }}</h2>
        <ul>
          <li v-for="item in slide.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Controles -->
    <div class="controls">
      <button class="arrow left-arrow" @click="prevSlide" aria-label="Anterior">⟨</button>
      <button class="arrow right-arrow" @click="nextSlide" aria-label="Siguiente">⟩</button>
    </div>

    <!-- Toggle modo -->
    <button class="theme-toggle" @click="toggleTheme">
      {{ theme === 'dark' ? '☀️' : '🌙' }}
    </button>
  </section>
</template>

<script>
export default {
  name: "PortafolioView",

  data() {
    return {
      currentSlide: 0,
      autoplayInterval: null,
      startX: 0,
      endX: 0,
      theme: "dark",
      slides: [
        {
          title: "Habilidades",
          side: "left",
          background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
          items: ["Vue.js", "JavaScript", "UI Design", "Bases de datos"]
        },
        {
          title: "Actitudes",
          side: "right",
          background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
          items: ["Responsable", "Organizado", "Trabajo en equipo"]
        },
        {
          title: "Aptitudes",
          side: "left",
          background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          items: ["Pensamiento lógico", "Creatividad", "Resolución de problemas"]
        },
        {
          title: "Proyectos",
          side: "right",
          background: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          image: "https://cdn-icons-png.flaticon.com/512/9068/9068848.png",
          items: ["Chatbot WhatsApp", "Dashboard Vue + Node.js", "API REST"]
        }
      ]
    };
  },

  computed: {
    prevIndex() {
      return (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    nextIndex() {
      return (this.currentSlide + 1) % this.slides.length;
    }
  },

  mounted() {
    // agrega control táctil y autoplay
    this.addTouchControls();
    this.startAutoplay();
  },

  beforeUnmount() {
    this.clearAutoplay();
    // remover listeners si aplican
    const s = this.$refs.sliderRef;
    if (s && s.removeEventListener) {
      s.removeEventListener("touchstart", this._touchStartHandler);
      s.removeEventListener("touchend", this._touchEndHandler);
    }
  },

  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(i) {
      this.currentSlide = i;
    },

    startAutoplay() {
      this.clearAutoplay();
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 3500);
    },
    clearAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },
    pauseAutoplay() {
      this.clearAutoplay();
    },

    addTouchControls() {
      const slider = this.$refs.sliderRef;
      if (!slider) return;

      // guardamos los handlers para poder removerlos en beforeUnmount
      this._touchStartHandler = (e) => {
        this.startX = e.touches[0].clientX;
      };
      this._touchEndHandler = (e) => {
        this.endX = e.changedTouches[0].clientX;
        this.handleSwipe();
      };

      slider.addEventListener("touchstart", this._touchStartHandler, { passive: true });
      slider.addEventListener("touchend", this._touchEndHandler);
    },

    handleSwipe() {
      const diff = this.endX - this.startX;
      if (diff > 50) this.prevSlide();
      if (diff < -50) this.nextSlide();
    },

    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  }
};
</script>

<style scoped>
/* Theme */
.slider.dark { background: radial-gradient(circle at center, #02030a, #000); color: #00ffc8; }
.slider.light { background: #e7e7e7; color: #000; }

/* Container */
.slider {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* Dots (indicadores) */
.dots {
  position: absolute;
  bottom: 30px;
  display: flex;
  gap: 10px;
  z-index: 10;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #00ffff;
  cursor: pointer;
  background: transparent;
  transition: transform .2s, background .2s;
}
.dot.activeDot {
  background: #00ffff;
  transform: scale(1.3);
}

/* Slides */
.slide-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(0,255,255,0.4));
}

.slide {
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  transition: transform 0.7s ease, opacity 0.7s ease;
  transform: scale(0.6) rotateY(35deg);
  opacity: 0.15;
  pointer-events: none;
  user-select: none;
}

.slide.active {
  transform: scale(1) rotateY(0deg);
  opacity: 1;
  z-index: 3;
  pointer-events: auto;
}

.slide.prev {
  transform: translateX(-50%) scale(0.7) rotateY(35deg);
  opacity: 0.5;
  z-index: 2;
}

.slide.next {
  transform: translateX(50%) scale(0.7) rotateY(-35deg);
  opacity: 0.5;
  z-index: 2;
}

/* Chat bubble */
.chat-bubble {
  padding: 2rem;
  border-radius: 1rem;
  max-width: 450px;
  backdrop-filter: blur(10px);
  background: rgba(5,5,15,0.72);
  border: 1px solid rgba(0,255,180,0.6);
  box-shadow: 0 0 35px rgba(0,255,180,0.35), 0 0 60px rgba(0,255,255,0.15);
  text-align: center;
  animation: neonPulse 3s infinite alternate ease-in-out;
  position: relative;
  overflow: hidden;
}

/* Theme toggle */
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #00ffff;
  background: rgba(0,255,255,0.12);
  color: #00ffff;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;
}

/* Controls arrows */
.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  z-index: 10;
}
.arrow {
  position: absolute;
  background: rgba(0,255,200,0.12);
  border: 1px solid #00ffd5;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  color: #00ffe7;
  cursor: pointer;
  font-size: 2rem;
  box-shadow: 0 0 15px rgba(0,255,220,0.22);
  text-shadow: 0 0 8px rgba(0,255,255,0.45);
}
.left-arrow { left: 20px; }
.right-arrow { right: 20px; }

/* Animations */
@keyframes neonPulse {
  0% { box-shadow: 0 0 25px rgba(0,255,180,0.35); }
  100% { box-shadow: 0 0 45px rgba(0,255,255,0.65); }
}
</style>
