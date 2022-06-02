import "animate.css"; //testing a library
import firebase from "firebase";

export default {
  data() {
    return {
      successLogin: false,
      loadingLogin: false,
      isAc: true,
      Password: "",
      email: "",
    };
  },

  methods: {
    handleClickFace() {
      this.loadingLogin = true;

      setTimeout(() => {
        this.loadingLogin = false;
        this.successLogin = !this.successLogin;
      }, 2000);
    },
    registerScreen() {
      setTimeout(() => {
        document.getElementById("card1").className = "cardLogin";
      }, 600);
      setTimeout(() => {
        document.getElementById("card2").className = "cardregister";
      }, 620);
    },

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.Password)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
