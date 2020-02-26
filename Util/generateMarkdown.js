
function generateMarkdown(data) {
  console.log(data)

  return `
  # ${data.title}

  ![user badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-red)

## Description \n 
  ${data.description}

## Table of Contents \n 
- [Installation](#Installation) \n
- [Usage](#Usage) \n
- [License](#License) \n
- [Contributing](#Contributing) \n
- [Tests](#Tests) \n
- [Questions](#Questions) \n

## Installation  \n
${data.install}

## Usage \n
${data.usage}

## License \n
This project is licensed under ${data.license} license.

## Contributing \n
${data.contributing}

## Tests \n
${data.runTest}

## Questions \n
<img src="${data.avatar_url}" width='100px' />

If you have any questions, please contact ${data.login} directly at ${data.ContactEmail}. \n
`;
}

module.exports = generateMarkdown;


// * At least one badge
// * Project titlez
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email
