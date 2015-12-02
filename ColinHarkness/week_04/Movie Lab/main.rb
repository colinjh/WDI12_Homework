require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'themoviedb'

get '/' do
  
  erb :home
end

get '/movies' do
  movie_title = params[:movie]
  # @key = Tmdb::Api.key("fc7cf7c679f751e0b10ce587e82005d3")
  # movie_mdb = Tmdb::Movie.find("params[:movie]")
  # id = movie_mdb[0].id
  # @first_movie = Tmdb::Movie.detail(id).title
  # tmb_link = movie_mdb[id].poster_path
  # @tmb_poster = "http://cf2.imgobject.com/t/p/w500/#{tmb_link}"
  movie_url = "http://omdbapi.com/?t=#{movie_title}"
  movie_info = HTTParty.get movie_url
  @poster = movie_info['Poster']
  @title = movie_info['Title']
  @plot = movie_info['Plot']
  erb :movie
end

get '/list' do
  movie_title = params[:movie]
  movie_url = "http://omdbapi.com/?s=#{movie_title}"
  movie_info = HTTParty.get movie_url
  @all_movies = movie_info['Search'].each {|movie_title| puts movie_title['Title']}
  search_results = movie_info['Search']
  first_movie = search_results[0]
  second_movie = search_results[1]
  third_movie = search_results[2]
  fourth_movie = search_results[3]
  fifth_movie = search_results[4]
  # @poster = movie_info['Search'][0]['Poster']
  @first_movie = first_movie['Title']
  @second_movie = second_movie['Title']
  @third_movie = third_movie['Title']
  @fourth_movie = fourth_movie['Title']
  @fifth_movie = fifth_movie['Title']

  erb :list
end




