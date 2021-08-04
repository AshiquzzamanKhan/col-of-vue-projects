<template>
  <Appnav></Appnav>
  <router-view
    :projectList="filtered"
    @addProject="addProject"
    @deleteProject="deleteProject"
    @completedProject="completedProject"
    @editproject="editProject"
  />
</template>

<script>
import Appnav from "@/components/Appnav.vue";

export default {
  components: {
    Appnav,
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
  },
  methods: {
    addProject(p) {
      this.projectList.push(p);
      this.$router.push({ name: "ProjectList" });
    },
    deleteProject(id) {
      this.projectList = this.projectList.filter(project => project.id !== id);
    },
    completedProject(id) {
      const project = this.projectList.filter(p => p.id === id);
      project[0].completed = !project[0].completed;
    },
    editProject(pobject) {
      this.$router.push({ name: "ProjectList" });
      this.projectList.[this.projectList.map((x, i) => [i, x]).filter(x => x[1] === this.projectList)[0][0]] = pobject;
      console.log(pobject);
    },
  },
  computed: {
    filtered() {
      return this.projectList;
    },

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
