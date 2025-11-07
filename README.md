
# ZERODHA – Trading Dashboard Clone
DEMO LINK :- https://sparkling-sawine-4bf305.netlify.app/
DEMO LINK HOME :- https://sparkling-sawine-4bf305.netlify.app/
DEMO LINK :- https://kaleidoscopic-profiterole-b4bc55.netlify.app/
## Overview
ZERODHA is a full-stack trading dashboard clone built using React (frontend) and Node.js + Express + MongoDB (backend).  
The project includes user signup, dashboard navigation, and pages such as Holdings, Positions, Orders, Funds, and Apps.

## Features
- User Signup (with password hashing using bcrypt)
- React Router multi-page navigation
- Dashboard page after successful signup
- Holdings, Positions, Orders, Funds, Apps pages
- Express REST API connected with MongoDB
- Mongoose models (User, Holdings, Positions, Orders)
- Clean and simple UI inspired by Zerodha
- Modular frontend and backend structure

## Project Structure
ZERODHA/
│<br>
├── Backend/<br>
│ ├── index.js<br>
│ ├── .env<br>
│ └── model/<br>
│ ├── UserModel.js<br>
│ ├── HoldingsModel.js<br>
│ ├── PositionsModel.js<br>
│ └── OrdersModel.js<br>
│<br>
└── Frontend/<br>
├── src/<br>
│ ├── components/<br>
│ │ ├── Signup.jsx<br>
│ │ ├── Dashboard.jsx<br>
│ │ ├── Holdings.jsx<br>
│ │ ├── Orders.jsx<br>
│ │ ├── Positions.jsx<br>
│ │ └── Funds.jsx<br>
│ ├── landing_page/<br>
│ │ └── home/<br>
│ │ └── Hero.jsx<br>
│ └── index.js<br>
│
├── public/<br>
├── package.json<br>
└── index.html<br>

shell
Copy code

## Backend Setup

### 1. Install Backend Dependencies
cd Backend
npm install

shell
Copy code

### 2. Create .env file
MONGO_URL=your_mongodb_connection_string
PORT=3002

shell
Copy code

### 3. Start Backend
npm start

lua
Copy code

Expected output:
App started!
DB started!

shell
Copy code

## Frontend Setup

### 1. Install Frontend Dependencies
cd ../Frontend
npm install

shell
Copy code

### 2. Start Frontend
npm start

r
Copy code

Open in browser:
http://localhost:3000

bash
Copy code

## Frontend Routes
| Route | Description |
|-------|-------------|
| / | Home page |
| /signup | Signup page |
| /dashboard | Dashboard page |
| /holdings | Holdings page |
| /positions | Positions page |
| /orders | Orders page |
| /funds | Funds page |
| /apps | Apps page |

After signup, user is redirected automatically to `/dashboard`.

## Testing Setup (Optional)

### Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react jest-environment-jsdom

shell
Copy code

### Add script in package.json
"scripts": {
"test": "jest"
}

shell
Copy code

### Create jest.config.js
export default {
testEnvironment: "jest-environment-jsdom",
transform: {
"^.+\.(js|jsx)$": "babel-jest"
},
moduleFileExtensions: ["js", "jsx"],
setupFilesAfterEnv: ["@testing-library/jest-dom"]
};

shell
Copy code

### Create .babelrc
{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

shell
Copy code

### Run tests
npm test

pgsql
Copy code

## Future Improvements
- Add login system
- Add JWT authentication
- Add protected routes
- Add real-time market data
- Add responsive UI
- Add dark mode
- Add admin panel

## Contact
Author: Vansh Rana  
GitHub: https://github.com/VanshRanaR

## License
This project is for education and portfolio purposes.
