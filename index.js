const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle}= require("./lib/shapes");

class svgLogo{
    constructor(){
        this.shapeElement = "",
        this.textElement = "",
    }
    render(){
        return
    }
};

// Array of questions to build logo from user input.

const questions =[
    {
        type: 'input',
        name: 'initials',
        message: 'Enter three letters.'
    },
    {
        type: 'input',
        name: 'text color'
        message: 'What color would you like your text to be?'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape would you like for your logo?',
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'shape color'
        message: 'What color would you like to fill your shape?'
    },
    {
        type:
        name:
        message:
    }
]