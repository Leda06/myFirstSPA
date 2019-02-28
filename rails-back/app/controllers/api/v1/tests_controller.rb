class Api::V1::TestsController < ApplicationController
  def index
    if (params.has_key?(:filter) && params[:filter].has_key?(:feature))
      @tests = Test.where(featureid: params[:filter][:feature]).order("id ASC")
    else
      @tests = Test.all.order("id ASC")
    end
    render :json => @tests

  end
  def create
    @test = Test.create(name: params[:data][:attributes][:name], state: params[:data][:attributes][:state], featureid: params[:data][:attributes][:feature])
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
  def destroy
    @test = Test.destroy(params[:id])
  end
end
