<template>
  <div>My name is {{ variables.name }} - {{ variables.age }}</div>
  <input type="text" name="" v-model="variables.name" />
  <button @click="handleClick">Update Age</button>
  <h1>Computed excercise</h1>
  <input type="text" name="" v-model="variables.search" />
  <p>Search term - {{ variables.search }}</p>
  <li v-for="n in names" :key="n">
    {{ n }}
  </li>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const variables = ref({
      name: "nadim",
      age: 35,
      search: "",
      listOfnames: ["mario", "luigi", "yoshi", "scattle", "mowgli"]
    });
    const handleClick = () => {
      variables.value.age += 1;
    };
    const names = computed(() =>
      variables.value.listOfnames.filter(n => n.includes(variables.value.search))
    );

    return { variables, handleClick, names };
  }
};
</script>

<style lang="scss" scoped></style>
