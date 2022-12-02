import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { User, UserDocument } from "../../../models/User/User";
import ApiError from "../../../utils/error/ApiError";

const updateMe = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { user, body } = request;

  const { _id }: any = user;
  try {
    if (!user && _.isNil(_id)) {
      return response.status(401).json({
        success: false,
        data: null,
        message: "Unauthorized",
      });
    }

    const userDoc: UserDocument | null = await User.findOneAndUpdate(
      { _id },
      body,
      { new: true, runValidators: true }
    );

    return response.status(200).json({
      success: true,
      data: userDoc,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default updateMe;
