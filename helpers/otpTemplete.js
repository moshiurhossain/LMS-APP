const otpTemplate = (userName, otp, expiryTime) => {
    return`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Your OTP Code</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8; padding:20px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:8px; padding:40px 30px;">

          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h2 style="margin:0; color:#333333;">Your Verification Code</h2>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="color:#555555; font-size:16px; line-height:24px; padding-bottom:20px;">
              Hello <strong>${userName}</strong>,<br><br>
              Use the following One-Time Password (OTP) to complete your verification process:
            </td>
          </tr>

          <!-- OTP Box -->
          <tr>
            <td align="center" style="padding:20px 0;">
              <div style="display:inline-block; padding:16px 30px; background:#2563eb; color:#ffffff; font-size:28px; letter-spacing:6px; border-radius:8px; font-weight:bold;">
                ${otp}
              </div>
            </td>
          </tr>

          <!-- Expiry -->
          <tr>
            <td style="color:#777777; font-size:14px; text-align:center;">
              This code will expire in ${expiryTime}.
            </td>
          </tr>

          <!-- Info -->
          <tr>
            <td style="color:#555555; font-size:14px; line-height:22px; padding-top:25px;">
              If you did not request this code, please ignore this email or contact support if you have concerns.
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="color:#999999; font-size:12px; padding-top:30px; border-top:1px solid #eeeeee; text-align:center;">
              © 2026 Your Company. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
}
module.exports =  otpTemplate 