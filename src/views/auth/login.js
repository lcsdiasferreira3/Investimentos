// import validation from "../../util/validation";
import "./login.css";

export default {
  data() {
    return {
      // Login Screen // =================

      // Login btn //
      emailLogin: "",
      passwordLogin: "",
      successLogin1: false,
      handleClickLogin1: false,
      loadingLogin1: false,

      // Register btn //
      successLogin2: false,
      handleClickLogin2: false,
      loadingLogin2: false,

      // Register Screen // =================

      // Login btn //
      emailRegister: "",
      passwordRegister: "",
      passwordRegisterConfirm: "",
      successRegister1: false,
      handleRegister1: false,
      loadingRegister1: false,

      // Register btn //

      successRegister2: false,
      handleRegister2: false,
      loadingRegister2: false,
      //=====================================//

      error: "",
      rulesFrom: [(v) => !!v || "Field Required"],
      show1: false,
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
      if (this.$refs.login.validate()) {
        this.$store
          .dispacth("login", {
            email: this.emailLogin,
            password: this.passwordLogin,
          })
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            this.error = err;
          });
      }
    },
    register() {
      //if (!this.error && validation.passwordValidation(this.passwordLogin))
      //  this.error = "Password ";
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(
      //     this.emailRegister,
      //     this.passwordRegister
      //   )
      //   .then((resp) => {
      //     console.log(resp);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
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
