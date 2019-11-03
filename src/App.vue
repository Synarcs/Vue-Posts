<template>
  <div class="containers">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// root level component
// in react the dom root component uses react-dom render as life cycle  and dom elements
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
