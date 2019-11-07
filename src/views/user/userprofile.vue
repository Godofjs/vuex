<template>
  <v-content class="mt-6">
    <span>
      <div class="ml-6  pt-2 pb-2">Surname: <span class="ml-2"> {{ currentUser.name }}</span></div>
      <v-divider></v-divider>
      <div class="ml-6 pt-2 pb-2">Gender: <span class="ml-2">{{ currentUser.gender }} </span></div>
      <v-divider></v-divider>
      <div class="ml-6  pt-2 pb-2">Gender: <span class="ml-2">{{ currentUser.email }} </span></div>
    </span>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Profile",
  data: () => {
    return {
      selectedFile: null
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {}
};
</script>
<style  scoped>

</style>