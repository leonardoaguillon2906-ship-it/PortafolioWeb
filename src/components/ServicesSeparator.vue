<template>
  <!-- Este id es el que usará el navbar -->
  <section id="servicios" class="services-separator">
    <div class="separator-content">
      <span class="line"></span>
      <h2>Servicios</h2>
      <span class="line"></span>
    </div>

    <p class="subtitle">
      Descubre todo lo que podemos hacer por tu proyecto
    </p>

    <div class="arrow">
      ⌄
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSeparator",
};
</script>

<style scoped>
.services-separator {
  color: #e8e8e8;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.separator-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.separator-content h2 {
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: #1da1f2;
}

.line {
  width: 60px;
  height: 2px;
  background: #1da1f2;
  box-shadow: 0 0 10px #1da1f2;
}

.subtitle {
  margin-top: 1.5rem;
  color: #cfcfcf;
  font-size: 1.1rem;
}

.arrow {
  margin-top: 2rem;
  font-size: 2rem;
  color: #1da1f2;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(10px);
  }
}
</style>
