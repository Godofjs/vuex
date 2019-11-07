import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "@/plugins/firebase/firebaseinit";
Vue.use(Vuex);
auth.onAuthStateChanged(user => {
  //if user exists commit setscurrentUser else  null
  user
    ? (async () => {
      store.dispatch("getUserProfile", user.uid);
      store.dispatch("getMessages", user.uid);
      store.dispatch("getAdminMessages", user.uid);
    })()
    : null;
});
const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: null,
    usersCollection: [],
    messages: [],
    adminMessages: []
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setUsersCollection(state, val) {
      state.usersCollection = val;
    },
    setmessage(state, messages) {
      state.messages = messages
    },
    setAdminMessage(state, messages) {
      state.adminMessages = messages
    }
  },
  actions: {
    createUserProfile({ commit }, { vueApp, user }) {
      //the userss data
      const userData = {
        name: vueApp.name,
        gender: vueApp.selectedGender,
        email: vueApp.email,
        userId: user.uid
      };
      //adding to firestore collection creating the users collection
      db.collection("users")
        .doc()
        .set(userData) // passing the user data to firestore
        .then(() => {
          commit("setUserProfile", userData); //commiting user data to the store
          commit("setuserCollection", userData);
          vueApp.$router.push("/userdashboard");
        })
      .then(() => {
        const Toast = vueApp.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          type: "success",
          title: "Signed in successfully"
        });
        Toast.fire({
          type: "success",
          title: "Successfully logged in"
        });
      });
    },
    getUserProfile({ commit }, uid) {
      db.collection("users")
        .where("userId", "==", uid) //checking if the userid is equal to the user id in firestore
        .get()
        .then(query => {
          query.forEach(doc => {
            commit("setCurrentUser", doc.data());
          });
        });
    },
    getUserCollection({ commit }) {
      const userArr = [];
      db.collection("users").get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            userArr.push(doc.data())
            commit("setusersCollection", userArr)
          })
        })
    },
  
    //get messages from firestore
    async getMessages({ commit }) {
      const messages = [];
      let convoRef = db.collection("messages");
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setmessage', messages);
    },
    //get admin  messages from firestore
    async getAdminMessages({ commit }) {
      const messages = [];
      let convoRef = db.collection("adminmessages");
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setAdminMessage', messages);
    }

  }
});
export default store;
