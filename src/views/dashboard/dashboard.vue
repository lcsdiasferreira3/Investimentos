<template>
  <div>
    <BaseNavBar></BaseNavBar>
    <v-btn class="mt-10" @click="teste()">asddsads</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    teste() {
      var user = firebase.auth().currentUser;
      console.log(user);
    },
  },
};
</script>
