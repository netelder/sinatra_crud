get '/' do
  # Look in app/views/index.erb
  @notes = Note.all
  erb :index
end
