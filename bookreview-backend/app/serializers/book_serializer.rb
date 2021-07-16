class BookSerializer < ActiveModel::Serializer
    has_many :users
    attributes :id, :title, :author, :review
end