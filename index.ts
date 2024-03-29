#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlackBright("\nBMI Calculator\n"));

const choose = await inquirer.prompt([
  {
    type: "list",
    message: "Select your unit system",
    name: "unit",
    choices: ["metric", "imperial"],
  },
]);

if (choose.unit === "imperial") {
  const imperial = await inquirer.prompt([
    {
      type: "number",
      message: "Enter your height in inches",
      name: "height",
    },
    {
      type: "number",
      message: "Enter your weight in pounds",
      name: "weight",
    },
  ]);

  const bmi = ((imperial.weight / (imperial.height * imperial.height))*703).toFixed(
    2
  );

  if (bmi < "18.5") {
    console.log(chalk.bgBlueBright(`Underwieght\nBMI: ${bmi}\n`));
  } else if (bmi >= "18.5" && bmi <= "24.9") {
    console.log(chalk.bgGreenBright(`Normal BMI\nBMI: ${bmi}\n`));
  } else if (bmi >= "25" && bmi < "29.9") {
    console.log(chalk.bgYellowBright(`Obese\nBMI: ${bmi}\n`));
  } else {
    console.log(chalk.bgRedBright(`Overweight\nBMI: ${bmi}\n`));
  }
} else {
  const metric = await inquirer.prompt([
    {
      type: "number",
      message: "Enter your height in meters",
      name: "height",
    },
    {
      type: "number",
      message: "Enter your weight in kilograms",
      name: "weight",
    },
  ]);
  const bmi = (metric.weight / (metric.height * metric.height)).toFixed(2);

  if (bmi < "18.5") {
    console.log(chalk.bgBlueBright(`Underwieght\nBMI: ${bmi}\n`));
  } else if (bmi >= "18.5" && bmi <= "24.9") {
    console.log(chalk.bgGreenBright(`Normal BMI\nBMI: ${bmi}\n`));
  } else if (bmi >= "25" && bmi < "29.9") {
    console.log(chalk.bgYellowBright(`Obese\nBMI: ${bmi}\n`));
  } else {
    console.log(chalk.bgRedBright(`Overweight\nBMI: ${bmi}\n`));
  }
}
