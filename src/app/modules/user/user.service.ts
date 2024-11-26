import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

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

export const UserServices = {
  createUserService,
};
