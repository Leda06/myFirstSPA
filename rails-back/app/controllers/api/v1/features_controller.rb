class Api::V1::FeaturesController < ApplicationController
  def index
    @features = Feature.all
    render :json => @features
  end

  def show
    @feature = Feature.find(params[:id])
    render :json => @feature
  end

  def create
    @feature = Feature.create(name: params[:data][:attributes][:name])
    render :json => @feature
  end
end
