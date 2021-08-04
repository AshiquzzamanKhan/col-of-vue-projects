<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" id="" v-model="title" />
      <label for="description">Description:</label>
      <textarea name="description" id="" v-model="description" />
      <button>Edit Project</button>
    </form>
  </div>
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
  },
  data() {
    return {
      title: "",
      description: "",
      currProject: null
    };
  },
  mounted() {
    const p = this.projectList.filter(project => project.id === Number(this.id));
    this.title = p[0].title;
    this.description = p[0].description;
    [this.currProject] = p;
  },
  methods: {
    handleSubmit() {
      this.currProject.title = this.title;
      this.currProject.description = this.description;
      this.$emit("editproject", this.currProject);
    }
  }
};
</script>

<style lang="css" scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: flex;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
