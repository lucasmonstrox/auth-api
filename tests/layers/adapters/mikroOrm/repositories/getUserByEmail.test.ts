import { faker } from '@faker-js/faker';
import { makeMikroORM, MikroOrmDriver } from '@/adapters/mikroOrm';
import { makeGetUserByEmailRepository } from '@/adapters/mikroOrm/repositories';
import { GetUserByEmailRepository } from '@/domain/repositories';
import { UserFactory } from '@/tests/mocks/adapters/mikroOrm/entities';

type SutTypes = {
  sut: GetUserByEmailRepository;
};

describe('getUserByEmailRepository', () => {
  let mikroORM: MikroOrmDriver;

  const makeSut = (): SutTypes => {
    const sut = makeGetUserByEmailRepository(mikroORM);
    return { sut };
  };

  beforeEach(async () => {
    mikroORM = await makeMikroORM();
  });

  afterEach(async () => {
    await mikroORM.close();
  });

  it('should return undefined when user was not found by email', async () => {
    await new UserFactory(mikroORM.em).createOne();
    const { sut } = makeSut();
    const email = faker.internet.email();
    const result = await sut(email);
    expect(result).toBe(undefined);
  });

  it('should return User when user was found by email', async () => {
    const user = await new UserFactory(mikroORM.em).createOne();
    const { sut } = makeSut();
    const result = await sut(user.email);
    expect(result).toStrictEqual(user);
  });
});
