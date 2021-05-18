<template>
  <Card :class="'p-shadow-24 messenger' + classm">
    <!-- <h2>DONE</h2> -->
    <template #title>
      <div>Messenger</div>
    </template>

    <template #content>
      <main class="content scrollbar-hidden">
        <div class="p-grid p-flex-column content-card">
          <SmallMsgBox :key="index" v-for="(i, index) in num" />
        </div>
      </main>
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
  --height-messenger: 20vw;

  width: 20vw;
  height: var(--height-messenger);
}
.messenger {
  background-color: var(--primary-color-text);
  border-radius: 1rem; /* 15% 10% 10% 10% */
  box-shadow: 5px 5px 5px black;
}
.content {
  height: calc((70 / 100) * var(--height-messenger));
  overflow-y: scroll;
}
</style>