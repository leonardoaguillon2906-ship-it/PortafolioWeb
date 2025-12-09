<template>
  <transition name="fade-slide">
    <header :class="['header', { 'header--scrolled': isScrolled }]">
      <div class="header__container">

        <!-- 🔥 LOGO + TÍTULO -->
        <h1 class="header__title">
          <img src="/logo2.png" alt="Logo" class="header__logo" />
          Mi Portafolio
        </h1>

        <nav class="nav">
          <ul class="nav__list">

            <!-- INICIO -->
            <li>
              <router-link to="/" class="nav__link">Inicio</router-link>
            </li>

            <!-- SERVICIOS -->
            <li>
              <router-link to="/servicios" class="nav__link">
                Servicios
              </router-link>
            </li>

            <!-- SOBRE MÍ -->
            <li>
              <router-link to="/form" class="nav__link">Sobre mi</router-link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return { isScrolled: false };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },

    scrollToServicios() {
      const section = document.getElementById("servicios");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style scoped>
/* ==== ANIMACIÓN DE APARICIÓN ==== */
.fade-slide-enter-active {
  animation: fadeSlideDown 0.6s ease-out;
}

@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==== HEADER BASE ==== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #f0f0f0;
  background: rgba(30, 30, 30, 0.75);
  backdrop-filter: blur(8px);
  padding: 18px 0;
  z-index: 1000;
  transition: all 0.4s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ==== HEADER AL HACER SCROLL ==== */
.header--scrolled {
  background: rgba(20, 20, 20, 0.95);
  padding: 12px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* ==== CONTENEDOR ==== */
.header__container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
}

/* ==== TÍTULO ==== */
.header__title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.4s ease;
}

/* ==== LOGO ==== */
.header__logo {
  width: 40px;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.header--scrolled .header__logo {
  transform: scale(0.9);
}

.header--scrolled .header__title {
  color: #42b983;
}

/* ==== MENÚ ==== */
.nav__list {
  list-style: none;
  display: flex;
  gap: 1.8rem;
  margin: 0;
  padding: 0;
}

.nav__link {
  color: #e8e8e8;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav__link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background-color: #42b983;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav__link:hover {
  color: #42b983;
}

.nav__link:hover::after {
  width: 60%;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 768px) {
  .header__container {
    flex-direction: column;
  }

  .nav__list {
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .header__title {
    font-size: 1.3rem;
  }
}
</style>
