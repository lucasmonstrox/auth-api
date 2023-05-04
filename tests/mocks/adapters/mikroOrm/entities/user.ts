import { Factory } from '@mikro-orm/seeder';
import { User } from '@/adapters/mikroOrm/entities';
import { makeUser } from '@/tests/mocks/domain/entities';

export class UserFactory extends Factory<User> {
  model = User;

  definition(): Partial<User> {
    return makeUser();
  }
}
