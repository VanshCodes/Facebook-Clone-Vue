<template>
  <div class="home">
    <div class="grid">
      <Messenger :classm="mess"> </Messenger>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Messenger from "@/components/Messenger/Messenger.vue";

export default {
  
  name: "Home",
  components: {
    Messenger,
  },
};
</script>
<style>
.grid {
  display: grid;
  grid-template-areas:
    "menu main main main right right"
    "menu footer footer footer footer footer";
}
</style>
