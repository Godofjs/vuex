<template>
  <v-content>
    <div class="chatroom">
      <div v-chat-scroll="{always: false , smooth: true}" class="messages">
        <div v-for="message in messages" :key="message.id">
          <div class="adminbox d-flex justify-start mt-2 pb-2 pt-2">
            <div class="author">{{message.name}}</div>
            <div class="message">{{message.message}}</div>
            <div class="time">{{message.time}}</div>
          </div>
        </div>
        <div v-for="message in messages" :key="message.id">
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
import createmessage from "@/components/createmessage.vue";
export default {
  name: "complaints",
  props: ["name"],
  components: {
    createmessage
  },
  computed: {
    ...mapState(["messages", "adminMessages"]),
    reload() {
      this.$store.dispatch("getMessages");
    }
  },
  created() {
    this.$store.dispatch("getMessages");
  },
  methods: {
    message() {}
  }
};
</script>

<style>
.messagebox {
  background-color: green;
  color: white;
  /* width: 60%; */
}
.adminbox{
  background-color: beige;
  width: 40%;
}
</style>