<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="title">Title:</label>
      <input type="text" name="title" id="" v-model="title" />
      <label for="ptype">Project type:</label>
      <select name="ptype" id="" v-model="ptypeselection">
        <option v-for="ptype in ptypes" :key="ptype" :value="ptype">{{ ptype }}</option>
      </select>
      <label for="description">Description:</label>
      <textarea name="description" id="" v-model="description" />
      <button>Add Project</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProject",
  props: {
    projectList: {
      type: Array
    }
  },
  data() {
    return {
      title: "",
      ptypeselection: "",
      description: ""
    };
  },
  computed: {
    ptypes() {
      return new Set(this.projectList.map(ptypes => ptypes.ptype));
    }
  },
  methods: {
    handleSubmit() {
      const p = {
        id: this.projectList.length + 1,
        title: this.title,
        ptype: this.ptypeselection,
        description: this.description,
        completed: false
      };
      console.log(p);
      this.$emit("addProject", p);
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
select {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
</style>
