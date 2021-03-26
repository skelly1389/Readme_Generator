const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./utils/template.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'uTitle',
      message: 'What is the title of the project?',
      validate: function (value) {
        var pass = (value !== null && value !== "")
        if (pass) {
          return true;
        }
          return 'Please enter a title';
      },
    },
    {
        type: 'input',
        name: 'uDescription',
        message: 'Describe your application',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter a description';
        },
    },
    {
        type: 'input',
        name: 'uInstall',
        message: 'How does a user install your app?',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter installation instructions';
        },
    },
    {
        type: 'input',
        name: 'uUsage',
        message: 'How does a user use your app?',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter usage instructions';
        },
    },
    {
        type: 'input',
        name: 'uContribute',
        message: 'How does somebody contribute to the development of your app?',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter contribution instructions';
        },
    },
    {
        type: 'input',
        name: 'uTests',
        message: 'Provide testing examples for your application',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter testing instructions';
        },
    },
    {
        type: 'input',
        name: 'uGithub',
        message: 'What is your github username?',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter a username';
        },
    },
    {
        type: 'input',
        name: 'uEmail',
        message: 'What is your email address?',
        validate: function (value) {
          var pass = (value !== null && value !== "")
          if (pass) {
            return true;
          }
            return 'Please enter an email address';
        },
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