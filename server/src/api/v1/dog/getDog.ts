import { NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import ApiError from "../../../utils/error/ApiError";

const getDog = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const dog = await result.json();
    return response.status(200).json({
      success: true,
      data: dog,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default getDog;
