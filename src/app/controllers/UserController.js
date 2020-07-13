import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Add SignUpMail na fila
    await Queue.add("SignUpMail", { user });
    await Queue.add("UserReport", { user });

    return res.json(user);
  },
};
