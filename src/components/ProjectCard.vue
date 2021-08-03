<template>
  <div class="project">
    <div class="actions">
      <h3 @click="showDesc = !showDesc">{{ project.title }}</h3>
      - <small>{{ project.ptype }}</small>
      <div class="icons">
        <span class="material-icons" @click="handleEdit(project.id)"> edit </span>
        <span class="material-icons" @click="handleDelete(project.id)"> delete </span>
        <span class="material-icons" @click="handleDone(project.id)"> done </span>
      </div>
    </div>
    <div v-if="showDesc" class="desc">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object
    }
  },
  data() {
    return {
      showDesc: false
    };
  },
  methods: {
    handleEdit(id) {
      console.log(id);
      this.$router.push({ name: "EditProject", params: { id } });
    },
    handleDelete(id) {
      console.log(id);
    },
    handleDone(id) {
      console.log(id);
    }
  }
};
</script>

<style lang="css" scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
small {
  font-size: 0.7em;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
