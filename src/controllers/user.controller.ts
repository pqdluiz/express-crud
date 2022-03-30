import { Request, Response } from "express";

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export function UserController() {
  const get = (
    request: Request<User>,
    response: Response<User>
  ): Response<User, Record<string, any>> => {
    const user = request.body;
    return response.status(200).json(user);
  };

  const post = (
    request: Request<User>,
    response: Response<User>
  ): Response<User, Record<string, any>> => {
    const user = request.body;
    return response.status(201).json(user);
  };

  const put = (
    request: Request<User>,
    response: Response<User>
  ): Response<User, Record<string, any>> => {
    const user = request.body;
    return response.status(204).json(user);
  };

  const remove = (
    request: Request<User>,
    response: Response<User>
  ): Response<User, Record<string, any>> => {
    const user = request.body;
    return response.status(201).json(user);
  };

  return { get, post, put, remove };
}
