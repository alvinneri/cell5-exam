import app from "./app";
import Config from "./config/environment.config";

try {
  app.listen(Config.PORT, (): void => {
    console.log(`Connected successfully on port ${Config.PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
