import "animate.css"; //testing a library

export default {
  data() {
    return {
      successLogin: false,
      loadingLogin: false,
      isAc: true,
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
  },
};
