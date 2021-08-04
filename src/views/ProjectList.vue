<template>
  <Secondarynav @filterChange="current = $event" :current="current"></Secondarynav>
  <div>
    <ProjectCard
      v-for="project in filtered"
      :key="project.id"
      :project="project"
      @completedProject="completedProject"
      @deleteProject="deleteProject"
    >
    </ProjectCard>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import Secondarynav from "@/components/SecondaryNav.vue";

export default {
  name: "ProjectList",
  components: {
    ProjectCard,
    Secondarynav
  },
  props: {
    projectList: {
      type: Array
    }
  },
  data() {
    return {
      current: "all"
    };
  },
  methods: {
    deleteProject(id) {
      this.$emit("deleteProject", id);
    },
    completedProject(id) {
      this.$emit("completedProject", id);
    }
  },
  computed: {
    filtered() {
      if (this.current === "ongoing") {
        return this.projectList.filter(project => !project.completed);
      }
      if (this.current === "completed") {
        return this.projectList.filter(project => project.completed);
      }
      return this.projectList;
    }
  }
};
</script>

<style lang="scss" scoped></style>
