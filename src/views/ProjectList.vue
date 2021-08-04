<template>
  <div>
    <ProjectCard
      v-for="project in projectList"
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

export default {
  name: "ProjectList",
  components: {
    ProjectCard
  },
  props: {
    projectList: {
      type: Array
    }
  },
  methods: {
    deleteProject(id) {
      this.$emit("deleteProject", id);
    },
    completedProject(id) {
      this.$emit("completedProject", id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
