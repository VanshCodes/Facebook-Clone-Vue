<template>
  <div class="p-col">
    <div class="p-d-flex flexitem">
      <Avatar icon="pi pi-user" class="p-mr-2" shape="circle" />
      <div class="content-name">Devon Lane</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pi {
  width: 100px;
}
.flexitem {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.content-name {
  margin-left: 5vw;
  /* margin-right: 30vw; */
  /* margin-t
   op: 5vw; */
}
.p-col {
  margin-bottom: 2vw;
}
</style>