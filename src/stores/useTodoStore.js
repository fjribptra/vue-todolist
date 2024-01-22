import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export function generateId() {
  return Math.random() * 1000
}

export const useTodoStore = defineStore('todo', () => {
  const previousTodo = () => {JSON.parse(localStorage.todoData)}
  let todoList = ref([])

  const get = computed(() => todoList)

  const updateTodo = () => localStorage.setItem('todoData', todoList)

  function timpaTodo(newTodo) {
      console.log(newTodo)
      todoList.value = newTodo
  }

  return { todoList, get, timpaTodo, updateTodo, previousTodo }
})
