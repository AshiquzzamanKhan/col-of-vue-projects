<template>
  <Appnav></Appnav>
  <router-view :projectList="projectList" />
</template>

<script>
import Appnav from "@/components/Appnav.vue";

export default {
  components: {
    Appnav
  },
  data() {
    return {
      projectList: [
        {
          id: 1,
          title: "Project 1",
          description: "Some description for project 1",
          ptype: "web",
          completed: false
        },
        {
          id: 2,
          title: "Project 2",
          description: "Some description for project 2",
          ptype: "games",
          completed: false
        },
        {
          id: 3,
          title: "Project 3",
          description: "Some description for project 3",
          ptype: "web",
          completed: false
        },
        {
          id: 4,
          title: "Project 4",
          description: "Some description for project 4",
          ptype: "client",
          completed: true
        }
      ]
    };
  }
};
</script>
<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
