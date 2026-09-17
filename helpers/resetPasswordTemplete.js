const resetPasswordTemplate = (userName,resetLink,token,expiryTime)=>{
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Reset Your Password</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8; padding:20px 0;">
    <tr>
      <td align="center">
        
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; border-radius:8px; padding:40px 30px;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h2 style="margin:0; color:#8C236D;">Reset Your Password</h2>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="color:#555555; font-size:16px; line-height:24px; padding-bottom:20px;">
              Hello <strong>${userName}</strong>,<br><br>
              We received a request to reset your password. Click the button below to set a new password.
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding:20px 0;">
              <a href="${resetLink}" 
                 style="background-color:#610D2C; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:6px; font-size:16px; display:inline-block;">
                 Reset Password
              </a>
            </td>
          </tr>

          <!-- Token Section -->
          <tr>
            <td style="color:#555555; font-size:14px; line-height:22px; padding-top:20px;">
              Or copy and paste this token into the reset page:
              <div style="margin-top:10px; padding:12px; background:#f1f5f9; border-radius:6px; font-family:monospace; font-size:14px; word-break:break-all;">
                ${token}
              </div>
            </td>
          </tr>

          <!-- Expiry Notice -->
          <tr>
            <td style="color:#888888; font-size:13px; padding-top:20px;">
              This link and token will expire in ${expiryTime}.
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="color:#999999; font-size:12px; padding-top:30px; border-top:1px solid #eeeeee;">
              If you did not request a password reset, please ignore this email. Your password will remain unchanged.
              <br><br>
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
module.exports = resetPasswordTemplate