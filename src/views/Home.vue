<template>
  <div class="container">
    <div class="form-component container">
      <div class="row">
        <div class="col-md-6">
          <Form @addData="adder" />
        </div>
        <div class="col-md-6">
          <EditForm @channgecolor="color" />
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 col-sm-4 mt-2"
        v-for="(post,index) in posts"
        v-bind:item="post"
        :index="index"
        :key="post.id"
      >
        <div class="card">
          <span class="card-header text-warning">{{post.id}}</span>
          <div class="card-body">
            <p class="card-body">{{post.title}}</p>
            <div class="card-actions">
              <div class="btn btn-danger" @click="deleteVal(post)">Delete</div>
              <div class="btn btn-info ml-2" @click="editVal">Change</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostData from "./controller/data";
import Form from "../components/Form";
import EditForm from "../components/EditForm";

// object of data
const posts = new PostData();

export default {
  name: "Home",
  components: {
    Form,
    EditForm
  },
  data() {
    return {
      message: "",
      posts: []
    };
  },
  created() {
    // mount component
    let str = posts.getData();
    posts
      .getData()
      .then(userData => {
        this.posts = userData.data;
      })
      .catch(err => {
        console.log(err);
      });
    this.message = str;
  },
  methods: {
    adder(newPost) {
      console.log("added");
      this.posts.unshift(newPost);
    },
    deleteVal(id) {
      console.log(id.id);
      posts
        .del(id)
        .then(val => {
          console.log(val.data);
          this.posts = this.posts.filter(make => {
            return make.id != id.id;
          });
        })
        .catch(err => {
          console.log(err);
        });
      //
    },
    editVal() {
      console.log("11");
    },
    color(cols) {
      console.log(cols);
      // map is a boolean based the check on each ele in arr
      this.posts.forEach(val => {
        if (val.title === cols.content) {
          val.title = cols.val;
        }
      });
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 3px 4px rgba(0, 0, 0, 0.3);
  transition: all 2s ease-in-out;
}
.card:hover {
  transform: scale(1);
}
.card-header {
  background-color: chocolate;
}
</style>