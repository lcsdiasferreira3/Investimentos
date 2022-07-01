import validation from "../../util/validation";
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

      // Register btn //
      emailRegister: "",
      passwordRegister: "",
      passwordRegisterConfirm: "",
      successRegister1: false,
      handleRegister1: false,
      loadingRegister1: false,
      success: false,

      // Login btn //

      successRegister2: false,
      handleRegister2: false,
      loadingRegister2: false,
      //=====================================//

      error: "",
      rulesFrom: [(v) => !!v || "Field Required"],
      show1: false,
      show2: false,
      show3: false,
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
        this.loadingLogin1 = true;
        this.$store
          .dispatch("login", {
            email: this.emailLogin,
            password: this.passwordLogin,
          })
          .then(() => {
            this.loadingLogin1 = false;
            this.$router.push({ name: "dashboard" });
          })
          .catch((err) => {
            this.error = err;
            this.loadingLogin1 = false;
          });
      }
    },
    errorAlert() {
      this.error = "";
    },
    errorSuccess() {
      this.success = "";
    },
    register() {
      if (this.$refs.register.validate()) {
        this.loadingRegister2 = true;
        this.error = "";
        if (validation.passwordValidation(this.passwordRegister))
          this.error = validation.passwordValidation(this.passwordRegister);
        if (this.passwordRegister !== this.passwordRegisterConfirm)
          this.error = "Passwords are not the same";
        if (!this.error) {
          this.$store
            .dispatch("register", {
              email: this.emailRegister,
              password: this.passwordRegister,
            })
            .then(() => {
              this.loadingRegister2 = false;
              this.success = "New account created. Thank you!";
              setTimeout(() => this.backToLogin(), 1500);
              this.$refs.register.reset();
            })
            .catch((err) => {
              this.loadingRegister2 = false;
              this.error = err.message;
            });
        }
        this.loadingRegister2 = false;
      }
    },
    backToLogin() {
      setTimeout(() => {
        document.getElementById("card2").className = "cardregister2";
      }, 620);
      setTimeout(() => {
        document.getElementById("card1").className = "cardLogin2";
      }, 600);
      setTimeout(() => (this.success = ""), 700);
    },
  },
};
