import jwt from "jsonwebtoken";
import * as crypto from "crypto";

// Generate a key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});

// sign jwt
export function signJWT(payload, expiresIn) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn });
}

// verify jwt
export function verifyJWT(token) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return { payload: decoded, expired: false };
  } catch (error) {
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
}
