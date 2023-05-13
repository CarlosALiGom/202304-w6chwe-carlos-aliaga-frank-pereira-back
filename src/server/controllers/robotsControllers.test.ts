import { type Request, type Response } from "express";
import { getRobots } from "./robotsControllers";
import Robot from "../../database/models/Robot";
import robotsListMock from "../../mocks/robotsMock";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a getRobots function controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call the response method status with 200", async () => {
      const expectedStatusCode = 200;
      const next = jest.fn();

      const request = {};
      const response: Pick<Response, "status"> = {
        status: jest.fn(),
      };

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsListMock),
      });

      await getRobots(request as Request, response as Response, next);

      expect(response.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
