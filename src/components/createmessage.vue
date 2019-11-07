<template>
  <div class="mt-2">
    <p v-if="errortext">You have to send an actual message.</p>
    <v-form @submit="createmessage">
      <v-row class="text ml-6  mt-6 mb-n1">
        <v-textarea
          auto-grow
          filled
          name="messages"
          color="green"
          label="Type a message"
          rows="1"
          v-model="newmessages"
        ></v-textarea>
        <v-btn type="submit" class="ml-4 mr-2 mt-2 bn">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  name: "createmessage",
  props: ["name"],
  data() {
    return {
      newmessages: null,
      errortext: null
    };
  },
  methods: {
    createmessage(evt) {
      evt.preventDefault();
      if (this.newmessages) {
        const data = {
          id: this.$store.state.currentUser.userId,
          message: this.newmessages,
          name: this.$store.state.currentUser.lname,
          time: Date.now()
        };
        db.collection("messages")
          .doc()
          .set(data)
          .then(() => {
            this.newmessages == null;
            this.errortext == null;
          })
         
      } else {
        this.errortext = "You can only send an actual message";
      }
    }
  }
};
</script>
<style scoped>
  .text {
  position: absolute;
  width: 95%;
  bottom: 0px;
}
.bn {
  border-radius: 50px;
  background-color: green;
}
</style>