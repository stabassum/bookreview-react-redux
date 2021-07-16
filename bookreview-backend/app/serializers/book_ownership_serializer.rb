class BookOwnershipSerializer < ActiveModel::Serializer
    belongs_to :user
    belongs_to :book
    attributes :id, :book_id, :user_id
end