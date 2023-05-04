import { compareSync } from 'bcryptjs';
import { ComparePasswordsService } from '@/domain/services';

export const makeComparePasswordsService =
  (): ComparePasswordsService =>
  (password: string, encryptedPassword: string): boolean => {
    const passwordsAreEqual = compareSync(password, encryptedPassword);
    return passwordsAreEqual;
  };
