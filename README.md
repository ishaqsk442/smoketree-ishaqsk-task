# Published Frontend Link 

Link : https://ishaq-shaik-smoketree-task.netlify.app/



# User Address Registration

A simple web application that allows users to register by submitting their name and address. The application consists of a frontend form that communicates with a Node.js backend, which stores the data in a MySQL database using Sequelize.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MySQL
- **ORM**: Sequelize
- **Middleware**: CORS

## Features

- User registration form for name and address input.
- Data validation to ensure all fields are filled.
- Data is stored securely in a MySQL database.
- API endpoint for handling registration requests.

Register User and Address
==============================

This API allows you to register a new user along with their address. It stores the name in the User table and the address in the Address table, with a one-to-many relationship between them.

URL: /register

Method: POST

Content-Type: application/json

Check the response to see the stored user and address.

