# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users

john = User.create(username: "John", email: "john@example.com", password: "example")

jane = User.create(username: "Jane", email: "jane@example.com", password: "example")

joe = User.create(username: "Jane", email: "doe@example.com", password: "example")

hamlet = Book.create(title: "Hamlet", author: "William Shakespeare", review: "Did not like the book")

othello = Book.create(title: "Othello", author: "William Shakespeare", review: "Did not like the book")

macbeth = Book.create(title: "Macbeth", author: "William Shakespeare", review: "Did not like the book")

king_lear = Book.create(title: "King Lear", author: "William Shakespeare", review: "Did not like the book")

twelfth_night = Book.create(title: "Twelfth Night", author: "William Shakespeare", review: "Did not like the book")

romeo_and_juliet = Book.create(title: "Romeo and Juliet", author: "William Shakespeare", review: "Did not like the book")

book_ownership_001 = BookOwnership.create(user_id: 1, book_id: 1)

book_ownership_002 = BookOwnership.create(user_id: 1, book_id: 2)

book_ownership_003 = BookOwnership.create(user_id: 2, book_id: 4)

book_ownership_004 = BookOwnership.create(user_id: 2, book_id: 3)

book_ownership_005 = BookOwnership.create(user_id: 3, book_id: 5)

book_ownership_006 = BookOwnership.create(user_id: 3, book_id: 6)