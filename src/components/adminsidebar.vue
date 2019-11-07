<template>
  <v-navigation-drawer
    dark
    app
    mobile-break-point="50"
    width="260"
    :mini-variant.sync="mini"
    v-model="drawer"
  >
    <v-list>
      <v-list-item @click.stop="mini = !mini">
        <v-icon>mdi-dots-vertical</v-icon>

        <v-list-item-title>Show/Hide</v-list-item-title>
      </v-list-item>
      <v-list-item to="/admin">
        <v-list-item-action class="d-flex">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/userchat">
        <v-list-item-action>
          <v-icon>mdi-chat</v-icon>
        </v-list-item-action>
        <v-list-item-content>Parent Chat</v-list-item-content>
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
  name: "Sidebar",
  data() {
    return {
      mini: true,
      drawer: true
    };
  },
  methods: {
    logOut() {
      auth.signOut().then(() => {
        this.$router.push("/register");
      });
    }
  }
};
</script> 