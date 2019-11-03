<template>
  <div class="card-content">
    <!-- modifiers on the method -->
    <form v-if="!loading" class="form-group" v-on:submit.prevent="submit">
      <div class="form-label">ID forn the Post</div>
      <input type="text" class="form-control" v-model="id" />
      <div class="form-label">Title for Post</div>
      <input type="text" class="form-control" v-model="title" />
      <button type="submit" class="btn btn-warning mt-2 btn-block">Submit</button>
    </form>
  </div>
</template>

<script >
import PostData from "../views/controller/data";
const posts = new PostData();
export default {
  name: "Form",
  data() {
    return {
      loading: false,
      title: ""
    };
  },
  methods: {
    submit() {
      this.loading = true;
      const pol = {
        make: this.id,
        title: this.title
      };
      posts
        .write(pol)
        .then(mess => {
          this.loading = false;
          this.$emit("addData", mess.data);
          //pass props to parent
          console.log(mess.data);
          //   doing basic thing with core js js it works dont have a paid api auth token so
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style  scoped>
.card-content {
  background: #ffffff;
}
</style>