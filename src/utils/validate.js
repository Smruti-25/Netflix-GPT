export const checkValidEmail = (email) => {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
};

export const checkValidPassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

export const checkValidName = (name) => {
  return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
}