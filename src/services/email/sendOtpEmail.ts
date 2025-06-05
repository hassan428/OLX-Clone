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
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Account — LOX</title>
 <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: transparent;
    }

    .container {
      /* max-width: 600px; */
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 120px rgba(0,0,0,0.06);
    }

    .header {
      background-color: #efefef;
      text-align: center;
      padding-top: 5px;
    }

    .header img {
      width: 180px;
      height: auto;
    }

    .content {
      padding: 25px 30px;
    }

    .content h2 {
      margin-top: 0;
      color: #333;
    }

    .otp-box {
      display: inline-block;
      background-color: #f3f3f3;
      padding: 10px 18px;
      font-size: 24px;
      letter-spacing: 3px;
      border-radius: 6px;
      font-weight: bold;
      margin: 15px 0;
    }

    .footer {
      background-color: hsl(134 61% 41%);
      padding: 15px 20px;
      text-align: center;
      font-size: 0.80em;
      color: #efefef;
    }

    .footer strong {
      color: white;
    }

    @media (max-width: 600px) {
      .container {
        margin: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
 <img src="https://cautious-spork-pjr6wxxw5rwgc6jj-3000.app.github.dev/assets/images/logo/Loxdark.png" alt="LOX Logo"" />
    </div>

    <div class="content">
      <h2>Welcome to LOX — Loyal Online Xchange!</h2>
      <p>Hi ${name},</p>
      <p>Thanks for signing up on LOX. You’re just one step away from buying and selling your favorite products!</p>
      <p>Please enter the following OTP to verify your account:</p>

      <div class="otp-box">${otp}</div>

      <p>This code is valid for <strong>2 minutes</strong>. For your security, do not share this code with anyone.</p>
      <p>If you didn’t request this, you can safely ignore this email or rejoin with the correct details.</p>
      <p>Welcome aboard and happy trading!</p>
    </div>

    <div class="footer">
      &copy; ${year} <strong>LOX — Loyal Online Xchange</strong>. All Right Reserved.
    </div>
  </div>
</body>
</html>
`,
  });

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
