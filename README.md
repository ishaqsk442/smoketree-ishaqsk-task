Register User and Address
==============================

This API allows you to register a new user along with their address. It stores the name in the User table and the address in the Address table, with a one-to-many relationship between them.

URL: /register

Method: POST

Content-Type: application/json


Technologies Used
================

Node.js

Express.js

MySQL

Sequelize ORM

How to Test
===============

You can test the API using Postman or any other API testing tool:

Send a POST request to http://localhost:3000/register.

Provide a JSON body with name and address.

Check the response to see the stored user and address.

