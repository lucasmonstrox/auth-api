import { Env } from '../types';

export const postgres: Env['postgres'] = {
  host: process.env.POSTGRES_HOST as string,
  port: process.env.POSTGRES_PORT as string,
  user: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  db: process.env.POSTGRES_DB as string,
};
