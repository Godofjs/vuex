<template>
 <v-content>
  <v-card max-width="600" class="mx-auto background">
    <v-container class="mt-12 pl-12 pr-12 pt-6 pb-12">
      <v-form ref="form" action="submit" @submit="reg" v-model="valid">
        <v-text-field :rules="nameRules" label="Name" v-model="name" required></v-text-field>
        <v-text-field :rules="nameRules" label="Email" v-model="email" required></v-text-field>
        <v-autocomplete :items="gender" label="Gender" v-model="selectedGender" required></v-autocomplete>
        <v-text-field :rules="passRules" label="password" v-model="password" type="password" required ></v-text-field>
        <v-flex>
          <v-btn color="primary" :loading="loading" type="submit">register</v-btn>
        </v-flex>
      </v-form>
    </v-container>
  </v-card>
  </v-content>
</template>
<script>
import { auth } from "@/plugins/firebase/firebaseinit";
import { mapState } from "vuex";
export default {
  name: "register",
  data: () => {
    return {
      valid: false,
      nameRules: [v => !!v || "Name is required"],
      passRules: [v => !!v || "Password is required"],
      name: "",
      loading: false,
      email: "",
      selectedGender: "",
      password: "",
      gender: ["male", "female"]
    };
  },
  
  methods: {
    reg(e) {
      e.preventDefault();
      this.loading = !this.loading;
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          let vueApp = this; //because *this* is not available in the store
         
          this.$store.dispatch("createUserProfile", {
            //dispatch is used to activate actions. we are dispatching this values to the store actions
            vueApp,
            user: result.user
          });
           
        })
        // .catch(e => {
        //   this.loading = !this.loading;
        //    const Toast = this.$swal.mixin({
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     type: 'success',
        //     title: 'Signed in successfully'
        //   })
        //   Toast.fire({
        //     type: "error",
        //     title: e
        //   })
        // });
    }
  }
};
</script>
