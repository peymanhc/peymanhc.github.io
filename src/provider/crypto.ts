import env from 'config/env';
import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
import encBase64 from 'crypto-js/enc-base64';

const key = 'function';
// eslint-disable-next-line
export default {
  encrypt: (content: any) =>
    env(
      () => {
        const keyParsed = encUtf8.parse(key);
        const iv = encBase64.parse(key);

        return AES.encrypt(content, keyParsed, { iv }).toString();
      },
      () => content
    ),
  decrypt: (encrypted: any) =>
    env(
      () => {
        const keyParsed = encUtf8.parse(key);
        const iv = encBase64.parse(key);
        const decrypted = AES.decrypt(
          //@ts-ignore
          { ciphertext: encBase64.parse(encrypted) },
          keyParsed,
          {
            iv,
          }
        );
        return encUtf8.stringify(decrypted);
      },
      () => encrypted
    ),
};
