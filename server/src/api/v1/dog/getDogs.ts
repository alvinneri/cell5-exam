import { NextFunction, Request, Response } from "express";
import _ from "lodash";
import { Dog } from "../../../models/Dogs/Dog";
import ApiError from "../../../utils/error/ApiError";

const getDogs = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { user, query } = request;
  const { _id }: any = user;
  const { search = "" } = query;
  const searchString = search;
  try {
    if (!user && _.isNil(_id)) {
      return response.status(401).json({
        success: false,
        data: null,
        message: "Unauthorized",
      });
    }

    const dogs = await Dog.find({
      owner: _id,
      ...(searchString && {
        name: searchString.toString().toLowerCase(),
      }),
    });

    return response.status(200).json({
      success: true,
      data: dogs,
      message: "Success",
    });
  } catch (error) {
    return next(new ApiError(error, 400));
  }
};

export default getDogs;
