# Tech Quiz

## Description
**Tech Quiz** is a web application that allows users to test their technical knowledge by answering ten randomly selected questions. The app is built using the **MERN stack** (MongoDB, Express.js, React, and Node.js) and includes **Cypress tests** for both component and end-to-end testing.

## Features
-  Start a quiz with ten random questions
-  Answer each question and proceed to the next
-  View the final score at the end of the quiz
-  Restart the quiz to try again
-  Fully tested using Cypress for reliability

## Technologies Used
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Testing:** Cypress

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cypress](https://www.cypress.io/)

### Steps to Run Locally
#### 1️. Clone the repository
```sh
git clone https://github.com/ElianaScript/techquiz_19.git
cd techquiz_19
```
#### 2️. Install dependencies
```sh
cd client
npm install
cd ../server
npm install
```
#### 3️. Set up environment variables
Rename the `.env.example` file to `.env` in the **server** directory and update the necessary values:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3001
```
#### 4️. Start the backend server
```sh
cd server
npm start
```
#### 5️. Start the frontend client
```sh
cd client
npm run dev
```
Your frontend should now be running at **[http://127.0.0.1:3001/](http://127.0.0.1:3001/)**.

## Running Tests
### Install Cypress
```sh
npm install --save-dev cypress
```
###  Run Cypress tests
#### **Component Tests:**
```sh
npx cypress run --component
```
#### **End-to-End Tests:**
```sh
npx cypress open
```
Select the `quiz.cy.js` file to run the test.


## 🎥 Walkthrough Video
Coming Soon

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with improvements or bug fixes.

## 📜 License
This project is licensed under the **[MIT License](LICENSE)**.

