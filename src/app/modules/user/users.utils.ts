import { IUser } from './user.interface';
import { User } from './user.model';

export const findLastUser = async (role: string): Promise<IUser | null> => {
  const lastUser = await User?.findOne({ role }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    ?.lean();
  return lastUser;
};

export const generateUserId = async (role: string): Promise<string> => {
  const lastUserId = await findLastUser(role);
  let currentUserId;
  if (!lastUserId) {
    currentUserId = `${new Date()?.getFullYear()}000000000`;
  } else {
    currentUserId = (parseInt(lastUserId?.id) + 1)?.toString();
  }
  return currentUserId;
};
