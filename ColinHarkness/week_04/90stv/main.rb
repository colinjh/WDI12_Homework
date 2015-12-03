require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 

  erb :home
end 

get '/tvshows' do
  @tvshows = query_db 'SELECT * FROM tvshows'
  erb :tvshows_index
end  

get '/tvshows/:id' do
  tvshows = query_db "SELECT * FROM tvshows WHERE id=#{params[:id]}"
  @tvshow = tvshows.first
  erb :tvshow_show
end  





def query_db(sql)
  db = SQLite3::Database.new 'tvshows.db' 
   db.results_as_hash = true


   result = db.execute sql
   result
end    