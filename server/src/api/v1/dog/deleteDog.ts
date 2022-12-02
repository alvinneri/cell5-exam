import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { Dog } from "../../../models/Dogs/Dog";
import ApiError from "../../../utils/error/ApiError";

const updateDog = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { params, user } = request;
  const { _id }: any = user;
  const dogId = params.dogId;

  try {
    if (!user && _.isNil(_id)) {
      return response.status(401).json({
        success: false,
        data: null,
        message: "Unauthorized",
      });
    }

    await Dog.findOneAndDelete({ _id: dogId });
    const dogs = await Dog.find({ owner: _id });

    return response.status(200).json({
      success: true,
      data: dogs,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default updateDog;
