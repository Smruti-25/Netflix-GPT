export const checkValidEmail = (email) => {
  const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  if(!isEmailValid) return "Email is not Valid"
  else return true;
};

export const checkValidPassword = (password) => {
  const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isPasswordValid) return "Invalid Password"
  else return true;
};