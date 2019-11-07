<template>
  <v-app-bar app clipped-left color="green" class="mb-auto">
    <v-toolbar-title>REPOSITORY</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn to="/register" v-if="!currentUser">register</v-btn>
    <v-btn to="/admin" >Admin dashboard</v-btn>
  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "navbar",
  data: () => {
    return {
    };
  },  
  computed: {
      ...mapState(["currentUser"])
  },
  methods: {
   
  }
};
</script>
<style scoped>
.circle {
  border-radius: 50%;
  background-color: grey;
  width: 50px;
  height: 50px;
}
</style>