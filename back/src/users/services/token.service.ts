import { Injectable } from '@nestjs/common';
import { sign, decode, verify } from 'jsonwebtoken';
import * as fs from 'fs';

const PRIVATE_KEY = fs.readFileSync('src/config/keys.key').toString();
@Injectable()
export class TokenService {
  signToken(payload) {
    if (payload.dataValues) {
      return sign(payload.dataValues, PRIVATE_KEY, { expiresIn: '1H' });
    } else {
      return sign(payload, PRIVATE_KEY, { expiresIn: '1H' });
    }
  }

  async verifyToken(token) {
    const result = await ((): Promise<any> => {
      let r;
      verify(token, PRIVATE_KEY, (err, res) => {
        if (err) {
          r = null;
        } else {
          r = res;
        }
      });
      return r;
    })();
    return result;
  }
  decodeToken(token): any | void {
    return decode(token);
  }
}
