import "./login.css";
import "animate.css"; //testing a library
import firebase from "firebase";

export default {
  data() {
    return {
      // Login Screen

      emailLogin: "",
      nameRegis: "",
      successLogin: false,
      handleClickLogin: false,
      loadingLogin: false,

      // Register //
      successLoginRegister: false,
      handleClickRegister: false,
      loadingLoginRegister: false,

      //Register Screen

      isAc: true,
      passwordLogin: "",

      emailRegis: "",
      passRegis: "",
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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.Password)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    backToLogin() {
      setTimeout(() => {
        document.getElementById("card2").className = "cardregister2";
      }, 620);
      setTimeout(() => {
        document.getElementById("card1").className = "cardLogin2";
      }, 600);
    },
  },
};
