export const MailVerificationTemplate = (
    name: string,
    supportEmail: string,
    supportUrl: string,
    callbackUrl: string,
    appName: string,
    privacyPolicyUrl: string,
    termsOfUseUrl: string
) => `<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<meta charset="utf-8">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<!--[if mso]>
  <xml><o:officedocumentsettings><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml>
<![endif]-->
  <title>Verify Email Address</title>
  <link href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700" rel="stylesheet" media="screen">
  <style>
.hover-underline:hover {
text-decoration: underline !important;
}
@media (max-width: 600px) {
.sm-w-full {
  width: 100% !important;
}
.sm-px-24 {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
.sm-py-32 {
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}
.sm-leading-32 {
  line-height: 32px !important;
}
}
</style>
</head>
<body style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #eceff1;">
  <div style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; display: none;">Please verify your email address</div>
<div role="article" aria-roledescription="email" aria-label="Verify Email Address" lang="en" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
  <table style="width: 100%; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
    <tbody><tr>
      <td align="center" style="mso-line-height-rule: exactly; background-color: #eceff1; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
        <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
          <tbody><tr>
<td class="sm-py-32 sm-px-24" style="mso-line-height-rule: exactly; padding: 48px; text-align: center; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
  <a href="https://1.envato.market/vuexy_admin" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
    <img src="images/logo.png" width="155" alt="${appName}" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0;">
  </a>
</td>
</tr>
            <tr>
              <td align="center" class="sm-px-24" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly;">
                <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                  <tbody><tr>
                    <td class="sm-px-24" style="mso-line-height-rule: exactly; border-radius: 4px; background-color: #ffffff; padding: 48px; text-align: left; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 16px; line-height: 24px; color: #626262;">
                      <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin-bottom: 0; font-size: 20px; font-weight: 600;">Hey</p>
                      <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin-top: 0; font-size: 24px; font-weight: 700; color: #ff5850;">${name}!</p>
                      <p class="sm-leading-32" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 16px; font-size: 24px; font-weight: 600; color: #263238;">
                        Thanks for signing up! 👋
                      </p>
                      <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 24px;">
                        Please verify your email address by clicking the below button and join our creative community,
                        start exploring the resources or showcasing your work.
                      </p>
                      <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 24px;">
                        If you did not sign up to PixInvent, please ignore this email or contact us at
                        <a href="mailto:${supportEmail}" class="hover-underline" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #7367f0; text-decoration: none;">${supportEmail}</a>
                      </p>
                      <a href="${callbackUrl}" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin-bottom: 24px; display: block; font-size: 16px; line-height: 100%; color: #7367f0; text-decoration: none;">${callbackUrl}</a>
                      <table cellpadding="0" cellspacing="0" role="presentation">
                        <tbody><tr>
                          <td style="mso-line-height-rule: exactly; mso-padding-alt: 16px 24px; border-radius: 4px; background-color: #7367f0; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;">
                            <a href="${callbackUrl}" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; display: block; padding-left: 24px; padding-right: 24px; padding-top: 16px; padding-bottom: 16px; font-size: 16px; font-weight: 600; line-height: 100%; color: #ffffff; text-decoration: none;">Verify Email Now →</a>
                          </td>
                        </tr>
                      </tbody></table>
                      <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
<tbody><tr>
  <td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; padding-top: 32px; padding-bottom: 32px;">
    <div style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 1px; background-color: #eceff1; line-height: 1px;">‌</div>
  </td>
</tr>
</tbody></table>
<p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 16px;">
Not sure why you received this email? Please
<a href="${supportUrl}" class="hover-underline" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #7367f0; text-decoration: none;">let us know</a>.
</p>
<p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; margin: 0; margin-bottom: 16px;">Thanks, <br>The ${appName} Team</p>
                    </td>
                  </tr>
                  <tr>
<td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 20px;"></td>
</tr>
<tr>
<td style="mso-line-height-rule: exactly; padding-left: 48px; padding-right: 48px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; color: #eceff1;">
  <p style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #263238;">
    Use of our service and website is subject to our
    <a href="${termsOfUseUrl}" class="hover-underline" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #7367f0; text-decoration: none;">Terms of Use</a> and
    <a href="${privacyPolicyUrl}" class="hover-underline" style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; color: #7367f0; text-decoration: none;">Privacy Policy</a>.
  </p>
</td>
</tr>
<tr>
<td style="font-family: 'Montserrat', sans-serif; mso-line-height-rule: exactly; height: 16px;"></td>
</tr>
                </tbody></table>
              </td>
            </tr>
        </tbody></table>
      </td>
    </tr>
  </tbody></table>
</div>



</body></html>`
