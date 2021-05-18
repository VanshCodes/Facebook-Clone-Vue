<template>
  <div class="home">
    <div class="grid">
      <Messenger />
      <Stories />
    </div>
  </div>
</template>

<script>
import Messenger from "@/components/Messenger/Messenger.vue";
import Stories from "@/components/Stories.vue";

import "@/CSS/Home.css";
export default {
  name: "Home",
  components: {
    Messenger,
    Stories,
  },
};
</script>
<style>
</style>
