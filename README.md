# Netflix Clone

A full-stack Netflix Clone built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project replicates core Netflix features, including user authentication, movie browsing, and streaming functionality.

## Features

- **User Authentication:** Sign up, log in, and manage user sessions with JWT authentication.
- **Movie & Show Browsing:** Fetch and display movies/shows from a database with categories.
- **Watchlist Feature:** Save favorite movies and shows for later viewing.
- **Streaming Support:** Play movies and shows using an integrated video player.
- **Admin Panel:** Manage content, users, and categories.
- **Responsive UI:** Optimized for mobile and desktop viewing.

## Tech Stack

### Frontend
- React.js
- Redux (State Management)
- Tailwind CSS / Bootstrap (Styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- Multer (for file uploads)

### Deployment
- Frontend: Vercel / Netlify
- Backend: Heroku / Render
- Database: MongoDB Atlas

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Clone the Repository
```sh
 git clone https://github.com/Bikash432/Netflix-Clone.git
 cd Netflix-Clone
```

### Backend Setup
```sh
 cd server
 npm install
 npm start
```

### Frontend Setup
```sh
 cd client
 npm install
 npm start
```

## Environment Variables
Create a `.env` file in the `server` directory and configure:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Usage
- Run the backend and frontend concurrently.
- Visit `http://localhost:3000` to explore the app.
- Sign up or log in to access premium features.

## Contributing
Pull requests are welcome! For significant changes, open an issue first to discuss what you'd like to modify.

## License
This project is licensed under the MIT License.

## Contact
For queries, reach out to [Bikash Thapa Magar](mailto:bthapam@siue.edu).

## Acknowledgments
Special thanks to the open-source community for providing valuable resources and libraries used in this project.

