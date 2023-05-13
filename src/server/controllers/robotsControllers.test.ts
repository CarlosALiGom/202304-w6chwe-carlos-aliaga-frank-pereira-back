import { type NextFunction, type Request, type Response } from "express";
import { getRobots } from "./robotsControllers";
import Robot from "../../database/models/Robot";
import robotsListMock from "../../mocks/robotsMock";

type CustomResponse = Pick<Response, "status" | "json">;

const next = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

const response: CustomResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe("Given a getRobots function controller", () => {
  const request = {};

  describe("When it receives a response", () => {
    Robot.find = jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(robotsListMock),
    });

    test("Then it should call the response method status with 200", async () => {
      const expectedStatusCode = 200;

      await getRobots(request as Request, response as Response, next);

      expect(response.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response method json with a list of robots", async () => {
      const expectedResponseBody = {
        robots: robotsListMock,
      };

      await getRobots(request as Request, response as Response, next);

      expect(response.json).toHaveBeenCalledWith(expectedResponseBody);
    });
  });

  describe("When it receives a next a function and the exec method rejects with an 'Endpoint not found' error", () => {
    test("Then it should call next function with error 'Endpoint not found'", async () => {
      const error = new Error("Endpoint not found");

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(error),
      });

      await getRobots(
        request as Request,
        response as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
