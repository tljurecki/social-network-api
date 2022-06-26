# Social Network API

## Description
A social media website where users can share their thoughts, react to other people's thoughts and add friends.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Technologies Used
- MongoDB
- Express.js
- Mongoose
- Moment.js
- Node.js

## Installation
To use this application, clone the code to your local machine, run npm init followed by npm install to install all dependencies

## Video Tutorial
Here is a link to see a video walk through of this application: https://drive.google.com/file/d/1Ek7gGuFGj-tuTX2fPmEkGdUXKMWX-0XK/view 

## GitHub Repository
GitHub Repo Link https://github.com/tljurecki/social-network-api.git

