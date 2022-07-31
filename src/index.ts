import { Response } from "express";

export class BaseResponse {
  static run(res: Response, body: unknown, status: number) {
    const isBodyString = typeof body === "string";
    res.status(status).json({
      path: res.req.originalUrl,
      status,
      [isBodyString ? "message" : "data"]: body,
    });
  }
}

export class SuccessResponse extends BaseResponse {
  constructor(res: Response, body: unknown = "OK", status = 200) {
    super();
    BaseResponse.run(res, body, status);
  }
}

export class BadRequestException extends BaseResponse {
  constructor(res: Response, body: unknown = "Bad Request") {
    super();
    BaseResponse.run(res, body, 400);
  }
}

export class UnauthorizedException extends BaseResponse {
  constructor(res: Response, body: unknown = "Unauthorized Attempt") {
    super();
    BaseResponse.run(res, body, 401);
  }
}

export class ForbiddenException extends BaseResponse {
  constructor(res: Response, body: unknown = "Forbidden Attempt") {
    super();
    BaseResponse.run(res, body, 403);
  }
}

export class InternalServerErrorException extends BaseResponse {
  constructor(res: Response, body: unknown = "Internal Server Error") {
    super();
    BaseResponse.run(res, body, 500);
  }
}

export class NotFoundException extends BaseResponse {
  constructor(res: Response, body: unknown = "Not Found") {
    super();
    BaseResponse.run(res, body, 404);
  }
}
