import { Env } from '../types';

export const jwt: Env['jwt'] = {
  secret: process.env.JWT_SECRET as string,
  expiresIn: process.env.JWT_EXPIRES_IN as string,
};
