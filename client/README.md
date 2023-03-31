# Getting Started with Create React App

This Project was created for the purpose of serving as an application for a MERN stack position. This project uses the development environment and not an outside database.

## Available Scripts

To start this project you will need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).

## From the command line run the following commands:

(Notes for MacOS)

\*\*

mongod

if you have a db folder in your Users/user/data directory. If you do not have a data folder, you will need to create one and run: mongod --dbpath ~/data/db

note: I have had to run the second command in order to get the mongo server to start. If you have a data folder in your User directory, you can run the first command and should be good to go.

this will start the mongo server on your machine.

\*\*

mongosh

(to start the mongo shell)

show dbs

(to show the databases)

use mernInternship

(to use/create the database)

## From these Directories Run the following commands:

### `backend directory`

create a .env file and add the following:

MONGO_URI=mongodb://localhost:27017/mernInternship
PORT=5001

### `client directory`

create a .env file and add the following:

REACT_APP_API_URL=http://localhost:5001

### `root directory`

yarn install

cd backend

yarn start

cd client

yarn start

My apologies for the long instructions. If you dive into any issues, please reach out! I am happy to help.
