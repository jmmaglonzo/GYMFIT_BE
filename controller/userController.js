import UserModel from "../model/userModel.js";
export const loginUser = async (req, res) => {
  res.status(200).json({
    message: "Login User",
  });
};

export const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.signup(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
