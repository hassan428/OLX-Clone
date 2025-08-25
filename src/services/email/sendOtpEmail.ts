import { OtpEmailSent } from "@/interfaces";
import { transporter } from "@/services/email/config";

const year = new Date().getFullYear();

export const sendOtpEmail = async ({ email, name, otp }: OtpEmailSent) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    // from: `"M.HASSAN " ${ADMIN_EMAIL}`, // sender address
    from: "Loyal Online Xchange", // sender address
    to: email, // list of receivers
    subject: `OTP Verification`, // Subject line
html: `<!DOCTYPE html>
<html lang="en" style="background:#ffffff;">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Account — LOX</title>

  <!-- Force light mode in supporting clients -->
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      background: #ffffff !important;
      color: #333333;
      -webkit-font-smoothing: antialiased;
    }

    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #ffffff !important;
      padding-bottom: 40px;
    }

    .main {
      background: #ffffff;
      margin: 0 auto;
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
    }

    .header img {
      width: 100%;
      max-width: 500px;
      height: auto;
      display: block;
      border: 0;
      outline: none;
    }

    .content {
      padding: 30px 25px;
    }

    h1 {
      font-size: 22px;
      margin: 0 0 15px;
      color: #111111;
    }

    p {
      margin: 0 0 15px;
      line-height: 1.6;
      font-size: 15px;
    }

    .otp-box {
      display: inline-block;
      background: #f4f4f4;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 4px;
      padding: 14px 24px;
      margin: 20px 0;
      color: #111111;
    }

    .footer {
      background: #29a847;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
    }

    .footer strong { color: #000000; }

    /* Mobile responsiveness */
    @media screen and (max-width: 600px) {
      .content { padding: 20px 15px; }
      h1 { font-size: 20px; }
      .otp-box { font-size: 22px; padding: 12px 20px; }
    }

    /* Dark mode override */
    @media (prefers-color-scheme: dark) {
      body, .wrapper, .main, .content { background:#ffffff !important; color:#111111 !important; }
      .footer { background:#f9f9f9 !important; color:#666666 !important; }
      img { filter:none !important; }
    }
  </style>
</head>

<body>
  <center class="wrapper">
    <table class="main" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td class="header">
          <img src="https://res.cloudinary.com/dmfng4izd/image/upload/v1756076110/lox_uploads/logo.png" alt="LOX Logo">
        </td>
      </tr>

      <tr>
        <td class="content">
          <h1>Verify your email</h1>
          <p>Hi ${name},</p>
          <p>Thanks for signing up at <strong>LOX — Loyal Online Xchange</strong>. To complete your registration, please use the following OTP:</p>

          <div class="otp-box">${otp}</div>

          <p>This code is valid for <strong>2 minutes</strong>. Please do not share this code with anyone for security reasons.</p>
          <p>If you didn’t request this, you can safely ignore this email.</p>
          <p>Welcome aboard and happy trading!</p>
        </td>
      </tr>

      <tr>
        <td class="footer">
          &copy; ${year} <strong>LOX — Loyal Online Xchange</strong>. All rights reserved.
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`
  });

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};