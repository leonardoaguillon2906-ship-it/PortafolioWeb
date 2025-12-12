<template>
  <div class="crud-wrapper">
    <h1>Panel CRUD</h1>

    <form @submit.prevent="addItem" class="form">
      <input v-model="newItem" placeholder="Nuevo elemento" class="input">
      <button class="btn primary">Agregar</button>
    </form>

    <ul class="list">
      <li v-for="(item, index) in items" :key="index" class="list-item">
        {{ item }}
        <button class="btn danger" @click="removeItem(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(["Elemento A", "Elemento B"])
const newItem = ref('')

function addItem() {
  if (!newItem.value.trim()) return
  items.value.push(newItem.value)
  newItem.value = ''
}

function removeItem(index) {
  items.value.splice(index, 1)
}
</script>

<style scoped>
.crud-wrapper {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
.btn.danger {
  background: #dc2626;
  color: white;
  margin-left: 12px;
  padding: 6px 12px;
  border-radius: 8px;
}
.list-item {
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
