import firebase from "firebase";

const authService = {
  async login(email, password) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

export default authService;
