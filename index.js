import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("\n \n \t Welcome to the WordCounter - CLI Application \t "));
console.log("=".repeat(60));
let answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words: "));
console.log(words);
console.log(chalk.bold("\n The number of words in the sentence is: " + chalk.bold.redBright(words.length)));
console.log("=".repeat(60));
