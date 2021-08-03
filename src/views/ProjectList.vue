<template>
  <div>
    <ProjectCard v-for="project in projectList" :key="project.id" :project="project"> </ProjectCard>
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
  }
};
</script>

<style lang="scss" scoped></style>
