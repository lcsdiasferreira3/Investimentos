const validationRegex = {
  passwordValidation(password) {
    const regexValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[!@#%&])(?=.*[A-Z]).{6,20}$/;
    if (regexValidation.test(password)) {
      return "";
    } else {
      return "Password must contain between 6 to 20 letters, with at least 1 uppercase letter, one lowercase letter, 1 number and one special character";
    }
  },
};

export default validationRegex;
