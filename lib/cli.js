const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./shapes");
const { writeFile } = require("fs/promises");
const SVG=require("./svg");
// class questions to build logo from user input.

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter only three letters for logo.',
                    validate: (text) => 
                        text.length <= 3 ||
                        "The message must not contain more than 3 characters",
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?',
                },
                {
                    type: 'list',
                    name: 'shapes',
                    message: 'What shape would you like for your logo?',
                    choices: ["Circle", "Square", "Triangle"],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like to fill your shape?'
                },
            ])
            .then(({ text, textColor, shapes, shapeColor }) => {
                let shape;
                switch (shapes) {
                    case "Circle":
                        shape = new Circle();
                        break;

                    case "Square":
                        shape = new Square();
                        break;

                    default:
                        shape = new Triangle();
                        break;
                }
                shape.setColor(shapeColor);
                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            .then(() => {
                console.log("svg.logo generated successfully")
            })
            .catch((error) => {
                console.log(error);
                console.log("Error! Something went wrong.");
            });
    }
};

module.exports = CLI;