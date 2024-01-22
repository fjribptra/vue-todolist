<script setup>
import { useTodoStore, generateId } from "@/stores/useTodoStore.js";
import { ref } from "vue";

const lists = useTodoStore();
const lts = lists.get;

const formData = ref({
  id: generateId(),
  todo: "",
  isDone: false,
});

function check(IDparams) {
  const thisList = lists.todoList.filter((result) => result.id == IDparams);
  thisList[0].isDone = !thisList[0].isDone;
  console.log(thisList);
}

function addTodo() {
  if (formData.value.todo === "") return
  console.log("ok", formData.value);
  lists.todoList.push({ ...formData.value });
  lists.updateTodo()
//   console.log(lists.previousTodo())
  formData.value = { id: generateId(), todo: "", isDone: false };
}

function deleteTodo(ID) {
  console.log("deleted ", ID);
  const newArray = lists.todoList.filter((result) => result.id != ID);
  lists.timpaTodo(newArray);
}
</script>

<template>
  <div class="flex flex-col items-center gap-5 p-3 min-h-screen">
    <h1 class="font-bold text-2xl">This is TodoList Page</h1>
    <div>
      <form @submit.prevent="addTodo()" class="flex gap-2 justify-center items-center">
        <input type="text" v-model="formData.todo" class="px-3 py-1 border-2 border-black" />
        <button type="submit" class="px-4 py-1.5 rounded-sm bg-blue-700 text-white">Add</button>
      </form>
    </div>
    <div v-for="(list) in lts">
      <div class="flex gap-3 justify-between items-center border-2 border-green-400 py-3 px-5 rounded-md w-[350px] max-w-[500px]">
        <div class=" max-w-[50%]">
            <p class="todo-text" :class="{ 'line-through': list.isDone }">{{ list.todo }}</p>
        </div>
        <div class="flex justify-center items-center gap-2">
          <button @click="deleteTodo(list.id)" class="bg-red-500 text-white px-3 py-1">Delete</button>
          <button @click="check(list.id)" class="bg-green-400 text-white px-3 py-1">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .todo-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
