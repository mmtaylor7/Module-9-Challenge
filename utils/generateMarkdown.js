// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      console.log("tacocat")
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
  case 'Boost Software License 1.0':
    console.log('tacodog')
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    break;
    case 'BSD 3-Clause License':
      console.log('tacofish')
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break; 
   
  }
return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `#${data.title} 
### Description: 
${data.description}
### Table of Contents: 
${data.tableOfContents}
### Installation: 
${data.installation}
### Usage: 
${data.usage}
### License: 
${data.license} Click badge for licensing info: ${renderLicenseBadge(data.license)}
### Contribution Guidelines: 
${data.contribution}
### Test Instructions: 
${data.test}
### Any Questions? Please contact: 
${data.questions}`
}
module.exports = generateMarkdown; 
