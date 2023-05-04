import { Env } from '../types';

export const app: Env['app'] = {
  currentWorkingDirectory: process.cwd(),
  isDevelopment: (process.env.NODE_ENV as string) === 'development',
  isProduction: (process.env.NODE_ENV as string) === 'production',
  port: +(process.env.APP_PORT as string),
};
