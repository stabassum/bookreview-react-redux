class UsersController < ApplicationController

    # GET /users
    def index
        users = User.all
        render json: users
        # render json: UserSerializer.new(users)
    end

    # GET /users/:id
    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    # POST /users
    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user #, status: :created
        else
            render json: user.errors #, status: :unprocessable_entity
        end
    end

    def update

    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end