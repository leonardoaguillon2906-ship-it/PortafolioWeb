<template>
  <section class="slider" :class="theme" ref="sliderRef">

    <!-- INDICADORES (PUNTITOS) -->
    

    <!-- DIAPOSITIVAS COVERFLOW -->
    <div
      class="slide"
      v-for="(slide, index) in slides"
      :key="index"
      :style="{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      :class="{
        active: currentSlide === index,
        prev: index === currentSlide - 1,
        next: index === currentSlide + 1
      }"
    >
      <div :class="['chat-bubble', slide.side]">
        <img v-if="slide.image" :src="slide.image" class="slide-image" />
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

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 3500);
    },

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

      if (diff > 50) this.prevSlide();
      if (diff < -50) this.nextSlide();
    },

    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    }
  }
}
</script>

<style scoped>
.slider.dark { background: radial-gradient(circle at center, #02030a, #000); color: #00ffc8; }
.slider.light { background: #e7e7e7; color: #000; }

.slider {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(0,255,255,0.4));
}

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

.chat-bubble {
  padding: 2rem;
  border-radius: 1rem;
  max-width: 450px;
  backdrop-filter: blur(14px);
  background: rgba(5,5,15,0.7);
  border: 1px solid rgba(0,255,180,0.6);
  box-shadow: 0 0 35px rgba(0,255,180,0.55), 0 0 60px rgba(0,255,255,0.25);
  text-align: center;
}

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

.controls {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}
.arrow {
  position: absolute;
  background: rgba(0,255,200,0.18);
  border: 1px solid #00ffd5;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  color: #00ffe7;
  cursor: pointer;
  font-size: 2rem;
  box-shadow: 0 0 15px rgba(0,255,220,0.45);
  text-shadow: 0 0 8px rgba(0,255,255,0.9);
}
.left-arrow {
  left: 20px;
}
.right-arrow {
  right: 20px;
}
</style>
