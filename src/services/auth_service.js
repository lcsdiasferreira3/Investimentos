import firebase from "firebase";

const authService = {
  async login(email, password) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async register(email, password) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export default authService;
