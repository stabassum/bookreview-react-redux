# React-Redux Portfolio Project - Book Review
This project is a Single Page Application (SPA) that uses a Rails API back-end and a JavaScript + HTML + CSS front-end per assignment specifications.

## Project File Structure

### Description
Book Review is an app with a Javascript frontend and Ruby on Rails API backend to keep track of books you have read and your review comments about the book. 

### Installation Instructions
Fork and clone the repo to your local machine.

Change directory into bookreview-backend and run:
* cd bookreview-backend
* bundle install

### Setup and seed the database:
* rails db:create
* rails db:migrate
* rails db:seed

Run the rails server from localhost:3000
* rails s

You should see the list of books from `localhost:3000/books`

Navigate to the bookreview-react-redux/bookreview-frontend.
* cd ../bookreview-frontend
cd npm start

You should see the app from `localhost:3000`.

### Project Requirements:
* The code is written in ES6 as much as possible
* Use the 'create-react-app' generator to start your project
* The app has one HTML page to render the react-redux application
* There are atleast 5 stateless components
* There are atleast 3 routes
* The application uses react-router and proper RESTful routing
* The application uses Redux middleware to respond to and modify state change
* The application makes use of async actions and redux-thunk middleware to send data to and receive data from a server
* The Rails API should handle the data persistence with a database. Use fetch() within your actions to GET and POST data from the API 
* The clinet-side application should handle the display of data within minimal data manipulation
* The application has minimal styling: Using CSS

```
bookreview-react-redux
├── bookreview-backend
│   ├── app
│   │   ├── controllers
│   │   │   ├── book_ownerships_controller.rb
│   │   │   └── books_controller.rb
│   │   │   └── sessions_controller.rb
│   │   │   └── users_controller.rb
│   │   ├── models
│   │   │   ├──book.rb
│   │   │   ├──book_ownership.rb
│   │   │   └──user.rb
│   │   └── views
│   └── db
│       └── migrate 
│           ├── 001_create_users.rb
│           └── 002_create_books.rb
│           └── 003_create_book_ownerships.rb
│
├── bookreview-frontend
│   ├── src
│   │   └── actions
│   │   └── components
│   │   └── containers
│   │   └── reducers
│   ├── App.js  
│   └── index.js
└── README.md
