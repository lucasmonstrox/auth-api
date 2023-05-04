import { Jwt, User } from '@/domain/entities';
import { EmailNotFoundError, WrongPasswordError } from '@/domain/errors';
import { GetUserByEmailRepository } from '@/domain/repositories';
import { ComparePasswordsService, GenerateJwtService } from '@/domain/services';

export type Deps = {
  comparePasswordsService: ComparePasswordsService;
  generateJwtService: GenerateJwtService;
  getUserByEmailRepository: GetUserByEmailRepository;
};
export type Input = Pick<User, 'email' | 'password'>;
export type Output = Promise<Jwt>;
export type UseCase = (input: Input) => Output;

export const makeLoginUseCase =
  ({
    comparePasswordsService,
    generateJwtService,
    getUserByEmailRepository,
  }: Deps): UseCase =>
  async (input: Input): Output => {
    const user = await getUserByEmailRepository(input.email);
    const userWasNotFoundByEmail = !user;
    if (userWasNotFoundByEmail) {
      throw new EmailNotFoundError(input.email);
    }
    const wrongPassword = !comparePasswordsService(
      input.password,
      user.password
    );
    if (wrongPassword) {
      throw new WrongPasswordError();
    }
    const jwt = generateJwtService(user.id);
    return jwt;
  };
