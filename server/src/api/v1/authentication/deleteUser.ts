import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { Dog } from "../../../models/Dogs/Dog";
import { User } from "../../../models/User/User";
import ApiError from "../../../utils/error/ApiError";

const deleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { body } = request;

  try {
    const user = await User.deleteOne({ email: body.email });

    return response.status(200).json({
      success: true,
      data: user,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default deleteUser;
