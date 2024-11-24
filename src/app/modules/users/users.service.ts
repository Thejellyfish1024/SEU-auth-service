import config from '../../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generateUserId } from './users.utils';

const createUserService = async (user: IUser): Promise<IUser | null> => {
  // User id
  if (!user?.id) {
    user.id = await generateUserId(user?.role);
  }
  // default password
  if (!user?.password) {
    user.password = config.database_user_password as string;
  }
  const createUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create user');
  }
  return createUser;
};

export default {
  createUserService,
};
