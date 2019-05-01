# First time setup for DiscrodRPGBot.Client application
*this guide assumes you have all of the following applications installed: node.js, git*

1. Clone the repo to a local directory on your machine.
2. Open git bash
3. Navigate to the directory you want to store the repo (I use C:\Development)
4. Enter the following command: `git clone https://github.com/thedudesinc/DiscordRPGBot.Client.git`
5. You may need to enter your credentials to Github in the popup for this to work. 
6. Navigate to the newly created directory and install the NPM packages.
7. In the git bash you were just using, run the following command: `cd DiscordRPGBot.Client`
8. Then: `npm install`
9. Then: `npm install -g nodemon`
10. Once the packages are installed, 
    you'll need to add the Discord API key as an environment variable 
    using the following command in CMD or Powershell: `setx SECRET_DISCORD_TOKEN "<message me for token>"`
    

# After first time setup, run the following command in git bash to start the application (note you need to be in the root of the project): 
`nodemon index.js`
