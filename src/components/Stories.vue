<template>
  <span class="stories">
    <Story :key="index" :url="url" v-for="index in num" />
  </span>
</template>

<script>
import Story from "@/components/Story.vue";
import { ImageList } from "@/helper/var.helper";

export default {
  components: {
    Story,
  },
  data() {
    return { url: ImageList[0], num: Array(5) };
  },
};
</script>

<style>
.stories {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
}
</style>