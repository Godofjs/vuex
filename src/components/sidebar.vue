<template>
  <v-navigation-drawer app clipped 
    mobile-break-point="50"
    width="260"
    :mini-variant.sync="mini"
    v-model="drawer">
      <v-list >
        <v-list-item @click.stop="mini = !mini">
             <v-icon>mdi-dots-vertical</v-icon>
          <v-list-item-title>Show/Hide</v-list-item-title>
      </v-list-item>
       <v-list-item to="/userdashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='/userprofile'>
        <v-list-item-action >
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>Profile</v-list-item-content>
      </v-list-item>
      <v-list-item to="/complaints">
        <v-list-item-action>
          <v-icon>mdi-chat</v-icon>
        </v-list-item-action>
        <v-list-item-content>Suggestions and Complaints</v-list-item-content>
      </v-list-item>
      <v-list-item @click="logOut">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>Log Out</v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template> 

<script>
 import { auth } from "../plugins/firebase/firebaseinit";
export default {
 name: 'Sidebar',
 data() {
return {
  mini: true,
  drawer: true
}
 },
 methods: {
 logOut() {
  auth.signOut().then(() => {
    this.$router.push('/register');
  })
 }
 }
  
};
</script> 