# Employee Management System
<!-- ![Employee Management System](./icons8-database.gif) -->

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)
<!-- - [Authentication](#authentication) -->

## Introduction
A full-stack application for  Employee Management. This application is a start designed to help companies efficiently manage their employees, clients, and/or locations. It provides full CRUD (Create, Read, Update, Delete) functionality on both the front and back end, making it a powerful tool for maintaining and organizing essential data.

## Features
- **Full CRUD Functionality**: Perform all essential operations for managing employees<!-- , clients, and locations -->.
<!-- - **User Authentication**: Implement OAuth for secure access and user management. -->
- **Database**: Utilize MongoDB for efficient data storage and retrieval. Additionaly, it is connected to atlast cloud database. 

## Installation
To run this application locally, please follow these steps:

1. Clone the repository:
git clone https://github.com/TechALynch/Employee-Management-System-.git
cd employee-management-system

2. Install dependencies:
npm install or sudo npm i if you ru into any issues. 

4. Run 
node seed/clientSeedData.js seed/employeeSeedData.js  seed/locationSeedData.js 

4. Start the server:
npm run dev

5. The application will be available at `http://localhost:3001` by default.

## Technologies
- Node.js
- Express.js
- MongoDB
- cors
- morgan
- mongoose
- nodemon

<!-- - OAuth (for authentication) -->

## Usage
<!-- 1. Sign in using your OAuth credentials or register a new account. -->
1. Navigate through the application to manage employees, clients, and locations.
2. Add, update, or delete records as needed.
3. Enjoy the convenience of a streamlined management system.

<!-- ## Authentication
This application uses OAuth for authentication, ensuring secure access to the system. You will need to configure your OAuth client ID and client secret in the `.env` file as mentioned in the installation instructions. -->

## Database
The application utilizes MongoDB as the database to efficiently store and retrieve data.<!-- Make sure to set up the `MONGODB_URI` environment variable in the `.env` file. -->

## Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License
This project is licensed

Thank you for using the Employee Management System! If you have any questions or need assistance, please contact me at ems.001@gmail.com