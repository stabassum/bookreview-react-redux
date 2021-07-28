# React-Redux Portfolio Project - Book Review
This project is a Single Page Application (SPA) that uses a Rails API back-end and a JavaScript + HTML + CSS front-end per assignment specifications.

## Project File Structure

### Description
Book Review is an application using the React-Redux framework and a Ruby on Rails API backend to keep track of book review's users have read. The application gives a user the ability to create an account and login to access full features of the application. If a user is not logged, the following pages are available for view: Home, About, and View All Book Reviews. If a user is logged in, a has the option to view book reviews submitted by that particular logged in user, and the option to add (additional) book reviews. Each book review entry can be modified (Edit or Delete). 

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

### General Screenshots

The 'About' and 'Home' pages are plain static pages with general details about the application, with slightly more details in the 'Home' page. 

The 'Initial Screen' that the user views is a login page, where the user can enter his/her login credentials to access all of the deatures of the application. If the user does not have login information, he/she can create an account to login.

The user also has the option to Logout of the application (not shown in the rough images below).

![Initial Screen](https://user-images.githubusercontent.com/20411568/127408711-8a770662-7477-4f93-9ad6-f36509090773.png)

The user does not need to login to 'View All Book Reviews', as they do not need to login to view either the Home or About page.

![All Reviews](https://user-images.githubusercontent.com/20411568/127408721-75b743e6-8445-48bb-92d1-6a21e3f54713.png)

The user must login to 'View My Book Reviews'. The user can create a new book review. The user can also delete an existing book review.

![Screenshot 2021-07-28 192125](https://user-images.githubusercontent.com/20411568/127408718-55729c3d-ee77-4206-8877-04f9b78861d9.png)




### File Structure:
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
