<template>
  <footer class="main-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Mi Aplicación Vue. Todos los derechos reservados.</p>
      <div class="footer-links">
        <a href="#">Política de Privacidad</a>
        <a href="#">Términos de Servicio</a>
        <a href="#">Contáctanos</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      // Obtiene el año actual para mostrarlo dinámicamente
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
/* Estilos básicos para el footer */
.main-footer {
  background-color: #212529; /* Color de fondo oscuro */
  color: #f8f9fa; /* Color de texto claro */
  padding: 20px 0; /* Relleno vertical */
  text-align: center;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Sombra superior sutil */
}

.footer-content {
  max-width: 1200px; /* Ancho máximo del contenido */
  margin: 0 auto; /* Centrar el contenido */
  display: flex;
  justify-content: space-between; /* Espaciar el texto de copyright y los enlaces */
  align-items: center;
  padding: 0 20px;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */
}

.footer-links a {
  color: #adb5bd; /* Color de los enlaces */
  text-decoration: none; /* Quitar el subrayado por defecto */
  margin-left: 20px; /* Espacio entre enlaces */
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ffffff; /* Color de los enlaces al pasar el ratón */
  text-decoration: underline;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column; /* Apilar elementos */
  }

  .footer-links {
    margin-top: 15px;
  }

  .footer-links a {
    margin: 0 10px; /* Reducir el espacio entre enlaces */
  }
}
</style>