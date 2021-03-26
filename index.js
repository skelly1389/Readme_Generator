const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./utils/template.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'uTitle',
      message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'uDescription',
        message: 'Describe your application',
    },
    {
        type: 'input',
        name: 'uInstall',
        message: 'How does a user install your app?',
    },
    {
        type: 'input',
        name: 'uUsage',
        message: 'How does a user user your app?',
    },
    {
        type: 'input',
        name: 'uContribute',
        message: 'How does somebody contribute to the development of your app?',
    },
    {
        type: 'input',
        name: 'uTests',
        message: 'Provide testing examples for your application',
    },
    {
        type: 'input',
        name: 'uGithub',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'uEmail',
        message: 'What is your email address?',
    },
    {
      type: 'list',
      message: 'Which license does your application use?',
      name: 'uLicense',
      choices: ['MIT', 'GNU'],
    },
  ])
  .then((data) => {
    console.log(data.uLicense);
    fs.writeFile('SAMPLE.md', template.structure(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });