import { faker } from "@faker-js/faker";
import supertest from "supertest";

import { User, UserController } from "../controllers/user.controller";

const user: User = {
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const userController = UserController();

describe("UserController", () => {
  test("(GET)", () => {
    const data = supertest(userController.get).get("/");
    expect(data.send(user)).toBeDefined();
  });

  test("(PUT)", () => {
    const data = supertest(userController.put).put("/:id");
    expect(data.send(user)).toBeDefined();
  });

  test("(POST)", () => {
    const data = supertest(userController.post).post("/");
    expect(data.send(user)).toBeDefined();
  });

  test("(DELETE)", () => {
    const data = supertest(userController.remove).delete("/:id");
    expect(data.send(user)).toBeDefined();
  });
});
