## [App Link](https://rebay-app.herokuapp.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Development

```
git clone https://github.com/rebay-8th-light-ebay-clone/rebay.git
cd  into project directory
npm install
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment
Environmental Variables ($HEROKU_API_KEY and $HEROKU_APP_NAME) for Deployment are stored in CircleCI.

### Generate a new API Token
`heroku authorizations:create`

### [Setting an Environment Variable in a CircleCI Project](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project)
In the CircleCI application, go to your project's settings by clicking the gear icon next to your project.

In the Build Settings section, click on Environment Variables.

Import variables from another project by clicking the Import Variable(s) button. Add new variables by clicking the Add Variable button. (Note: The Import Variables(s) button is not currently available on CircleCI installed in your private cloud or datacenter.)

Use your new environment variables in your .circleci/config.yml file. For an example, see the Heroku deploy walkthrough.

Once created, environment variables are hidden and uneditable in the application. Changing an environment variable is only possible by deleting and recreating it. 