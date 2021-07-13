class User < ApplicationRecord
    has_secure_password

    has_many :book_ownerships
    has_many :books, through: :book_ownerships
end