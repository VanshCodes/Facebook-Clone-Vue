<template>
  <NavBar />
  <router-view />
</template>
<script>
import { useStore } from "vuex";
import { auth } from "@/firebase/config";
import NavBar from "@/components/NavBar.vue";
export default {
  setup() {
    const store = useStore();
    console.log("Store", store);

    auth.onAuthStateChanged((user) => {
      if (user) {
        store.commit("loginUser", user);
      }
    });
  },
  components: { NavBar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
