<template>
  <div id="nav">
    <router-link :to="{ name: 'ProjectList' }">Projects</router-link> |
    <router-link :to="{ name: 'AddProject' }">Add a New Project</router-link>
  </div>
</template>

<script>
export default {
  name: "Appnav"
};
</script>

<style lang="css" scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
