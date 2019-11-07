<template>
 <v-content color="white"> 
          <v-expansion-panels>
    <v-expansion-panel
     v-for="user in usersCollection" :key="user.fname"
    >
      <v-expansion-panel-header>{{ user.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        
            <div>Gender:{{  user.gender }}</div>
            <div>Email: {{ user.email }} </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
 </v-content> 
</template>
<script>
 import { mapState } from "vuex";
import { METHODS } from 'http';
 export default {
     data: () => {
         return {
             show: false
         }
     },
     computed: {
         ...mapState(["usersCollection"]),  
     },
     beforeMount() {
          this.$store.dispatch("getuserCollection");
          },
          methods: {
           hide() {
               const hide = document.getElementsByClassName("hide");
               hide.style.display
            
           } 
          },
 }
</script>
<style>
    #personal{
        padding-left: 30px;
    }
    hr{
        color: hsv(0, 6%, 86%);
    }
    .hide{
      display: none;
    }
</style>