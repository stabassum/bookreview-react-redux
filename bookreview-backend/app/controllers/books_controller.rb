class BooksController < ApplicationController

    # GET /books
    def index
        books = Book.all
        render json: books
    end

    # GET /books/:id
    def show
        book = Book.find_by(id: params[:id])
        render json: book
    end

    def create
    end

    def update
    end

    # DELETE /books/:id
    def destroy
        book = Book.find_by(id: params[:id])
        book.destroy
    end

end