<template>
 <v-content>
   <v-row>

  

   

    <v-card width="300" class="ml-12 mt-12 pb-12 lay pt-0 d-flex justify-content-space-between box-shadow" to="/userslist">
      <v-card-title>Users List</v-card-title>
      <div class="flex-grow-1"></div>
      <v-list-item-avatar width="90" height="90" tile class="mr-4 mt-n6 d-flex justify-space-around  float" color="blue">
        <v-icon class="icon">mdi-contacts</v-icon>
     </v-list-item-avatar>
    </v-card>


   </v-row>
 </v-content>
</template>
<style scoped>
.icon{
  font-size: 30px; 
  color: white;
}
.float{
  float: right;
}
.box-shadow:hover{
  box-shadow: 5px 10px 8px #888888;
}
 </style>