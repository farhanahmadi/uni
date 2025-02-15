//create random 5 digit number

export function OtpCreator() {
  return Math.floor(Math.random() * 90000) + 10000;
}

export function OtpExpiresIn() {
  return new Date(Date.now() + 2 * 60 * 1000);
}
