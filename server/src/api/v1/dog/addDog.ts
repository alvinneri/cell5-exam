import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { Dog } from "../../../models/Dogs/Dog";
import ApiError from "../../../utils/error/ApiError";

const addDog = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { photo, name }: { photo: string; name: string } = request.body;
  const { user } = request;
  const { _id }: any = user;

  if (!photo) {
    return next(new ApiError("Photo is required", 400));
  }

  if (!name) {
    return next(new ApiError("Photo is required", 400));
  }

  try {
    if (!user && _.isNil(_id)) {
      return response.status(401).json({
        success: false,
        data: null,
        message: "Unauthorized",
      });
    }
    const dog = await Dog.create({
      name,
      photo,
      owner: _id,
    });

    return response.status(200).json({
      success: true,
      data: dog,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default addDog;
