<template>
  <div>
    <Form v-on:submit.prevent="submit" class="form-group">
      <div class="form-label">Details for Edit ...</div>
      <input type="text" v-model="content" class="form-control" />
      <button type="submit" class="btn btn-info btn-block">Edit Data</button>
    </Form>
  </div>
</template>

<script >
// import PostData from "../views/controller/data";
// const posts = new PostData();
export default {
  name: "Edit",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit() {
      this.$emit("channgecolor", this.content);
      // edit background
    }
  }
};
</script>

<style lang="stylus" scoped></style>