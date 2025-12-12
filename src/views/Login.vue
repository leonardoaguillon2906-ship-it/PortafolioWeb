<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h1 class="title">Iniciar sesión</h1>

      <form @submit.prevent="onSubmit" class="form">
        <div class="form-group">
          <label>Email</label>
          <input 
            type="email" 
            v-model="email" 
            required
            placeholder="tuemail@ejemplo.com"
            class="input"
          >
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <input 
            type="password" 
            v-model="password" 
            required
            placeholder="********"
            class="input"
          >
        </div>

        <button class="btn primary" type="submit" :disabled="loading">
          <span v-if="loading">Accediendo...</span>
          <span v-else>Acceder</span>
        </button>

        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/authService'   // Importar servicio

const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

async function onSubmit() {
  errorMessage.value = ''
  loading.value = true

  try {
    const result = await login(email.value, password.value)
    console.log("Usuario autenticado:", result)

    router.push('/crud')

  } catch (err) {
    errorMessage.value = err.message
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff, #f0f9ff);
  padding: 20px;
}

.login-card {
  background: white;
  padding: 45px;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.6s ease;
}

.title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.form-group {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.95rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
}

.input {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  transition: border 0.25s ease, box-shadow 0.25s ease;
  background: #f9fafb;
}

.input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  outline: none;
  background: white;
}

.btn.primary {
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background: #6366f1;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.05rem;
  transition: background 0.25s ease, transform 0.1s ease;
}

.btn.primary:hover:not(:disabled) {
  background: #4f46e5;
  transform: translateY(-2px);
}

.btn.primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  margin-top: 18px;
  color: #dc2626;
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
