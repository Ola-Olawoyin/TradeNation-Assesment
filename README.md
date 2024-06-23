## Project Description

This is a functional automation test to validate homepage Url, the trade nation logo and an invalid 'login with google'. It is built using Cypress for automated end-to-end testing, with some plugins for Cypress functionality and reports.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 12 or higher)

- Visual Studio Code IDE

- npm (Node package manager)

- Git

## Installation

1. **Clone the Repository**:

   ```bash

   git clone https://github.com/Ola-Olawoyin/TradeNation-Assesment.git

   cd TradeNation-Assessment

   ```

2. **Install Dependencies**:

   ```bash

   npm install

   ```

## Running Tests

Run the Cypress tests with these npm scripts that we defined in the `package.json`:

- **Run all tests in headless mode**:

  ```bash

  npm run test-headless

  ```

- **Run Hompage test file**:

  ```bash

  npm run test-homepage

  ```

- **Run tests in headed mode**:

  ```bash

  npm run test-headed

  ```

- **Run tests in a specific browser (e.g., Chrome)**:

  ```bash

  npm run test-chrome

  ```

## Generating Reports

The test report for this project was generated using Mochawesome. To generate the test report: 1. Run 'npm install mochawesome' (If not allready installed when running 'npm install' initially)

1. **Generate the Mochawesome Report**:

   ```bash

   npm run mochawesome-merge

   ```

2. **Open the Report**:

The report is now in the `cypress/results/mochawesome` directory. Open `mochawesome.html` in your web browser to view the report.

## Continuous Integration

This project has a Jenkins pipeline for continuous integration. The Jenkins pipeline is specified by the Jenkinsfile in the root folder of the project.

### Jenkins Pipeline Steps

1. **Checkout**: Checks out the source code from the repository.

2. **Install Dependencies**: Installs the required Node.js dependencies.

3. **Run Cypress Tests**: Runs the Cypress tests in headless mode.

4. **Generate Mochawesome Report**: Generates the Mochawesome test report.

5. **Publish Report**: Archives and publishes the Mochawesome report.

### Configuring Jenkins

1. **Create a Jenkins Pipeline Job**:

   - Go to Jenkins and create a new pipeline job.

- Add the pipeline script such that it reads the Jenkinsfile from the repo.

2. **Trigger the Job**:

- Run it manually; or - Create a webhook and let it run automatically on commits.
