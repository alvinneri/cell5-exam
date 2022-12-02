import { config } from "dotenv";

config();

const { MONGO_URI, NODE_ENV, MONGO_URI_TEST, PORT, JWT_SECRET, JWT_EXPIRY } =
  process.env;

const CONFIG = {
  PORT: PORT || 9000,
  MONGO_URI:
    NODE_ENV === "development" || NODE_ENV === "production"
      ? MONGO_URI
      : MONGO_URI_TEST,
  JWT_SECRET,
  JWT_EXPIRY,
};

export default CONFIG;
