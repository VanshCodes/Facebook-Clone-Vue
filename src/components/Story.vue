<template>
  <span class="story">
    <img class="story-image" :src="url" alt="" />
    <!-- <div class="centered">Centered</div> -->
  </span>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style>
.story {
  margin: 0;
  padding: 0;

  /* border: 0px; */
}
.story-image {
  border-radius: 3rem;
  filter: brightness(70%);
}
.centered {
  position: absolute;
  /* top: 1px; */
  /* left: 0px; */
  bottom: 3px;
}
</style>