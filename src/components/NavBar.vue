<template>
  <Menubar :model="items">
    <template #start>
      <i class="fab fa-facebook fa-3x"></i>
    </template>
    <template #end>
      <span class="search-group">
        <InputText class="round-search mx-2" placeholder="Search" type="text" />
        <Button class="p-button-rounded p-button-success p-mr-2 p-mb-2">
          <span class="text-black"> Submit </span>
        </Button>
      </span>
      <span class="profile">
        <Button
          icon="pi pi-user text-black"
          class="p-button-rounded p-button-info"
        />
      </span>
    </template>
  </Menubar>
</template>


<script>
import { NavBarItems } from "@/helper/var.helper.js";
export default {
  data() {
    let items = NavBarItems;
    return { items };
  },
};
</script>

<style>
.fa-facebook {
  color: white;
  margin-right: 30vw;
}
.round-search {
  border-radius: 1.5rem !important;
}
.search-group {
  margin-right: 2vw;
}
@media only screen and (max-width: 400px) {
  .fa-facebook {
    margin-right: 10vw;
  }
  .search-group {
    display: none;
    /* width: 12vw; */
  }
}
</style>