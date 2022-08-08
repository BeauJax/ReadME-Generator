// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "No License") { 
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "Apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GPL-3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLiveLink(data) {
  if (data.url == "") {
    return ''
  } else {
    return `[Live Deployed Application](${data.url})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderScreenshot(data) {
  if (data.screenshot == "") {
    return ''
  } else {
    return `![screenshot of ${data.title}](${data.screenshot})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  . [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseBadge(data)}

## GitHub
${data.github}

## E-mail
${data.email}`
}

module.exports = generateMarkdown;
