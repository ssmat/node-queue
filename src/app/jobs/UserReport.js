import Mail from "../lib/Mail";

export default {
  key: "UserReport",
  options: {
    delay: 5000,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue report <mateus@queuetest.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Report de usuário",
      html: `Olá ${user.name} aqui está seu relatório!`,
    });
  },
};
