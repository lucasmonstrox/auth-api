import { Jwt } from '@/domain/entities';

export type GenerateJwtService = (userId: number) => Jwt;
