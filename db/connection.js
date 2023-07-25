import mongoose from "mongoose";
import chalk from "chalk";

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/api-project";

mongoose.set("returnOriginal", false);

mongoose.connect(DB_URL).catch((err) => {
  console.log(chalk.bold("Error: Cannot connect to database") + err);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.yellow("Error: Lost connection to database"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red("Database connection error") + err);
});

export default mongoose.connection;