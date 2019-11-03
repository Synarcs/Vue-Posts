import Axios from "axios";

class PostData {
  getMessage() {
    const dataUrl = "hello there connection";
    return dataUrl;
  }
  getData() {
    return Axios.get("https://jsonplaceholder.typicode.com/posts");
  }
  del(post) {
    return Axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
  }
  write(post) {
    if (post.id) {
      return Axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        post
      );
    }
    return Axios.post("https://jsonplaceholder.typicode.com/posts", post);
  }
}

export default PostData;
