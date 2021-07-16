class UserSerializer < ActiveModel::Serializer
    has_many :books
    attributes :id, :username, :email, :created_at, :updated_at
end