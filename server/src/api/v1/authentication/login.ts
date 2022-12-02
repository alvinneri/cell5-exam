import { Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import ApiError from "../../../utils/error/ApiError";
import CONFIG from "../../../config/environment.config";
import { User } from "../../../models/User/User";

const logIn = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  passport.authenticate("login", async (err, user) => {
    try {
      if (err || !user) {
        return response
          .status(401)
          .json({ success: false, message: "Invalid login", data: null });
      }

      return request.login(user, { session: false }, async (error) => {
        if (error || !user) {
          return next(new ApiError("Invalid login", 400));
        }

        const body = { _id: user._id, email: user.email };

        if (!CONFIG.JWT_SECRET) {
          return response.status(502).json({
            success: false,
            message: "Unable to find jwt secret key",
            data: null,
          });
        }

        const token = jwt.sign({ user: body }, CONFIG.JWT_SECRET);
        const userDoc = await User.findById(user._id).lean();

        return response.status(200).json({
          success: true,
          message: "Login successful",
          token,
        });
      });
    } catch (error) {
      return next(error);
    }
  })(request, response, next);
};

export default logIn;
