import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import { Dog, DogDocument } from "../../../models/Dogs/Dog";
import ApiError from "../../../utils/error/ApiError";

const updateDog = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { params, body } = request;
  const dogId = params.dogId;

  if (!body.photo) {
    return next(new ApiError("Photo is required", 400));
  }

  if (!body.name) {
    return next(new ApiError("Photo is required", 400));
  }

  try {
    const dog: DogDocument | null = await Dog.findOneAndUpdate(
      { _id: dogId },
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    return response.status(200).json({
      success: true,
      data: dog,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default updateDog;
