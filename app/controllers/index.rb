get '/' do
  # Look in app/views/index.erb
  @notes = Note.all
  erb :index
end

post '/notes/create' do
	p params
	note = Note.new(params)
	if note.valid?
		note.save
		return 'redirect' 
	else
		return note.errors.full_messages.to_json
	end
end

get '/notes/:id' do
p params
	note = Note.find(params[:id])
	return note.to_json
end

put '/notes' do
	Note.update(params[:id], params)
	redirect '/'
end


delete '/notes/:id' do
	Note.destroy(params[:id])
	redirect '/'
end
