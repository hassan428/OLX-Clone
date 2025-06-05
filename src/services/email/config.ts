import nodemailer from "nodemailer";
const { SERVICE_PASSWORD, ADMIN_EMAIL } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 465,
  service: "gmail",
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: ADMIN_EMAIL,
    pass: SERVICE_PASSWORD,
  },
});
