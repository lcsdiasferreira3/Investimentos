const validationRegex = {
  passwordValidation(password) {
    const regexValidation =
      /^(?=.*\d)(?=.*[a-z])(?=.*[!@#%&])(?=.*[A-Z]).{6,20}$/;
    if (regexValidation.test(password)) {
      return true;
    } else {
      return false;
    }
  },
};

export default validationRegex;
