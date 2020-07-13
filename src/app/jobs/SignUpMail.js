import Mail from "../lib/Mail";

export default {
  key: "SignUpMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue node <mateus@queuetest.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuario",
      html: `Olá ${user.name} bem vindo a uma carreira brilhante na programação!`,
    });
  },
};
