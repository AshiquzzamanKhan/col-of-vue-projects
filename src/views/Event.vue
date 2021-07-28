<template>
  <div>
    <h1>The Event Id is : {{ id }}</h1>
    <span
      >Call the api with axios to get the event with id {{ id }} on the created
      lifecycle hook</span
    >
  </div>
</template>

<script>
export default {
  name: "Event",
  props: ["id"],
};
</script>

<style lang="scss" scoped>
</style>