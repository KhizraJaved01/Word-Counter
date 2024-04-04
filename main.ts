#! /usr/bin/env node
import inquirer from "inquirer";

async function countCharactersAndWords() {
    const response = await inquirer.prompt(
        [
            {
                type: "input",
                name: "paragraph",
                message: "Enter a paragraph:"
            }
        ]
    );



const {paragraph} = response;

const charactersWithoutSpaces = paragraph.replace(/\s/g, '').length;
const wordsCount = paragraph.split(/\s+/).filter(Boolean).length;

console.log(`Character count (excluding whitespaces) ${charactersWithoutSpaces}`);
console.log(`Word count (excluding whitespaces) ${wordsCount}`);

}

countCharactersAndWords();