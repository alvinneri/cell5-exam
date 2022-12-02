import { connect, connection } from "mongoose";
import CONFIG from "./environment.config";

if (!CONFIG.MONGO_URI) {
  throw new Error('No "MONGO_URI" in the ".env" file.');
}

connect(CONFIG.MONGO_URI, {
  autoIndex: true,
});

connection.addListener("connected", () => {
  // eslint-disable-next-line no-console
  console.log("🌿  Connected to MongoDB");
});
