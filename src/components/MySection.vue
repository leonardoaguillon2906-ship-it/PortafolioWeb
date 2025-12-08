<template>
  <div class="section-wrapper">

    <!-- Partículas animadas -->
    <span v-for="n in 8" :key="n" class="particle"></span>

    <div class="content">

      <!-- AVATAR TECNOLÓGICO -->
      <div class="avatar-container animate-left">

        <!-- Anillo escáner -->
        <div class="scanner"></div>

        <!-- Borde neón -->
        <div class="neon-border">
          <img :src="imagen" alt="Avatar" class="avatar floating" />
        </div>

      </div>

      <!-- TEXTO -->
      <div class="text-box animate-right">
        <h2>Bienvenido</h2>
        <p>
          Esta es mi sección principal. Aquí puedes agregar información,
          descripción, botones o lo que tú quieras, lo importante es la mejora y fortalecer la confianza
          con el usuario.
        </p>

        <div class="buttons">

          <!-- BOTÓN PORTAFOLIO -->
          <router-link to="/portafolio" class="btn primary">
            Ver portafolio
          </router-link>

          <!-- DESCARGAR CV DESDE /public -->
          <a href="/LeonardoCV.pdf" download class="btn outline">Descargar CV</a>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import imagen from "@/assets/Joven.png"

export default {
  name: "MySection",
  data() {
    return {
      imagen
    }
  }
}
</script>

<style scoped>
/* ===== FONDO ===== */
.section-wrapper {
  width: 100%;
  min-height: 90vh;
  background: radial-gradient(circle at top, #0d1117, #04070b 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* ===== CONTENIDO ===== */
.content {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 3rem 2rem;
  z-index: 2;
}

/* ===== PARTÍCULAS ===== */
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #00ffff;
  box-shadow: 0 0 10px #00ffff;
  border-radius: 50%;
  animation: floatParticle 14s linear infinite;
  opacity: 0.5;
}

.particle:nth-child(1) { left: 20%; animation-delay: 0s; }
.particle:nth-child(2) { left: 40%; animation-delay: 2s; }
.particle:nth-child(3) { left: 60%; animation-delay: 4s; }
.particle:nth-child(4) { left: 80%; animation-delay: 6s; }
.particle:nth-child(5) { left: 30%; animation-delay: 8s; }
.particle:nth-child(6) { left: 50%; animation-delay: 10s; }
.particle:nth-child(7) { left: 70%; animation-delay: 12s; }
.particle:nth-child(8) { left: 90%; animation-delay: 14s; }

@keyframes floatParticle {
  0% { bottom: -10px; opacity: 0 }
  50% { opacity: 1 }
  100% { bottom: 110%; opacity: 0 }
}

/* ===== AVATAR ===== */
.avatar-container {
  padding: 2.7rem;
  border-radius: 50%;
  background: rgba(88, 166, 255, 0.03);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 40px rgba(88,166,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.scanner {
  position: absolute;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  border: 2px dashed rgba(0,255,255,0.4);
  animation: rotateScanner 8s linear infinite;
}

.neon-border {
  padding: 6px;
  border-radius: 50%;
  background: linear-gradient(120deg, #58a6ff, #00ffff, #7c3aed);
  background-size: 300% 300%;
  animation: borderFlow 6s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #0d1117;
  box-shadow: 0 0 40px rgba(0,255,255,0.4);
}

.floating {
  animation: floating 4s ease-in-out infinite;
}

/* ===== TEXTO ===== */
.text-box {
  color: white;
  max-width: 500px;
}

.text-box h2 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #58a6ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-box p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

/* ===== BOTONES ===== */
.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.7rem 1.7rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn.primary {
  background: linear-gradient(135deg, #58a6ff, #00ffff);
  border: none;
  color: white;
  box-shadow: 0 0 15px rgba(0,255,255,0.4);
}

.btn.outline {
  border: 2px solid #58a6ff;
  color: #58a6ff;
  background: transparent;
}

.btn:hover {
  transform: translateY(-2px) scale(1.05);
}

/* ===== ESTILOS ROUTER-LINK COMO BOTÓN ===== */
.a.btn {
  text-decoration: none !important;
  color: white !important;
  display: inline-block;
}

.a.btn.primary:hover {
  transform: translateY(-2px) scale(1.05);
}

/* ===== ANIMACIONES ===== */
@keyframes borderFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@keyframes rotateScanner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-left {
  opacity: 0;
  transform: translateX(-60px);
  animation: slideLeft 1s forwards;
}

.animate-right {
  opacity: 0;
  transform: translateX(60px);
  animation: slideRight 1s forwards 0.3s;
}

@keyframes slideLeft {
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideRight {
  to { opacity: 1; transform: translateX(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    width: 170px;
    height: 170px;
  }

  .avatar-container {
    padding: 1.5rem;
  }

  .scanner {
    width: 120%;
    height: 120%;
  }

  .buttons {
    justify-content: center;
  }
}
</style>
