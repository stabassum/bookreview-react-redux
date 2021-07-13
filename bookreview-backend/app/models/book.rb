class Book < ApplicationRecord
    has_many :book_ownerships
    has_many :users, through: :book_ownerships
end