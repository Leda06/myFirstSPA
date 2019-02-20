class Api::V1::TestsController < ApplicationController
  def index
    @tests = Test.where(feature: params[:filter][:feature]).order("id ASC")
    render :json => @tests
  end
  def create
    @test = Test.create(name: params[:data][:attributes][:name], state: params[:data][:attributes][:state], feature: params[:data][:attributes][:feature])
    render :json => @test
  end
  def show
    @test = Test.find(params[:id])
    render :json => @test
  end
  def update
    @test = Test.find(params[:id])
    @test.update(state: params[:data][:attributes][:state])
    render :json => @test
  end
end
