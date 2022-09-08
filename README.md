# SimpleAWSSNS

A simple AWS SNS implementation using node js

---

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

## Install

    $ git clone https://github.com/leoarokiaraj/SimpleAWSSNS
    $ cd SimpleAWSSNS
    $ npm install

## Configure app

- Replace the placeholder `Enter_Profile_Name` in app.js with the AWS profile name
- Replace the placeholder `Topic_Arn` in app.js with the AWS Topic ARN

## Running the project

    $ node app.js
