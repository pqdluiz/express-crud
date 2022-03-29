import { Request, Response } from "express";

export function UserController() {
  const get = (request: Request, response: Response) => {
    const user = request.body;
    return response.status(200).json(user);
  };

  const post = (request: Request, response: Response) => {
    const user = request.body;
    return response.status(200).json(user);
  };

  const put = (request: Request, response: Response) => {
    const user = request.body;
    return response.status(200).json(user);
  };

  const remove = (request: Request, response: Response) => {
    const user = request.body;
    return response.status(200).json(user);
  };

  return { get, post, put, remove };
}
