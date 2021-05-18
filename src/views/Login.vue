<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1>Vuegram</h1>
        <p>
          Welcome to the
          <a href="https://savvyapps.com/" target="_blank">Savvy Apps</a> sample
          social media web app powered by Vue.js and Firebase. Build this
          project by checking out The Definitive Guide to Getting Started with
          Vue.js
        </p>
      </div>
      <div>{{ user ? user.displayName : null }}</div>
      <span class="" v-if="!user">
        <Button
          @click="login()"
          class="p-button-raised p-button-warning p-button-outlined p-button-rounded"
          id="signInwithgoogle"
          icon="fab fa-google googleIcon"
        />
      </span>
      <div class="col2"></div>
    </section>
  </div>
</template>
<script>
// import { useRouter, userRouter } from "vue-router";

import { auth, googleAuth } from "@/firebase/config.js";
import { mapMutations, mapState } from "vuex";
export default {
  computed: { ...mapState(["user"]) },
  methods: {
    ...mapMutations,
    login() {
      // console.log("auth", "googleAuth");
      auth.signInWithPopup(googleAuth).then((result) => {
        this.$store.commit("loginUser", result.user);
        //     // userRouter.replace("login")
      });
    },
  },
};
</script>
<style>
.googleIcon {
  width: clamp(10vw, 14vw, 16vw);
}
#signInwithgoogle {
  width: var(--icon-width);
  height: var(--icon-width);
}
</style>