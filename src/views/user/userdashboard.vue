<template>
  <v-content>
    <v-card height="180" width="400" class="mt-12 mx-auto pt-4">
      <v-card-title>Hey, {{ currentUser.name }} </v-card-title>
      <v-card-text class="">You are welcome to REPOSITORY user portal this is your dashboard</v-card-text>
    </v-card>
  </v-content>
</template>
<script>
 import { mapState } from "vuex";
 export default {
  name: "dashboard",
  data: () => {
    return {
    };
  },
  mounted() {
    },
    created() {
      this.$store.dispatch("getUserProfile")
    },
  computed: { 
    ...mapState(["currentUser"]),
    down() {
     console.log(this.$store.state.currentUser.name)
    }
  },
  methods: {
    
   }
 };
</script> 