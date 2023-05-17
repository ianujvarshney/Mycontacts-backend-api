# MyContacts Backend API

This repository contains the backend API for the MyContacts application. It serves as the server-side implementation for managing and storing contact information.

## Features

- Create, read, update, and delete contacts
- Search for contacts by name, email, or phone number
- Store contact information, including name, email, phone number, and additional notes
- User authentication and authorization
- Secure API endpoints using JSON Web Tokens (JWT)
- Data validation and error handling

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js (for password hashing)
- Joi (for data validation)
- Nodemailer (for sending email notifications)

## Getting Started

To get started with the MyContacts Backend API, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/MyContacts-backend-api.git`
2. Install the dependencies: `npm install`
3. Configure the environment variables:
   - Create a `.env` file based on the `.env.example` file provided
   - Set the appropriate values for the environment variables (such as database connection URL, JWT secret, etc.)
4. Start the server: `npm start`
5. The API will be accessible at `http://localhost:3000`

## API Documentation

For detailed information about the API endpoints and how to use them, refer to the [API documentation](api-documentation.md).

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please submit a pull request. Make sure to follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

