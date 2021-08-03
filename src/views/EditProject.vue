<template>
  <div>{{ id }}</div>
</template>

<script>
export default {
  name: "EditProject",
  props: {
    id: {
      type: String
    },
    projectList: {
      type: Array
    }
  }
};
</script>

<style lang="css" scoped></style>
