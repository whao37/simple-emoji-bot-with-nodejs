# simple-emoji-bot-with-nodejs
😄Originally designed for Google Chat utilizing Google Cloud and Chat API🤖

## Short Overview
Utilized express.js, Google Chat API from Google Cloud, and Node.js.

## How to run locally
1) Clone the repo.
2) Ensure you have npm installed with 'npm install' in command line/terminal.
3) Start server with node index.js.
4) Use a tunnel local server utilizing tools like ngrok, replit, AWS, or Google Cloud to test the functionalities. Expand the simple work as you like.

## Optional Steps
This was originally designed for Google Chat API, which is dependent on Google Workspace (paid). Make sure you have Workspace.
1) Goto the Google Cloud Console
2) Select a project at the top of the page.
3) Name your project.
4) Navigate to API & Services
5) Click on "+ENABLE APIS AND SERVICES" on top.
6) Search for the Google Chat API and click it. Enable the API.
7) Go back to API & SERVICES then click on OAuth Consent Screen.
8) Fill as desired (user type: EXTERNAL) and then Create.
9) Fill the fields as desired and save.
10) Go Back to API & SERVICES then click on OAuth Client ID.
11) Choose web app as the app type.
12) For redirect URLs, use the URL that you test the POST commands on. For example, for replit you use "https://your-replit-username.your-replit-project-name.repl.co./"
13) Save the client ID and client secret.
14) Publish your bot under "Configuration" in the Google Chat API.
15) Simply fill out the name and permissions, add a picture for the bot if desired.
16) Deploy the bot, and have fun on Google Chat!

