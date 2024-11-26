import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUserController = async (req: Request, res: Response) => {
  const result = UserServices?.createUserService(req?.body);
  res.send(result);
};

export const UserControllers = {
  createUserController,
};
