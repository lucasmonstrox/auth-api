import { sign } from 'jsonwebtoken';
import { Jwt } from '@/domain/entities';
import { GenerateJwtService } from '@/domain/services';

// TODO: add input types
export const makeGenerateJwtService =
  ({
    secret,
    expiresIn,
  }: {
    secret: string;
    expiresIn: string;
  }): GenerateJwtService =>
  (sub: number): Jwt => {
    const accessToken = sign({ sub }, secret, { expiresIn });
    const jwt: Jwt = { accessToken };
    return jwt;
  };
