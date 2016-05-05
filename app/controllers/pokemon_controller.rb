class PokemonController < ApplicationController
  require 'net/http'
  
  def index
    @pokemons = JSON.parse(Net::HTTP.get("pokeapi.co", "/api/v2/pokemon/?limit=151&offset=0"))
  end
  
  def pokemon_link
    # This is the method I made to grab info using an ajax api call and rendering a partial.
    # @pokemon = params[:animal]
    # if @pokemon != nil
    #   render(partial: 'pokemon_link')
    # end
  end
  
  def show
    @pokemon = JSON.parse(Net::HTTP.get("pokeapi.co", "/api/v2/pokemon/#{params[:id]}/"))
  end
end
