function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  ![user badge](https://img.shields.io/badge/license-${encodeURI(data.typeLicense)}-red)

  ${data.description}

## Table of Contents \n 
-[Installation](#Installation) \n
-[Usage](#Usage) \n
-[License](#License) \n
-[Contributing](#Contributing) \n
-[Tests](#Tests) \n
-[Questions](#Questions) \n

##Installation
${data.commandInstall}

##Usage
${data.usingRepo}

##Tests
${data.commandRunTest}

##Questions
![user profile pic](${data.avatar_url})
Questions, please email ${data.UserEmail}
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
