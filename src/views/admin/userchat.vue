<template>
  <v-content>
    <div class="chatroom">
      <div v-chat-scroll="{always: false , smooth: true}" class="messages">
        <div v-for="message in messages" :key="message.id">
          <div class="messagebox d-flex justify-end mt-2 pb-2 pt-2">
            <div class="author">{{message.name}}</div>
            <div class="message">{{message.message}}</div>
            <div class="time">{{message.time}}</div>
          </div>
        </div>
        <div v-for="message in adminMessages" :key="message.time">
          <div class="messagebox d-flex justify-end mt-2 pb-2 pt-2">
            <div class="author">{{message.name}}</div>
            <div class="message">{{message.message}}</div>
            <div class="time">{{message.time}}</div>
          </div>
        </div>
      </div>
      <createmessage />
    </div>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import createmessage from "@/components/admincreatemessage.vue";
export default {
  name: "complaints",
  data() {
    return {
      adminsMessages: this.$store.dispatch("getAdminMessages"),
      userMessages: this.$store.dispatch("getMessages")
    }
  },
  props: ["name"],
  components: {
    createmessage
  },
  computed: {
    ...mapState([ 'adminMessages', 'messages']),
    reload() {
      return {
        adminsMessages,
        userMessages
      }
    }
  },
  created() {
    this.$store.dispatch("getAdminMessages");
    this.$store.dispatch("getMessages");
  },
  methods: {
  }
};
</script>

<style>
.chatroom {
  height: 80%;
}
.messages {
  max-height: 90%;
}
.messagebox {
  background-color: green;
  color: white;
}
</style>