import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { Dog, DogDocument } from "../../../models/Dogs/Dog";
import ApiError from "../../../utils/error/ApiError";

const updateDog = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { params, body, user } = request;
  const { _id }: any = user;
  const dogId = params.dogId;

  if (!body.photo) {
    return next(new ApiError("Photo is required", 400));
  }

  if (!body.name) {
    return next(new ApiError("Photo is required", 400));
  }

  try {
    await Dog.findOneAndUpdate({ _id: dogId }, body, {
      new: true,
      runValidators: true,
    });
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
