import 'jest-expect-jwt'; // TODO: must be imported in the jest settings
import { faker } from '@faker-js/faker';
import { makeGenerateJwtService } from '@/adapters/jsonwebtoken/helpers';
import { jwt } from '@/main/env';
import { GenerateJwtService } from '@/domain/services';

type SutTypes = {
  sut: GenerateJwtService;
};

describe('generateJwtService', () => {
  const makeSut = (): SutTypes => {
    const sut = makeGenerateJwtService({
      secret: jwt.secret,
      expiresIn: jwt.expiresIn,
    });
    return { sut };
  };

  it('should return undefined when user was not found by email', () => {
    const sub = faker.datatype.number();
    const { expiresIn } = jwt;
    const { sut } = makeSut();
    const { accessToken } = sut(sub);
    expect(accessToken).toBeTokenMatching({ sub });
    expect(accessToken).toBeTokenExpiringIn(expiresIn);
  });
});
