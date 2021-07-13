class BookOwnershipsController < ApplicationController

    # GET /book_ownerships
    def index 
        book_ownerships = BookOwnership.all
        render json: book_ownerships
    end

    def show
    end

    def create
    end

    def update
    end

    # DELETE /book_ownerships/:id
    def destroy 
        book_ownerships = BookOwnership.find_by(id: params[:id])
        book_ownerships.destroy
    end

end