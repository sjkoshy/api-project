import mongoose from "mongoose";
import chalk from "chalk";

mongoose.connect("mongodb://localhost:27017/api-project").catch((err) => {
  console.log(chalk.bold("Error: Cannot connect to database") + err);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.yellow("Error: Lost connection to database"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red("Database connection error") + err);
});

export default mongoose.connection;


