import transport from './transport';

async function SendConfirmationMail(email: string) {
  await transport.sendMail({
    from: '"Araxis" <noreply@araxissystems.com>',
    to: email,
    subject: 'Thank you for contacting Araxis',
    text: 'Your submission has been received, our team is working on it.',
    html: `
      <div style="text-align: center; padding: 1rem;">
        <h1 style="color: #1b1a4e; font-family: sans-serif; font-size: 2.75rem; padding: 1rem 0;">Thank You!</h1>
        <div style="font-family: sans-serif; font-size: 1rem; color: #4d4d4d;">
          <p>
            Your submission has been received, our team is working on it.
          </p>
          <p>
            We strive to respond as soon as possible.
          </p>
          <p>For further queries, feel free to reach us at info@araxissystems.com</p>
        </div>
      </div>
    `
  });
}

export default SendConfirmationMail;
