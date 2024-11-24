import { Request, Response } from 'express';
import usersService from './users.service';

const createUserController = async (req: Request, res: Response) => {
  const result = usersService?.createUserService(req?.body);
  res.send(result);
};

export default {
  createUserController,
};
