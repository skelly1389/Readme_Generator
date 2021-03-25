

const structure = (data) => {return `
# ${data.uTitle} \n

## Description 

${data.uDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.uInstall}

## Usage

${data.uUsage}

## License



## Contributing

${data.uContribute}

## Tests

${data.uTests}

## Questions

[Github: ${data.uGithub}](https://github.com/${data.uGithub}) \n
Email: ${data.uEmail}

`
}


module.exports = {
    structure, 
};