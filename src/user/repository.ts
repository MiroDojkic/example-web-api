import { IContainer } from 'bottlejs';
import User from './model';

function UserRepository({ dbProvider }: IContainer) {
  return dbProvider.em.getRepository(User);
}

export default UserRepository;
