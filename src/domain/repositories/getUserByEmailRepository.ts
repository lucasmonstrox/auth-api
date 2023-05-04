import { User } from '@/domain/entities';

export type GetUserByEmailRepository = (
  email: string
) => Promise<User | undefined>;
