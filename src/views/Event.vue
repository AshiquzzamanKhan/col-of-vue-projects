<template>
  <div>
    <h1>The Event Id is : {{ title }}</h1>
    <span
      >Call the api with axios to get the event with id {{ title }} on the
      created lifecycle hook</span
    >
  </div>
</template>

<script>
export default {
  name: "Event",
  computed: {
    title() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>