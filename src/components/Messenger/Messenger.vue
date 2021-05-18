<template>
  <Card :class="'p-shadow-24 messenger' + classm">
    <!-- <h2>DONE</h2> -->
    <template #title>
      <div>Messenger</div>
    </template>

    <template #content>
      <div class="p-grid p-flex-column">
        <SmallMsgBox :key="index" v-for="(i, index) in num" />
      </div>
    </template>
  </Card>
</template>

<script>
import SmallMsgBox from "@/components/Messenger/SmallMsgBox.vue";

export default {
  props: { classm: { type: String, default: "" } },
  components: {
    SmallMsgBox,
  },
  data() {
    return { num: new Array(45) };
  },
};
</script>

<style scoped>
.p-card {
  width: 20vw;
  height: 30vw;
  overflow-y: scroll;
}
.messenger {
  background-color: var(--primary-color-text);
  border-radius: 15% 10% 10% 10%;
  box-shadow: 5px 5px 5px black;
}
</style>