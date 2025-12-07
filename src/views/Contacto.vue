<template>
  <div class="about-wrapper">

    <!-- SEPARADOR SUPERIOR -->
    <div class="separator glow"></div>

    <div class="content animate-fade">

      <!-- AVATAR + EFECTOS -->
      <div class="avatar-container animate-left">
        <div class="scanner"></div>
        <div class="neon-circle">
          <img :src="avatar" alt="Foto de perfil de [tu nombre]" class="avatar floating" />
        </div>
      </div>

      <!-- TEXTO -->
      <div class="text-box animate-right">
        <h2 class="title">Sobre mí</h2>

        <p>
          Soy un desarrollador apasionado por la tecnología y la innovación, enfocado en crear experiencias digitales modernas y funcionales.
        </p>
        <p>
          Me especializo en desarrollo web y móvil usando frameworks como Vue.js, React y TailwindCSS, buscando siempre interfaces intuitivas y rápidas.
        </p>
        <p>
          Disfruto optimizando procesos, resolviendo problemas complejos y aprendiendo nuevas herramientas para mejorar la experiencia del usuario.
        </p>
        <p>
          Fuera del desarrollo, me interesa el diseño gráfico, la fotografía y la inteligencia artificial aplicada a la creatividad.
        </p>
      </div>

    </div>

    <!-- SEPARADOR INFERIOR -->
    <div class="separator glow reverse"></div>

  </div>
</template>

<script>
import avatar from "@/assets/Joven.png";

export default {
  name: "MyContacto",
  data() {
    return {
      avatar,
    };
  },
};
</script>

<style scoped>
/* ===== CONTENEDOR GENERAL ===== */
.about-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top, #0d1117, #04070b 80%);
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

/* Fondo animado */
.about-wrapper::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at center, rgba(0,255,255,0.05), transparent 70%);
  pointer-events: none;
  z-index: 0;
  animation: bgPulse 8s ease-in-out infinite;
}

@keyframes bgPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* ===== SEPARADORES ===== */
.separator {
  width: 80%;
  height: 4px;
  background: linear-gradient(270deg, transparent, #00ffff, #58a6ff, transparent);
  background-size: 600% 600%;
  margin: 2rem 0;
  border-radius: 50px;
  animation: separatorFlow 6s linear infinite;
}

@keyframes separatorFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.separator.glow { box-shadow: 0 0 20px #00ffff; }
.separator.reverse { transform: scaleX(-1); }

/* ===== CONTENIDO PRINCIPAL ===== */
.content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 980px;
  padding: 2.5rem;
  background: rgba(13, 17, 23, 0.8);
  border-radius: 20px;
  border: 2px solid rgba(0, 255, 255, 0.35);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3),
              inset 0 0 20px rgba(88, 166, 255, 0.2);
  backdrop-filter: blur(15px);
  z-index: 1;
}

/* ===== AVATAR + EFECTOS ===== */
.avatar-container {
  position: relative;
  padding: 1.7rem;
  border-radius: 50%;
  background: rgba(88, 166, 255, 0.06);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  transition: transform 0.5s ease;
}

.avatar-container:hover {
  transform: scale(1.05);
}

.scanner {
  position: absolute;
  width: 130%;
  height: 130%;
  border-radius: 50%;
  border: 2px dashed rgba(0, 255, 255, 0.45);
  animation: rotateScanner 8s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.neon-circle {
  padding: 7px;
  border-radius: 50%;
  background: linear-gradient(140deg, #58a6ff, #00ffff, #9333ea);
  background-size: 300% 300%;
  animation: borderFlow 6s ease infinite;
}

.avatar {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #0d1117;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
  transition: all 0.5s ease;
}

@keyframes borderFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes rotateScanner {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.floating {
  animation: floating 4s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* ===== TEXTO ===== */
.text-box {
  max-width: 500px;
  color: #fff;
  z-index: 2;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #58a6ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #58a6ff;
  animation: neonGlow 2s ease-in-out infinite alternate;
}

@keyframes neonGlow {
  0% { text-shadow: 0 0 5px #00ffff, 0 0 15px #58a6ff; }
  100% { text-shadow: 0 0 20px #00ffff, 0 0 40px #58a6ff; }
}

.text-box p {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  opacity: 0;
  line-height: 1.6;
  transform: translateY(20px);
  animation: fadeUp 0.8s forwards;
}

.text-box p:nth-child(2) { animation-delay: 0.4s; }
.text-box p:nth-child(3) { animation-delay: 0.7s; }
.text-box p:nth-child(4) { animation-delay: 1s; }
.text-box p:nth-child(5) { animation-delay: 1.3s; }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ===== ANIMACIONES DE ENTRADA ===== */
.animate-left { opacity: 0; animation: slideLeft 1s forwards; }
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to   { opacity: 1; transform: translateX(0); }
}

.animate-right { opacity: 0; animation: slideRight 1s forwards 0.3s; }
@keyframes slideRight {
  from { opacity: 0; transform: translateX(50px); }
  to   { opacity: 1; transform: translateX(0); }
}

.animate-fade { opacity: 0; animation: fadeIn 1s forwards; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  .avatar { width: 170px; height: 170px; }
  .title { font-size: 2rem; }
}
</style>
