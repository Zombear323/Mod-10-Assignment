const inquirer = require('inquirer');
const fs = require('fs');

class LogoMaker {
  constructor() {
    this.text =  '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }

//asks for parameters

    async promptUser() {
        const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:',
        },
        ]);



    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shape = answers.shape;
    this.shapeColor = answers.shapeColor;
  }

//create SVG file using user input

  generateSVG() {
    const svgContent = `<svg width="300" height="200">
      <text x="150" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
      <${this.shape} fill="${this.shapeColor}"  width="100" height="100" x="100" y="50" />
    </svg>`;

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  }
}

const logoMaker = new LogoMaker();

logoMaker.promptUser()
  .then(() => {
    logoMaker.generateSVG();
  })


  .catch((error) => {
    console.error(error);
  });