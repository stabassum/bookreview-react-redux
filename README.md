# React-Redux Portfolio Project
This project is a Single Page Application (SPA) that uses a Rails API back-end and a JavaScript + HTML + CSS front-end per assignment specifications.

## Project File Structure

# Book Review
## README
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
