import { Request, Response, NextFunction } from "express";

import { User } from "../../../models/User/User";
import ApiError from "../../../utils/error/ApiError";

interface SignUpInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUp = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }: SignUpInterface = request.body;

  if (confirmPassword !== password) {
    return next(new ApiError("Passwords don't match", 400));
  }

  if (password.length < 8) {
    return next(
      new ApiError("Passwords length should be atleast 8 characters", 400)
    );
  }

  if (request.user) {
    try {
      const user = await User.create({
        email,
        password,
        firstName,
        lastName,
      });
      return response.status(201).json({
        message: "Signup successful",
        success: true,
      });
    } catch (error: any) {
      if (error.code === 11_000) {
        return next(new ApiError("Email already exists", 400));
      }
      return next(new ApiError(error.message, 400));
    }
  }
  return next(new ApiError("Unable to process request", 400));
};

export default signUp;
